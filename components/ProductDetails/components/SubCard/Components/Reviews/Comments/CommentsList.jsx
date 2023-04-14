import React from "react";
import CommentItem from "./CommentItem";

const CommentsList = ({ comments, setReplyTo, replyTo, onTextFocus }) => {
  // console.log(comments.length);
  return (
    <div className="reviwe-list">
      <div className="flex flex-col gap-10">
        {comments.map((item) => {
          if (item.parent === null) {
            return (
              <CommentItem
                key={item.id}
                comment={item}
                comments={comments}
                setReplyTo={setReplyTo}
                replyTo={replyTo}
                onTextFocus={onTextFocus}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default CommentsList;
