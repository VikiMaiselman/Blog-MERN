import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Comment from "./Comment/Comment";
import CreateCommentDialog from "./Comment/CreateCommentDialog";

import { AuthContext } from "../../contexts/Auth.context";
import usePostApi from "../../hooks/usePostApi";
import useCommentApi from "../../hooks/useCommentApi";

export default function Post() {
  /* location & navigation */
  const navigate = useNavigate();
  const location = useLocation();
  const { post, user } = location.state;

  const { isAuthenticated } = React.useContext(AuthContext);

  /* hooks */
  const [hasSubmittedComment, setHasSubmittedComment] = React.useState(false);
  const [, , , , deletePost] = usePostApi();
  const [comments, fetchComments] = useCommentApi();
  console.log("Page of Post rerenders");

  React.useEffect(() => {
    fetchComments(post._id);
  }, [hasSubmittedComment]);

  /* handlers */
  const handleDeletePost = (id) => {
    deletePost(id);
    navigate("/", { replace: true });
  };
  const handleEditPost = (post) => {
    navigate("/update-post", { replace: true, state: { postToUpdate: post } });
  };

  const handleAddComment = () => {};
  const handleUpdateComment = () => {};
  const handleDeleteComment = () => {};

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
          <Button onClick={() => handleEditPost(post)}>Edit</Button>
          <Button onClick={() => handleDeletePost(post._id)}>Delete</Button>
        </>
      )}
      <h2>Comments:</h2>
      {comments &&
        React.Children.toArray(
          comments.map((comment) => {
            return <Comment comment={comment} />;
          })
        )}
      {isAuthenticated && (
        <CreateCommentDialog
          author={post.author}
          id={post._id}
          hasSubmitted={setHasSubmittedComment}
        />
      )}

      {/* {user === post.user._id && (
        <>
          <Button onClick={() => handleEdit(post)}>Edit</Button>
          <Button onClick={() => handleDelete(post._id)}>Delete</Button>
        </>
      )} */}
    </div>
  );
}
