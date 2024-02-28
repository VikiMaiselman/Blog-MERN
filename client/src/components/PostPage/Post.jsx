import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePostApi from "../../hooks/usePostApi";
import { Button } from "@mui/material";
import Comment from "../CommentPage/Comment";

export default function Post() {
  /* location & navigation */
  const navigate = useNavigate();
  const location = useLocation();
  const { post, user } = location.state;

  /* hooks */
  const [, , , , deletePost] = usePostApi();

  /* handlers */
  const handleDelete = (id) => {
    deletePost(id);
    navigate("/", { replace: true });
  };
  const handleEdit = (post) => {
    navigate("/update-post", { replace: true, state: { postToUpdate: post } });
  };

  return (
    <div>
      <h1>{post.title}</h1>

      <small>written by {post.author}</small>
      <p>{post.content}</p>
      <small>
        {new Date(post.creationDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </small>

      {user === post.user._id && (
        <>
          <Button onClick={() => handleEdit(post)}>Edit</Button>
          <Button onClick={() => handleDelete(post._id)}>Delete</Button>
        </>
      )}

      <h2>Comments:</h2>
      {React.Children.toArray(
        post.comments.map((comment) => {
          return <Comment />;
        })
      )}
    </div>
  );
}
