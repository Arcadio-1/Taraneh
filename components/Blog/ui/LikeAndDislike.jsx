import React from "react";

const LikeAndDislike = (props) => {
  return (
    <div className="likeAndDislike">
      <div className="likeAndDislike-like item">
        <span>{props.like}</span>
        <img src="/image/Blog/icons/like.svg" alt="like" />
      </div>
      <div className="likeAndDislike-dislike item">
        <span>{props.like}</span>
        <img src="/image/Blog/icons/dislike.svg" alt="like" />
      </div>
    </div>
  );
};

export default LikeAndDislike;
