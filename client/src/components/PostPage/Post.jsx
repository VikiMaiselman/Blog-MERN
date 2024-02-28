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
} from "./StyledPost";

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
  console.log(user);

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

  const handleUpdateComment = () => {};
  const handleDeleteComment = () => {};

  return (
    <StyledContainer>
      <ScrolledContainer>
        <h1>{post.title}</h1>
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
              <Button
                onClick={() => handleEditPost(post)}
                color="success"
                fontSize="small"
                variant="outlined"
                sx={{ margin: "0 5px" }}
              >
                Edit Post
              </Button>
              <Button
                onClick={() => handleDeletePost(post._id)}
                color="secondary"
                fontSize="small"
                variant="outlined"
                sx={{ margin: "0 5px" }}
              >
                Delete Post
              </Button>
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
                  writtenByThisUser={user.id === post.user._id}
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
              hasSubmitted={setHasSubmittedComment}
            />
          </LiveCommentContainer>
        )}
      </ScrolledContainer>
    </StyledContainer>
  );
}