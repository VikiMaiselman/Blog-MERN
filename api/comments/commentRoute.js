import express from "express";
const router = express.Router();

import { Post, Comment } from "../adb_mongo/database.js";

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  try {
    const result = await Comment.find({ post: postId });
    console.log(result);
    return res.status(201).json(result);
  } catch (err) {
    res.status(400).json("Comments could not be fetched. Try again later");
  }
});

router.post("/:postId", async (req, res) => {
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
});

router.patch("/upd", async (req, res) => {
  try {
  } catch (err) {}
});
router.delete("/del", async (req, res) => {
  try {
  } catch (err) {}
});

export { router as commentRoutes };
