import React from "react";
import CommentForm from "./CommentForm";
import CommentsContainer from "./CommentsContainer";

const Comments = ({ comments }) => {
  return (
    <div className="blogPost-comment">
      <h3 className="blogPost-comment-title">دیدگاه و سوالات شما</h3>
      <CommentForm />
      <CommentsContainer comments={comments.comments} />
    </div>
  );
};

export default Comments;
