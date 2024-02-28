import { styled } from "@mui/system";

export const StyledNavContainer = styled("div")({
  listStyleType: "none",
  overflow: "hidden",
  backgroundColor: "#444",
  color: "#fff",
  position: " fixed",
  top: "0",
  width: "100%",
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

// .Navbar-component {
//     margin: 0 15px;
//     display: inline;
//     float: left;
//   }
//   .Navbar-component a {
//     width: 100%;
//     display: block;
//     color: white;
//     text-align: center;
//     padding: 14px 16px;
//     text-decoration: none;
//   }
//   .Navbar-component a:hover {
//     background-color: #3f3f3f;
//   }
//   .Navbar-component:first-child a {
//     font-size: larger;
//   }
