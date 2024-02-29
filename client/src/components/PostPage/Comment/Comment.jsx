import React from "react";

import {
  CommentAdditionalInfo,
  Author,
  CustomDate,
  CommentContainer,
  UpdateCommentContainer,
} from "./StyledComment";
import { Button, TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { CustomThemeContext } from "../../../contexts/CustomTheme.context";

export default function Comment({
  comment,
  writtenByThisUser,
  handleUpdate,
  handleDelete,
}) {
  /* context */
  const { theme } = React.useContext(CustomThemeContext);

  /* hooks */
  const [isEditing, setIsEditing] = React.useState(false);
  const [text, setText] = React.useState(comment.content);

  /* handlers */
  const handleEditComment = () => {
    setIsEditing(true);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSave = () => {
    setIsEditing(false);
    comment.content = text;
    handleUpdate(comment);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("TRUE");
      handleSave();
    }
  };

  const handleDeleteComment = () => {
    handleDelete(comment._id);
  };
  return (
    <CommentContainer>
      {!isEditing ? (
        <p>{comment.content}</p>
      ) : (
        <UpdateCommentContainer>
          <TextField
            required
            fullWidth
            multiline
            name="text"
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={handleSave} variant="text" color="success">
            Save Comment
          </Button>
        </UpdateCommentContainer>
      )}

      <CommentAdditionalInfo>
        <div>
          <Author>{comment.author}</Author>
          <CustomDate>
            {new Date(comment.creationDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </CustomDate>
        </div>

        {writtenByThisUser && (
          <div>
            <ThemeProvider theme={theme}>
              <Button
                onClick={handleEditComment}
                color="edit"
                fontSize="small"
                sx={{ margin: "0 5px" }}
              >
                Edit
              </Button>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Button
                onClick={handleDeleteComment}
                color="delete"
                fontSize="small"
                sx={{ margin: "0 5px" }}
              >
                Delete
              </Button>
            </ThemeProvider>
          </div>
        )}
      </CommentAdditionalInfo>
    </CommentContainer>
  );
}
