import { styled } from "@mui/system";

export const StyledNavContainer = styled("div")({
  listStyleType: "none",
  overflow: "hidden",
  backgroundColor: "#161008",
  color: "#fff",
  position: " fixed",
  top: "0",
  width: "100%",
  marginTop: "-6px",
});

const StyledNavLink = styled("li")({
  display: "block",
  padding: "14px 32px",
  float: "left",
  textDecoration: "none",
  textAlign: "center",
  fontSize: "1.2rem",
  color: "#fff",
  transition: "all 0.5s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const StyledRegularLink = styled(StyledNavLink)({
  float: "left",
});

export const StyledLastNavLink = styled(StyledNavLink)({
  float: "right",
});
