import { useState } from "react";
import CommentForm from "./CommentForm";

export default function Comment() {
  let [comment, setComment] = useState([
    {
      username: "@dd",
      remark: "WOW",
      rating: "4",
    },
  ]);

  let addComment = (comment) => {
    setComment((currComment) => [...currComment, comment]);
  };
  return (
    <div>
      <h2>All Comments</h2>
      {comment.map((comment, idx) => (
        <div
          key={idx}
          className="comment"
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            margin: "1rem",
            padding: "1rem",
          }}
        >
          <span>{comment.username}</span>
          &nbsp; &nbsp; &nbsp;
          <span>Rating {comment.rating} Star</span>
          <br />
          <br />
          <span>{comment.remark}</span>
          <br />
          <br />
        </div>
      ))}
      <CommentForm addComment={addComment} />
    </div>
  );
}
