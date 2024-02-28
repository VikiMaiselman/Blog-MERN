import React from "react";

import {
  CommentAdditionalInfo,
  Author,
  CustomDate,
  CommentContainer,
} from "./StyledComment";
import { Button } from "@mui/material";

export default function Comment({ comment, writtenByThisUser }) {
  return (
    <CommentContainer>
      <p>{comment.content}</p>
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
            <Button
              onClick={() => handleEditPost(post)}
              color="success"
              fontSize="small"
              sx={{ margin: "0 5px" }}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeletePost(post._id)}
              color="secondary"
              fontSize="small"
              sx={{ margin: "0 5px" }}
            >
              Delete
            </Button>
          </div>
        )}
      </CommentAdditionalInfo>
    </CommentContainer>
  );
}
