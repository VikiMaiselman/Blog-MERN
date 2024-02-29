import { styled } from "@mui/system";

export const NavbarImageTitle = styled("div")({
  fontFamily: "cursive",
  fontSize: "5rem",
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "@media (max-width: 800px)": {
    fontSize: "2.5rem",
  },
  "@media (max-width: 300px)": {
    fontSize: "2rem",
  },
});

export const StyledNavContainer = styled("div")({
  listStyleType: "none",
  overflow: "hidden",
  backgroundColor: "#161008",
  color: "#fff",
  position: " fixed",
  top: "0",
  width: "100%",
  marginTop: "-6px",
  "@media (max-width: 670px)": {
    display: "flex",
  },
});

const StyledNavLink = styled("li")({
  display: "block",
  padding: "14px 32px",
  textDecoration: "none",
  textAlign: "center",
  fontSize: "1.2rem",
  color: "#fff",
  transition: "all 0.5s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "@media (max-width: 450px)": {
    fontSize: "0.65rem",
  },
});

export const StyledRegularLink = styled(StyledNavLink)({
  float: "left",
});

export const StyledLastNavLink = styled(StyledNavLink)({
  float: "right",
});
