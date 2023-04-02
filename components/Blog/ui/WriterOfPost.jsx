import React from "react";
import ProfileIcon from "../../ui/Icons/ProfileIcon";

const WriterOfPost = (props) => {
  return (
    <div className="writerOfPost">
      <ProfileIcon />
      <span className="writerOfPost-text">{props.postWriter}</span>
    </div>
  );
};

export default WriterOfPost;
