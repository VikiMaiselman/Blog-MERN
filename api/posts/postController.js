import { Post } from "../mongo_db/database.js";

export const getPosts = async (req, res) => {
  try {
    const result = await Post.find();
    return res.status(201).json(result);
  } catch (err) {
    res.status(400).json("Posts could not be fetched. Try again later");
  }
};

export const createPost = async (req, res) => {
  const { title, author, content } = req.body.newPost;
  const creationDate = new Date();
  console.log(req.user);

  const newPost = new Post({
    title: title,
    author: author,
    content: content,
    creationDate: creationDate,
    comments: [],
    user: req.user,
  });

  try {
    const result = await newPost.save();
    return res.status(201).json("Post successfully created");
  } catch (err) {
    res.status(400).json("Could not create a post");
  }
};

export const updatePost = async (req, res) => {
  const { updatedPost } = req.body;

  try {
    const result = await Post.findOneAndUpdate(
      { _id: updatedPost._id },
      { $set: updatedPost }
    );
    console.log(result);
    return res.status(200).json("Post successfully updated");
  } catch (err) {
    res.status(400).json("Could not updaate a post");
  }
};

export const deletePost = async (req, res) => {
  const { postId } = req.body;
  try {
    const result = await Post.deleteOne({ _id: postId });
    return res.status(200).json("Post successfully deleted");
  } catch (err) {
    res.status(400).json("Could not delete a post");
  }
};
