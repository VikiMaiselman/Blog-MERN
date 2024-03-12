import mongoose from "mongoose";

import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

let Comment, Post, User, db;

/* ************ C O N F I G U R E   D A T A B A S E ************ */
async function initializeDatabase() {
  try {
    db = await mongoose.connect(process.env.DB_ATLAS_URL);
  } catch (error) {
    console.error("Connection with database could not be established", error);
  }

  /* create mongodb schemas */
  const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

  const PostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    creationDate: {
      type: Date,
    },
    user: UserSchema,
  });

  const CommentSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    creationDate: {
      type: Date,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    user: UserSchema,
  });

  /* create mongodb models */
  Comment = mongoose.model("Comment", CommentSchema);
  Post = mongoose.model("Post", PostSchema);

  UserSchema.plugin(passportLocalMongoose);
  User = mongoose.model("User", UserSchema);
  passport.use(User.createStrategy()); // creates local login strategy
  passport.serializeUser(User.serializeUser()); // creates session cookie
  passport.deserializeUser(User.deserializeUser()); // cracks session cookie to obtain info
}

export { initializeDatabase, Comment, Post, User, db };
