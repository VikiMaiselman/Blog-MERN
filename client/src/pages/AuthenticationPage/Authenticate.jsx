import React, { useState } from "react";

import {
  FormHelperText,
  InputLabel,
  Button,
  TextField,
  FormControl,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

import Swal from "sweetalert2";

import { AuthContext } from "../../contexts/Auth.context";

import {
  ButtonsContainer,
  LoginHeader,
  StyledContainer,
  StyledLoginForm,
  StyledLoginLogo,
} from "./StyleAuth";

export default function Authenticate() {
  /* context */
  const { login, register } = React.useContext(AuthContext);

  /* hooks */
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validate = (name, value) => {
    const newErrors = {};

    if (name === "username" && value.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (name === "password" && value.trim() === "") {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
  };

  /* handlers */
  const handleChange = (event) => {
    const { name, value } = event.target;

    const updateState = (prevState) => {
      return { ...prevState, [name]: value };
    };
    setUser(updateState);
    validate(name, value);
  };

  const handleLoginClick = async (event) => {
    event.preventDefault();
    if (!user.username || !user.password) {
      Swal.fire({
        title: "Ooops!",
        text: "Looks like you did not provide all the necessary info",
        icon: "error",
      });
      return;
    }
    await login(user);
    setUser({
      username: "",
      password: "",
    });
    setErrors({
      username: "",
      password: "",
    });
  };

  const handleRegisterClick = async (event) => {
    event.preventDefault();
    if (!user.username || !user.password) {
      Swal.fire({
        title: "Ooops!",
        text: "Looks like you did not provide all the necessary info",
        icon: "error",
      });
      return;
    }
    await register(user);
    setUser({
      username: "",
      password: "",
    });
    setErrors({
      username: "",
      password: "",
    });
  };

  return (
    <StyledContainer>
      <StyledLoginForm>
        <form className="Auth-form">
          <LoginHeader>Login | Register</LoginHeader>
          <InputLabel htmlFor="username">Username:</InputLabel>
          <TextField
            onChange={handleChange}
            id="username"
            name="username"
            value={user.username}
            autoComplete="off"
            fullWidth
            required
            error={Boolean(errors.username)}
            helperText={errors.username}
          />

          <InputLabel htmlFor="password">Password:</InputLabel>
          <TextField
            onChange={handleChange}
            name="password"
            value={user.password}
            type={"password"}
            autoComplete="off"
            fullWidth
            required
            error={Boolean(errors.password)}
            helperText={errors.password}
          />

          <FormHelperText>We won't use your information.</FormHelperText>

          <ButtonsContainer>
            {/* <ThemeProvider theme={theme}> */}
            <Button
              className="Auth-btn"
              onClick={handleLoginClick}
              variant="contained"
              color="success"
              // color="login"
            >
              <LoginIcon /> Login
            </Button>
            {/* </ThemeProvider> */}

            {/* <ThemeProvider theme={theme}> */}
            <Button
              className="Auth-btn"
              onClick={handleRegisterClick}
              variant="contained"
              color="secondary"
              // color="register"
            >
              <HowToRegIcon />
              {"  "}
              Signup
            </Button>
            {/* </ThemeProvider> */}
          </ButtonsContainer>
        </form>
      </StyledLoginForm>

      <StyledLoginLogo>
        <AssignmentIndIcon
          className="login-page-icon"
          style={{ fontSize: "10rem" }}
        />
        <LoginHeader>Personal Blog</LoginHeader>
        <h3>Authorize yourself to become a part of the community...</h3>
      </StyledLoginLogo>
    </StyledContainer>
  );
}
