import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import session from "express-session";
import passport from "passport";

const app = express();
const port = 3008;

// CORS (development stage only)
app.use(
  cors({
    origin: "http://localhost:5173", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use("*", function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.options("*", cors());

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Authentication
app.use(
  session({
    secret: process.env.PASSPORT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

import { initializeDatabase } from "./adb_mongo/database.js";

import { postRoutes } from "./posts/postRoute.js";
import { commentRoutes } from "./comments/commentRoute.js";
import { userAuthRoutes } from "./users/userRoute.js";

initializeDatabase();

app.use(userAuthRoutes);
app.use(postRoutes);
app.use("/comment", commentRoutes);

// Listening to incoming requests
app.listen(port, () => console.log(`Server's up. Listening on port ${port}`));

// DB connection close
process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log(
      "Mongoose connection is disconnected due to application termination"
    );
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
});
