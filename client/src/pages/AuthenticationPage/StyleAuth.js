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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2.5%",
  flex: "1",
  padding: "50px",
  textAlign: "center",
  background: "linear-gradient(to right, #EDFDFD, #A8B8C5)",
  color: "black",
});

export const LoginHeader = styled("div")({
  fontSize: "3.5rem",
  fontFamily: "cursive",
  marginTop: "0",
  marginBottom: "1.5%",
  "@media (max-width: 800px)": {
    fontSize: "2rem",
  },
  "@media (max-width: 400px)": {
    fontSize: "1rem",
    marginBottom: "0",
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
