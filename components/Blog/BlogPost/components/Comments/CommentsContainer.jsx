import React from "react";
import CommentsItem from "./CommentsItem";

const CommentsContainer = (props) => {
  return (
    <div className="blogPost-comment-container">
      <div className="blogPost-comment-container-title">
        <span className="blogPost-comment-container-title-num">
          {props.comments.length}
        </span>
        <span className="blogPost-comment-container-title-text">
          دیدگاه و پرسش های ثبت شده
        </span>
      </div>
      <div className="blogPost-comment-container-body">
        {props.comments.length < 1 && (
          <p className="blogPost-comment-container-body-empty">
            دیدگاهی برای این مطلب ثبت نشده است
          </p>
        )}
        {props.comments.length > 0 && (
          <div className="blogPost-comment-container-body-list">
            {props.comments.map((rootItem) => {
              return <CommentsItem key={rootItem.id} item={rootItem} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsContainer;
