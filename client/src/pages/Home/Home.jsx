import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

import usePostApi from "../../hooks/usePostApi";
import { AuthContext } from "../../contexts/Auth.context";
import {
  StyledContainer,
  SectionHeading,
  PostsList,
  StyledTitle,
  ArticleFooter,
  Author,
  CustomDate,
  StyledParagraph,
} from "./StyledHome";
import { CustomThemeContext } from "../../contexts/CustomTheme.context";
import { ThemeProvider } from "@emotion/react";

export default function Home() {
  /* navigation */
  const navigate = useNavigate();

  /* context */
  const { isAuthenticated, getUser } = React.useContext(AuthContext);
  const { theme } = React.useContext(CustomThemeContext);

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
        <h1>See What's New</h1>
      </SectionHeading>

      {isAuthenticated && (
        <Link to="/newpost">
          {/* <SavingsOutlinedIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} /> */}
          <Button color="secondary" fontSize="small" sx={{ margin: "0 5px" }}>
            &nbsp;Create New Post
          </Button>
        </Link>
      )}

      <PostsList>
        {posts &&
          React.Children.toArray(
            sortedPosts.map((post) => {
              return (
                <StyledContainer onClick={() => handlePostClick(post, user)}>
                  <StyledTitle>{post.title}</StyledTitle>
                  <StyledParagraph>{post.content}</StyledParagraph>

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
                        <ThemeProvider theme={theme}>
                          <Button
                            onClick={(e) => handleEdit(e, post)}
                            color="edit"
                            fontSize="small"
                            variant="outlined"
                            sx={{ margin: "0 5px" }}
                          >
                            Edit
                          </Button>
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                          <Button
                            onClick={(e) => handleDelete(e, post._id)}
                            color="delete"
                            fontSize="small"
                            variant="outlined"
                            sx={{ margin: "0 5px" }}
                          >
                            Delete
                          </Button>
                        </ThemeProvider>
                      </div>
                    )}
                  </ArticleFooter>
                </StyledContainer>
              );
            })
          )}
      </PostsList>
    </div>
  );
}
