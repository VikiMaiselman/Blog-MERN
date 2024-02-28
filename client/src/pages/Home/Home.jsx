import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import usePostApi from "../../hooks/usePostApi";
import { AuthContext } from "../../contexts/Auth.context";
import { StyledContainer, StyledTitle } from "./StyledHome";

export default function Home() {
  /* navigation */
  const navigate = useNavigate();

  /* context */
  const { isAuthenticated, getUser } = React.useContext(AuthContext);

  /* hooks */
  const [posts, fetchPosts, , , deletePost] = usePostApi();
  const sortedPosts = posts?.sort(
    (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
  );
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    const initHomePage = async () => {
      await fetchPosts();
      const currUser = await getUser();
      setUser(currUser);
    };
    initHomePage();
  }, []);

  /* handlers */
  const handleDelete = (id) => {
    deletePost(id);
  };
  const handleEdit = (post) => {
    navigate("/update-post", { replace: true, state: { postToUpdate: post } });
  };
  const handlePostClick = (post, user) => {
    navigate("/post", { state: { post: post, user: user } });
  };

  return (
    <div>
      <h1>My Blog</h1>
      {isAuthenticated && (
        <Link to="/newpost">
          {/* <SavingsOutlinedIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} /> */}
          &nbsp;Create New Post
        </Link>
      )}

      <ul id="postsList">
        {posts &&
          React.Children.toArray(
            sortedPosts.map((post) => {
              {
                {
                  /* console.log("INDIVIDUAL POST", post); */
                }
              }
              return (
                <StyledContainer onClick={() => handlePostClick(post, user)}>
                  <StyledTitle>{post.title}</StyledTitle>
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
                      <Button onClick={() => handleDelete(post._id)}>
                        Delete
                      </Button>
                    </>
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
