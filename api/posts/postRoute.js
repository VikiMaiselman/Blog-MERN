import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Let us start</h1>");
});

export { router as posts};
