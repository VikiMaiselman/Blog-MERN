import mongoose from "mongoose";

import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";

let Comment, Post, User;

/* ************ C O N F I G U R E   D A T A B A S E ************ */
async function initializeDatabase() {
    try {
      await mongoose.connect("mongodb://localhost:27017/Blog");
    } catch (error) {
      console.error(error);
      // handle error appropriately
    }
  
    /* create mongodb schemas */
    const UserSchema = new mongoose.Schema({
      username: String,
      password: String,
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
        user: [UserSchema]
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
      comments: [CommentSchema],
      user: [UserSchema]
    });
  
    /* create mongodb models */
    Comment = mongoose.model("Comment", CommentSchema)
    Post = mongoose.model("Post", PostSchema)
  
    UserSchema.plugin(passportLocalMongoose);
    User = mongoose.model("User", UserSchema);
    passport.use(User.createStrategy()); // creates local login strategy
    passport.serializeUser(User.serializeUser()); // creates session cookie
    passport.deserializeUser(User.deserializeUser()); // cracks session cookie to obtain info
  }

  export {initializeDatabase,Comment, Post, User}