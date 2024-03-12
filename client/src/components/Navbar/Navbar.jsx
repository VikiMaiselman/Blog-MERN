import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth.context";

import InfoIcon from "@mui/icons-material/Info";
import CreateIcon from "@mui/icons-material/Create";
import ArticleIcon from "@mui/icons-material/Article";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

import {
  StyledNavContainer,
  StyledRegularLink,
  StyledLastNavLink,
  NavbarImageTitle,
} from "./StyledNavbar";

export default function Navbar() {
  /* context */
  const { isAuthenticated } = React.useContext(AuthContext);

  /* hooks */
  // eslint-disable-next-line no-unused-vars
  const [isFixed, setIsFixed] = useState(false);
  const defineIfFixed = () => setIsFixed(window.scrollY >= 50);
  useEffect(() => {
    window.addEventListener("scroll", defineIfFixed);
    return () => window.removeEventListener("scroll", defineIfFixed);
  }, []);

  return (
    <>
      <div>
        <img
          src="paisaje-invernal.jpg"
          width={"100%"}
          height={"400"}
          style={{ objectFit: "cover" }}
          alt='Photo by <a href="https://unsplash.com/@todd_diemer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Todd Diemer</a> on <a href="https://unsplash.com/photos/snow-covered-house-67t2GJcD5PI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'
        />

        <NavbarImageTitle>Viki&apos;s Blog...</NavbarImageTitle>
      </div>
      <StyledNavContainer>
        <StyledRegularLink className="Navbar-component">
          <Link to="/">
            <ArticleIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} />
            Posts
          </Link>
        </StyledRegularLink>
        {isAuthenticated && (
          <>
            <StyledRegularLink className="Navbar-component">
              <Link to="/about">
                <InfoIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} />
                About Author
              </Link>
            </StyledRegularLink>
            <StyledRegularLink className="Navbar-component">
              <Link to="/newpost">
                <CreateIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} />
                Create Post
              </Link>
            </StyledRegularLink>
            <StyledLastNavLink className="Navbar-component">
              <Link to="/logout">
                <LogoutSharpIcon
                  sx={{ fontSize: "1rem", verticalAlign: "-2px" }}
                />
                Logout
              </Link>
            </StyledLastNavLink>
          </>
        )}
        {!isAuthenticated && (
          <StyledLastNavLink className="Navbar-component">
            <Link to="/authenticate">
              <LogoutSharpIcon
                sx={{ fontSize: "1rem", verticalAlign: "-2px" }}
              />
              Sign Up / Log In
            </Link>
          </StyledLastNavLink>
        )}
      </StyledNavContainer>
    </>
  );
}
