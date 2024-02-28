import * as React from "react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useCommentApi from "../../../hooks/useCommentApi";

export default function CreateCommentDialog({ author, id, hasSubmitted }) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState("");
  const [, , createComment] = useCommentApi();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setContent("");
    setOpen(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createComment({ content: content, author: author }, id);
    hasSubmitted(true);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Comment
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            required
            margin="dense"
            label="Content"
            id="name"
            name="content"
            value={content}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Save Comment
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
