import React from "react";
import CommentItem from "./CommentItem";

const CommentsList = ({ comments }) => {
  return (
    <div className="reviwe-list">
      <div className="flex flex-col gap-10">
        {comments.map((item) => {
          return <CommentItem key={item.id} comment={item} />;
        })}
      </div>
    </div>
  );
};

export default CommentsList;
