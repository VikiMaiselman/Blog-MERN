import express from "express";
const router = express.Router();

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "./postController.js";

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/update-post", updatePost);
router.post("/delete-post", deletePost);

export { router as postRoutes };
