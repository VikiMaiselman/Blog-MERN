import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import usePostApi from "../../hooks/usePostApi";
import { AuthContext } from "../../contexts/Auth.context";

export default function UpdatePostForm() {
  /* location & navigation */
  const navigate = useNavigate();
  const location = useLocation();
  const { postToUpdate } = location.state;

  /* context */
  const { isAuthenticated } = React.useContext(AuthContext);

  /* hooks */
  const [, , , updatePost] = usePostApi();
  const [post, setPost] = React.useState({
    ...postToUpdate,
    title: postToUpdate.title,
    content: postToUpdate.content,
    author: postToUpdate.author,
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
    console.log(post);
    e.preventDefault();
    updatePost(post);
    setPost({
      title: "",
      content: "",
      author: "",
    });
    navigate("/", { replace: true });
  };

  return (
    isAuthenticated && (
      <div class="container">
        <h1>Update post</h1>

        <form id="newPostForm" method="post" action="/api/posts">
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Title"
            required
          ></input>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            placeholder="Content"
            required
            rows="10"
          ></textarea>
          <input
            type="text"
            name="author"
            value={post.author}
            onChange={handleChange}
            placeholder="Author"
            required
          ></input>
          <button class="full-width" type="submit" onClick={handleClick}>
            Save
          </button>
        </form>
      </div>
    )
  );
}

// const [posts, getPosts, createPost] = usePostApi();
