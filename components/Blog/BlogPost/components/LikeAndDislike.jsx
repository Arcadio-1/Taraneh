import React from "react";

const LikeAndDislike = (props) => {
  return (
    <div className="blogPost-head-likeAndDislike">
      <div className="blogPost-head-likeAndDislike-like">
        <span className="blogPost-head-likeAndDislike-num">{props.like}</span>
        <img src="/image/icon/like.svg" alt="like" />
      </div>
      <div className="blogPost-head-likeAndDislike-dislike">
        <span className="blogPost-head-likeAndDislike-num">
          {props.dislike}
        </span>
        <img src="/image/icon/dislike.svg" alt="like" />
      </div>
    </div>
  );
};

export default LikeAndDislike;
