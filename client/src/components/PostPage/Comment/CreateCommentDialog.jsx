import * as React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function CreateCommentDialog({ author, id, createComment }) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState("");

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
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Click here to leave a reply
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            label="Content"
            id="name"
            name="content"
            value={content}
            onChange={handleChange}
            fullWidth
            multiline
            maxRows={25}
            variant="standard"
            autoFocus
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
