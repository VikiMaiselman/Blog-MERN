import React from "react";

import { url, headers } from "../service/config";
import axios from "axios";
import Swal from "sweetalert2";

export default function usePostApi() {
  const [posts, setPosts] = React.useState();
  const fetchPosts = async () => {
    try {
      const response = await axios.get(url, { withCredentials: true }, headers);
      const postsInDB = response.data;
      setPosts(postsInDB);
      return postsInDB;
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Ooops!",
        text: error.response.data,
        icon: "error",
        confirmButtonColor: "rgb(154, 68, 68)",
        iconColor: "rgb(154, 68, 68)",
      });
    }
  };

  const createPost = async (post) => {
    try {
      await axios.post(
        url,
        { newPost: post },
        { withCredentials: true },
        headers
      );
      fetchPosts();
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Ooops!",
        text: error.response.data,
        icon: "error",
        confirmButtonColor: "rgb(154, 68, 68)",
        iconColor: "rgb(154, 68, 68)",
      });
    }
  };

  const updatePost = async (post) => {
    try {
      await axios.patch(
        `${url}/update-post`,
        { updatedPost: post },
        { withCredentials: true },
        headers
      );
      fetchPosts();
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Ooops!",
        text: error.response.data,
        icon: "error",
        confirmButtonColor: "rgb(154, 68, 68)",
        iconColor: "rgb(154, 68, 68)",
      });
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.post(
        `${url}/delete-post`,
        { postId: postId },
        { withCredentials: true },
        headers
      );
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Ooops!",
        text: error.response.data,
        icon: "error",
        confirmButtonColor: "rgb(154, 68, 68)",
        iconColor: "rgb(154, 68, 68)",
      });
    }
  };

  return [posts, fetchPosts, createPost, updatePost, deletePost];
}
