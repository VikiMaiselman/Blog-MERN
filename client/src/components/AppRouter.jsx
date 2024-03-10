import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "../pages/Home/Home";
import AboutAuthor from "../pages/AboutAuthor";
import NewPost from "./PostForm/NewPostForm";
import UpdatePost from "./PostForm/UpdatePostForm";
import Post from "./PostPage/Post";
import Authenticate from "../pages/AuthenticationPage/Authenticate";
import Logout from "../pages/Logout";
import { AuthContext } from "../contexts/Auth.context";

export default function AppRouter() {
  const { isAuthenticated } = React.useContext(AuthContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        {isAuthenticated && <Route path="/about" element={<AboutAuthor />} />}
        {isAuthenticated && <Route path="/newpost" element={<NewPost />} />}
        {isAuthenticated && (
          <Route path="/update-post" element={<UpdatePost />} />
        )}
        <Route path="/post" element={<Post />} />
        {isAuthenticated && <Route path="/logout" element={<Logout />} />}
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="*" element={<Authenticate />} />
      </Routes>
    </>
  );
}
