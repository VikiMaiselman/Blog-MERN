import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  position: "relative",
  margin: "0 auto",
  padding: "60px 2rem",
  maxWidth: "750px",
  textAlign: "left",
});

export const ScrolledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  position: "absolute",
  overflow: "hidden",
  left: "0",
  right: "0",
  margin: "0 auto 20px",
  padding: "0 35px",
  width: "calc(var(30px) * 2)",
  height: "calc(var(30px) * 2)",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  borderRadius: " 0.15rem",
  backgroundColor: "inherit",
  zIndex: "4",
});

export const TextContent = styled("p")({
  textAlign: "justify",
});

export const ArticleFooter = styled("footer")({
  color: "#818181",
  fontSize: "0.875rem",
  marginTop: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "15px",
});

export const Author = styled("small")({
  fontWeight: "700",
});

export const CustomDate = styled("small")({
  "&::before": {
    content: `"${String.fromCharCode(8226)}"`,
    padding: "0 .5rem",
  },
});

export const StyledHeader = styled("h2")({
  borderTop: "1px solid #888",
  width: "100%",
  margin: "65px 0 0",
  padding: "25px 0 0",
});

export const LiveCommentContainer = styled("div")({
  width: "100%",
  margin: "25px 0",
});
