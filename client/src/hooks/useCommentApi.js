import React from "react";
import axios from "axios";

import { url, headers } from "../service/config";
import Swal from "sweetalert2";

export default function useCommentApi() {
  const [comments, setComments] = React.useState("");

  const fetchComments = async (postId) => {
    try {
      const response = await axios.get(
        `${url}/comment/${postId}`,
        { withCredentials: true },
        headers
      );
      const commentsInDB = response.data;
      const sortedComments = commentsInDB?.sort(
        (a, b) => new Date(a.creationDate) - new Date(b.creationDate)
      );

      setComments(sortedComments);
      return commentsInDB;
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

  const createComment = async (comment, postId) => {
    try {
      const response = await axios.post(
        `${url}/comment/${postId}`,
        comment,
        { withCredentials: true },
        headers
      );
      const commentsInDB = response.data;
      await fetchComments(postId);
      return commentsInDB;
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

  const updateComment = async (comment, postId) => {
    try {
      await axios.patch(
        `${url}/comment/upd`,
        { updatedComment: comment },
        { withCredentials: true },
        headers
      );
      await fetchComments(postId);
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

  const deleteComment = async (commentId, postId) => {
    try {
      await axios.post(
        `${url}/comment/del`,
        { commentId: commentId },
        { withCredentials: true },
        headers
      );
      await fetchComments(postId);
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

  return [comments, fetchComments, createComment, updateComment, deleteComment];
}
