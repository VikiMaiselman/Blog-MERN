import React from "react";
import { useNavigate } from "react-router-dom";
import usePostApi from "../../hooks/usePostApi";
import { AuthContext } from "../../contexts/Auth.context";
import { Button, TextField } from "@mui/material";
import { StyledContainer, StyledPostForm } from "./StyledPostForm";

export default function NewPostForm() {
  /* navigation */
  const navigate = useNavigate();

  /* context */
  const { isAuthenticated } = React.useContext(AuthContext);

  /* hooks */
  const [posts, fetchPosts, createPost] = usePostApi();
  const [post, setPost] = React.useState({
    title: "",
    content: "",
    author: "",
  });

  /* handlers */
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatePostState = (prevState) => {
      return { ...prevState, [name]: value };
    };
    setPost(updatePostState);
  };
  const handleClick = (e) => {
    e.preventDefault();
    createPost(post);
    setPost({
      title: "",
      content: "",
      author: "",
    });
    navigate("/", { replace: true });
  };

  return (
    isAuthenticated && (
      <StyledContainer>
        <h1>NEW POST</h1>

        <StyledPostForm>
          <TextField
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Title"
            fullWidth
            required
          />
          <TextField
            name="content"
            value={post.content}
            onChange={handleChange}
            placeholder="Content"
            required
            fullWidth
            multiline
            rows={16}
          />
          <TextField
            type="text"
            name="author"
            value={post.author}
            onChange={handleChange}
            placeholder="Author"
            fullWidth
            required
          />
          <Button
            type="submit"
            onClick={handleClick}
            color="secondary"
            fontSize="small"
            variant="contained"
            sx={{ margin: "0 5px" }}
          >
            Create
          </Button>
        </StyledPostForm>
      </StyledContainer>
    )
  );
}
