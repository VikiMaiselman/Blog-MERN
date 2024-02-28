import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import usePostApi from "../../hooks/usePostApi";
import { AuthContext } from "../../contexts/Auth.context";
import {
  StyledContainer,
  SectionHeading,
  StyledTitle,
  ArticleFooter,
  Author,
  CustomDate,
} from "./StyledHome";

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
  const handleDelete = (e, id) => {
    e.stopPropagation();
    deletePost(id);
  };
  const handleEdit = (e, post) => {
    e.stopPropagation();
    navigate("/update-post", { replace: true, state: { postToUpdate: post } });
  };
  const handlePostClick = (post, user) => {
    navigate("/post", { state: { post: post, user: user } });
  };

  return (
    <div>
      <SectionHeading>
        <h1>My Blog</h1>
      </SectionHeading>

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
                  <p>{post.content}</p>

                  <ArticleFooter>
                    <div>
                      <Author>{post.author}</Author>
                      <CustomDate>
                        {new Date(post.creationDate).toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </CustomDate>
                    </div>
                    {user?.id === post.user._id && (
                      <div>
                        <Button
                          onClick={(e) => handleEdit(e, post)}
                          color="success"
                          fontSize="small"
                          variant="outlined"
                          sx={{ margin: "0 5px" }}
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={(e) => handleDelete(e, post._id)}
                          color="secondary"
                          fontSize="small"
                          variant="outlined"
                          sx={{ margin: "0 5px" }}
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </ArticleFooter>
                </StyledContainer>
              );
            })
          )}
      </ul>
    </div>
  );
}
