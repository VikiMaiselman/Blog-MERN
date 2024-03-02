import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Comment from "./Comment/Comment";
import CreateCommentDialog from "./Comment/CreateCommentDialog";

import { AuthContext } from "../../contexts/Auth.context";
import usePostApi from "../../hooks/usePostApi";
import useCommentApi from "../../hooks/useCommentApi";

import {
  StyledContainer,
  ScrolledContainer,
  TextContent,
  ArticleFooter,
  Author,
  CustomDate,
  StyledHeader,
  LiveCommentContainer,
  PostTitle,
} from "./StyledPost";
import { ThemeProvider } from "@emotion/react";
import { CustomThemeContext } from "../../contexts/CustomTheme.context";

export default function Post() {
  /* location & navigation */
  const navigate = useNavigate();
  const location = useLocation();
  const { post, user } = location.state;

  /* context */
  const { isAuthenticated } = React.useContext(AuthContext);
  const { theme } = React.useContext(CustomThemeContext);

  /* hooks */
  const [, , , , deletePost] = usePostApi();
  const [comments, fetchComments, createComment, updateComment, deleteComment] =
    useCommentApi();

  React.useEffect(() => {
    fetchComments(post._id);
  }, []);

  /* handlers */
  const handleDeletePost = (id) => {
    deletePost(id);
    navigate("/", { replace: true });
  };
  const handleEditPost = (post) => {
    navigate("/update-post", { replace: true, state: { postToUpdate: post } });
  };
  const handleCreateComment = (comment) => {
    createComment(comment, post._id);
  };

  const handleUpdateComment = (comment) => {
    updateComment(comment, post._id);
  };
  const handleDeleteComment = (commentId) => {
    deleteComment(commentId, post._id);
  };

  return (
    <StyledContainer>
      <ScrolledContainer>
        <PostTitle>{post.title}</PostTitle>
        <TextContent>{post.content}</TextContent>
        <ArticleFooter>
          <div>
            <Author>{post.author}</Author>
            <CustomDate>
              {new Date(post.creationDate).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </CustomDate>
          </div>

          {user.id === post.user._id && (
            <div>
              <ThemeProvider theme={theme}>
                <Button
                  onClick={() => handleEditPost(post)}
                  color="edit"
                  fontSize="small"
                  variant="outlined"
                  sx={{ margin: "0 5px" }}
                >
                  Edit Post
                </Button>
              </ThemeProvider>

              <ThemeProvider theme={theme}>
                <Button
                  onClick={() => handleDeletePost(post._id)}
                  color="delete"
                  fontSize="small"
                  variant="outlined"
                  sx={{ margin: "0 5px" }}
                >
                  Delete Post
                </Button>
              </ThemeProvider>
            </div>
          )}
        </ArticleFooter>

        {comments?.length !== 0 && <StyledHeader>Comments:</StyledHeader>}
        {comments &&
          React.Children.toArray(
            comments.map((comment) => {
              return (
                <Comment
                  comment={comment}
                  writtenByThisUser={user.id === comment.user._id}
                  handleUpdate={handleUpdateComment}
                  handleDelete={handleDeleteComment}
                />
              );
            })
          )}
        {isAuthenticated && (
          <LiveCommentContainer>
            <StyledHeader>Leave a reply:</StyledHeader>
            <p>
              Let us know what you think. Share your thoughts with others and
              take part in positive conversation.
            </p>
            <CreateCommentDialog
              author={user.username}
              id={post._id}
              createComment={handleCreateComment}
            />
          </LiveCommentContainer>
        )}
      </ScrolledContainer>
    </StyledContainer>
  );
}
