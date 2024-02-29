import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyledContainer = styled("div")({
  height: "96vh",
  width: "100%",
  display: "flex",
  overflow: "hidden",
  "@media (max-width: 800px)": {
    flexDirection: "column",
    height: "auto",
    height: "100vh",
  },
});

export const StyledLoginForm = styled("div")({
  flex: "1",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.5%",
  flex: "1",
  padding: "50px",
  textAlign: "center",
});

export const StyledLoginLogo = styled("div")({
  flex: "1",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.5%",
  flex: "1",
  padding: "50px",
  textAlign: "center",
  background: "linear-gradient(to right, #444444, #5f6f52)",
  color: "white",
});

export const LoginHeader = styled("div")({
  fontSize: "3.5rem",
  marginTop: "0",
  marginBottom: "1.5%",
  "@media (max-width: 800px)": {
    fontSize: "2rem",
  },
});

export const ButtonsContainer = styled("div")({
  marginTop: "2.5%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2.5%",
});

export const StyledInput = styled(TextField)({
  "&:focus": {
    outline: "none",
    border: "none",
  },
});

// .Auth-form {
//     height: 60vh;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 2.5%;
//   }

//   .Auth-btns {
//     margin-top: 2.5%;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 2.5%;
//   }

//   .login-page-icon {
//     font-size: 10rem;
//   }
