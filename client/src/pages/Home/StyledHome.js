import { styled } from "@mui/system";

export const StyledContainer = styled("div")({
  width: "90%",
  maxHeight: "30vh",
  overflow: "scroll",
  padding: "1.75%",
  margin: "5% auto",
  textAlign: "left",
  backgroundColor: "#fff",
  color: "#242424",
  borderRadius: "8px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    cursor: "pointer",
    opacity: "0.5",
    transition: "opacity 0.5s ease-out",
  },
  "@media (max-width: 415px)": {
    width: "80%",
  },
});

export const SectionHeading = styled("div")({
  "& h1": {
    margin: "50px 20px 10px",
  },
  "@media (max-width: 670px)": {
    fontSize: "0.8rem",
  },
});

export const StyledTitle = styled("h2")({
  fontSize: "2.25rem",
  margin: "15px 0",
  fontWeight: "700",
  lineHeight: "1.8",
  "@media (max-width: 1024px)": {
    fontSize: "1.5rem",
    lineHeight: "1",
  },
  "@media (max-width: 670px)": {
    fontSize: "1rem",
  },
});

export const StyledParagraph = styled("p")({
  width: "100%",
  whiteSpace: "pre-line",
  maxHeight: "9vh",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "@media (max-width: 670px)": {
    fontSize: "0.8rem",
    maxHeight: "7vh",
  },
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
