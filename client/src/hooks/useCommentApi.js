import React from "react";
import axios from "axios";

import { url, headers } from "../service/config";

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
      console.log("FETCHING COMMENTS", commentsInDB);
      const sortedComments = commentsInDB?.sort(
        (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
      );

      setComments(sortedComments);
      return commentsInDB;
    } catch (err) {}
  };

  const createComment = async (comment, postId) => {
    try {
      console.log(comment);
      const response = await axios.post(
        `${url}/comment/${postId}`,
        comment,
        { withCredentials: true },
        headers
      );
      const commentsInDB = response.data;
      console.log("CREATING COMMENT", response.data, commentsInDB);
      await fetchComments(postId);
      return commentsInDB;
    } catch (err) {}
  };

  return [comments, fetchComments, createComment];
}