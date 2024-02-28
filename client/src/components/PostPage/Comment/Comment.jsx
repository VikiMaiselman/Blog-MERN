import React from "react";

export default function Comment({ comment }) {
  return (
    <div>
      <h5>{comment.author}</h5>
      <p>{comment.content}</p>
      <p>
        {new Date(comment.creationDate).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
}
