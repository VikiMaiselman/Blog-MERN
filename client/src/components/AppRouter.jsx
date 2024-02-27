import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "../pages/Home";
import AboutAuthor from "../pages/AboutAuthor";
import Authenticate from "../pages/Authenticate";
import Logout from "../pages/Logout";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/about" element={<AboutAuthor />}></Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/authenticate" element={<Authenticate />} />
      </Routes>
    </>
  );
}
