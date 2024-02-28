import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

import usePostApi from "../hooks/usePostApi";
import { AuthContext } from "../contexts/Auth.context";
import { Button } from "@mui/material";

export default function Home() {
  const { isAuthenticated, getUser } = React.useContext(AuthContext);
  const [posts, fetchPosts, createPost, updatePost, deletePost] = usePostApi();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const initHomePage = async () => {
      await fetchPosts();
      const currUser = await getUser();
      setUser(currUser);
    };
    initHomePage();
    console.log(user);
  }, []);

  const handleDelete = (id) => {
    // e.preventDefault();
    console.log(id);
    deletePost(id);
  };

  const StyledContainer = styled("div")({
    width: "90%",
    margin: "5% auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  });

  return (
    <div>
      <h1>My Blog</h1>
      {isAuthenticated && (
        <Link to="/newpost">
          {/* <SavingsOutlinedIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} /> */}
          &nbsp;New Post
        </Link>
      )}

      <ul id="postsList">
        {posts &&
          React.Children.toArray(
            posts.map((post) => {
              console.log("INDIVIDUAL POST", post);
              return (
                <StyledContainer>
                  <h2>{post.title}</h2>
                  <small>{post.creationDate}</small>
                  <p>{post.content}</p>
                  <small></small>
                  <Link to="/update-post">
                    {/* <SavingsOutlinedIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} /> */}
                    &nbsp;Edit
                  </Link>
                  {user === post.user._id && (
                    <Button onClick={() => handleDelete(post._id)}>
                      Delete
                    </Button>
                  )}
                  <a class="edit" href="/edit/<%= post.id %>">
                    Edit
                  </a>
                  {/* <a class="delete" href="/api/posts/delete/<%= post.id %>">
                    Delete
                  </a> */}
                </StyledContainer>
              );
            })
          )}
      </ul>
    </div>
  );
}
