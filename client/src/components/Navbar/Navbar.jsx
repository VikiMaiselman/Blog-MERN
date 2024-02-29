import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth.context";

import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import ReorderTwoToneIcon from "@mui/icons-material/ReorderTwoTone";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";

import {
  StyledNavContainer,
  StyledRegularLink,
  StyledLastNavLink,
} from "./StyledNavbar";

export default function Navbar() {
  const { isAuthenticated } = React.useContext(AuthContext);
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
          src="winter-park.jpg"
          width={"100%"}
          height={"400"}
          style={{ objectFit: "cover" }}
        />
        <h1
          style={{
            position: "absolute",
            top: "15%",
            left: "38%",
            fontFamily: "cursive",
            fontSize: "5rem",
          }}
        >
          Viki Blog...
        </h1>
      </div>
      <StyledNavContainer>
        <StyledRegularLink className="Navbar-component">
          <Link to="/">
            <AccountBalanceSharpIcon
              sx={{ fontSize: "1rem", verticalAlign: "-2px" }}
            />
            &nbsp;Posts
          </Link>
        </StyledRegularLink>
        {isAuthenticated && (
          <>
            <StyledRegularLink className="Navbar-component">
              <Link to="/about">
                <SavingsOutlinedIcon
                  sx={{ fontSize: "1rem", verticalAlign: "-2px" }}
                />
                &nbsp;About Author
              </Link>
            </StyledRegularLink>
            <StyledRegularLink className="Navbar-component">
              <Link to="/newpost">
                <SavingsOutlinedIcon
                  sx={{ fontSize: "1rem", verticalAlign: "-2px" }}
                />
                &nbsp;Create Post
              </Link>
            </StyledRegularLink>
            <StyledLastNavLink className="Navbar-component">
              <Link to="/logout">
                <LogoutSharpIcon
                  sx={{ fontSize: "1rem", verticalAlign: "-2px" }}
                />
                &nbsp;Logout
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
              &nbsp;Sign Up / Log In
            </Link>
          </StyledLastNavLink>
        )}
      </StyledNavContainer>
    </>
  );
}
