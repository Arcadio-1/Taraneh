import Image from "next/image";
import React from "react";

const LikeAndDislike = (props) => {
  return (
    <div className="blogPost-head-likeAndDislike">
      <div className="blogPost-head-likeAndDislike-like">
        <span className="blogPost-head-likeAndDislike-num">{props.like}</span>
        <Image src="/image/icon/like.svg" alt="like" width={50} height={50} />
      </div>
      <div className="blogPost-head-likeAndDislike-dislike">
        <span className="blogPost-head-likeAndDislike-num">
          {props.dislike}
        </span>
        <Image
          src="/image/icon/dislike.svg"
          alt="dislike"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default LikeAndDislike;
