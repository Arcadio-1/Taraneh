import Image from "next/image";
import React from "react";

const LikeAndDislike = (props) => {
  return (
    <div className="likeAndDislike">
      <div className="likeAndDislike-like item">
        <span>{props.like}</span>
        <Image
          src="/image/Blog/icons/like.svg"
          alt="like"
          width={50}
          height={50}
        />
      </div>
      <div className="likeAndDislike-dislike item">
        <span>{props.like}</span>
        <Image
          src="/image/Blog/icons/dislike.svg"
          alt="dislike"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default LikeAndDislike;
