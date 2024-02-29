import React from "react";

import { url, headers } from "../service/config";
import axios from "axios";

export default function usePostApi() {
  const [posts, setPosts] = React.useState();

  // fetchPosts, createPost, updatePost, deletePost
  const fetchPosts = async () => {
    try {
      const response = await axios.get(url, { withCredentials: true }, headers);
      const postsInDB = response.data;
      setPosts(postsInDB);
      return postsInDB;
    } catch (err) {}
  };

  const createPost = async (post) => {
    console.log("CREATING POST", post);
    try {
      await axios.post(
        url,
        { newPost: post },
        { withCredentials: true },
        headers
      );
      const postsInDB = fetchPosts();
      console.log(postsInDB);
    } catch (err) {}
  };

  const updatePost = async (post) => {
    console.log("UPDATING POST", post);
    try {
      await axios.patch(
        `${url}/update-post`,
        { updatedPost: post },
        { withCredentials: true },
        headers
      );
      const postsInDB = fetchPosts();
      console.log(postsInDB);
    } catch (err) {}
  };

  const deletePost = async (postId) => {
    console.log("DELETNG POST", postId);
    try {
      await axios.post(
        `${url}/delete-post`,
        { postId: postId },
        { withCredentials: true },
        headers
      );
      const postsInDB = fetchPosts();
    } catch (err) {}
  };

  return [posts, fetchPosts, createPost, updatePost, deletePost];
}
