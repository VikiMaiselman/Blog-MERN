import React from "react";
import usePostApi from "../../hooks/usePostApi";
import { AuthContext } from "../../contexts/Auth.context";

export default function NewPostForm() {
  const { isAuthenticated } = React.useContext(AuthContext);
  const [posts, fetchPosts, createPost] = usePostApi();
  const [post, setPost] = React.useState({
    title: "",
    content: "",
    author: "",
  });

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
  };

  return (
    isAuthenticated && (
      <div class="container">
        <h1>NEW POST</h1>

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
            Create
          </button>
        </form>
      </div>
    )
  );
}

// const [posts, getPosts, createPost] = usePostApi();
