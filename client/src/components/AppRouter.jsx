import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "../pages/Home/Home";
import AboutAuthor from "../pages/AboutAuthor";
import NewPost from "./PostForm/NewPostForm";
import UpdatePost from "./PostForm/UpdatePostForm";
import Post from "./PostPage/Post";
import Authenticate from "../pages/Authenticate";
import Logout from "../pages/Logout";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<AboutAuthor />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/update-post" element={<UpdatePost />} />
        <Route path="/post" element={<Post />}/>
        <Route path="/logout" element={<Logout />} />
        <Route path="/authenticate" element={<Authenticate />} />
      </Routes>
    </>
  );
}
