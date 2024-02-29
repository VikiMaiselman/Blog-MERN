import express from "express";
const router = express.Router();

import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "./commentController.js";

router.get("/comment/:postId", getComments);
router.patch("/comment/upd", updateComment);
router.post("/comment/del", deleteComment);
router.post("/comment/:postId", createComment);

export { router as commentRoutes };
