import express from "express";
const router = express.Router();

import { Post } from "../mongo_db/database.js";

router.get("/", async (req, res) => {
  try {
    const res = await Post.findOne({ user: req.user });
    console.log(req.user);
  } catch (err) {}
  res.send("<h1>Let us start</h1>");
});

export { router as postRoutes };
