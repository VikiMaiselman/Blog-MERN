import styled from "@emotion/styled";

export const CommentContainer = styled("div")({
  width: "100%",
  padding: "5px 0",
  borderBottom: "1px dotted #999",
  "& p": {
    margin: "0",
    marginTop: "30px",
    padding: "0",
  },
  "&:last-child": {
    borderBottom: "none",
  },
});

export const CommentAdditionalInfo = styled("footer")({
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
