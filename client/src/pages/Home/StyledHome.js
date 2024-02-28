import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  width: "90%",
  padding: "1.75%",
  margin: "5% auto",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    cursor: "pointer",
  },
});

export const StyledTitle = styled("h2")({
  fontSize: "2rem",
  margin: "15px",
});
