import { Comment } from "../adb_mongo/database.js";

export const getComments = async (req, res) => {
  const postId = req.params.postId;
  try {
    const result = await Comment.find({ post: postId });
    return res.status(201).json(result);
  } catch (err) {
    res.status(400).json("Comments could not be fetched. Try again later");
  }
};

export const updateComment = async (req, res) => {
  const { updatedComment } = req.body;
  try {
    await Comment.findOneAndUpdate({ _id: updatedComment._id }, updatedComment);
    return res.status(200).json("Comment successfully updated");
  } catch (err) {
    res.status(400).json("Could not update the comment");
  }
};

export const deleteComment = async (req, res) => {
  const { commentId } = req.body;
  try {
    await Comment.deleteOne({ _id: commentId });
    return res.status(200).json("Comment successfully deleted");
  } catch (err) {
    res.status(400).json(err);
  }
};

export const createComment = async (req, res) => {
  const { content, author } = req.body;
  const postId = req.params.postId;
  const creationDate = new Date();

  const newComment = new Comment({
    author: author,
    content: content,
    creationDate: creationDate,
    post: postId,
    user: req.user,
  });

  try {
    await newComment.save();
    return res.status(201).json("Comment successfully created");
  } catch (err) {
    res.status(400).json("Could not create a comment");
  }
};
