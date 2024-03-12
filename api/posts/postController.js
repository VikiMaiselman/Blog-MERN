import { Post, Comment, db } from "../adb_mongo/database.js";

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

  const newPost = new Post({
    title: title,
    author: author,
    content: content,
    creationDate: creationDate,
    user: req.user,
  });

  try {
    await newPost.save();
    return res.status(201).json("Post successfully created");
  } catch (err) {
    res.status(400).json("Could not create a post");
  }
};

export const updatePost = async (req, res) => {
  const { updatedPost } = req.body;

  try {
    await Post.findOneAndUpdate({ _id: updatedPost._id }, updatedPost);
    return res.status(200).json("Post successfully updated");
  } catch (err) {
    res.status(400).json("Could not update a post");
  }
};

export const deletePost = async (req, res) => {
  const { postId } = req.body;
  try {
    const session = await db.startSession();

    try {
      await session.withTransaction(async () => {
        // Important:: You must pass the session to the operations
        await Post.deleteOne({ _id: postId }, { session });
        await Comment.deleteMany({ post: postId }, { session });
      });
    } finally {
      await session.endSession();
    }
    return res.status(200).json("Post successfully deleted");
  } catch (err) {
    res.status(400).json("Could not delete a post");
  }
};
