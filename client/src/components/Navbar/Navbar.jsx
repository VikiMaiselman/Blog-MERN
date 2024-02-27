import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth.context";

import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import ReorderTwoToneIcon from "@mui/icons-material/ReorderTwoTone";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";

export default function Navbar() {
  const { isAuthenticated } = React.useContext(AuthContext);
  console.log(isAuthenticated);
  const [isFixed, setIsFixed] = useState(false);

  const defineIfFixed = () => setIsFixed(window.scrollY >= 50);

  useEffect(() => {
    window.addEventListener("scroll", defineIfFixed);
    return () => window.removeEventListener("scroll", defineIfFixed);
  }, []);

  return (
    <ul className={isFixed ? "Navbar scroll" : "Navbar"}>
      <li className="Navbar-component">
        <Link to="/">
          <AccountBalanceSharpIcon
            sx={{ fontSize: "1rem", verticalAlign: "-2px" }}
          />
          &nbsp;Posts
        </Link>
      </li>
      {isAuthenticated && (
        <li className="Navbar-component">
          <Link to="/about">
            <SavingsOutlinedIcon
              sx={{ fontSize: "1rem", verticalAlign: "-2px" }}
            />
            &nbsp;About Author
          </Link>
        </li>
      )}
      {!isAuthenticated && (
        <li className="Navbar-component">
          <Link to="/authenticate">
            <LogoutSharpIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} />
            &nbsp;Sign Up / Log In
          </Link>
        </li>
      )}
      {isAuthenticated && (
        <li className="Navbar-component">
          <Link to="/logout">
            <LogoutSharpIcon sx={{ fontSize: "1rem", verticalAlign: "-2px" }} />
            &nbsp;Logout
          </Link>
        </li>
      )}
    </ul>
  );
}
