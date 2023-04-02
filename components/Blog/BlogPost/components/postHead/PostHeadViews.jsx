import React from "react";
import ViewsIcon from "../../../../ui/Icons/ViewsIcon";
// import ViewsIcon from "../../../../ui/Icons/ViewsIcon";

const PostHeadViews = (props) => {
  return (
    <div className="blogPost-head-views">
      <div className="blogPost-head-views-label">
        <ViewsIcon />
        <h3 className="blogPost-head-views-title">تعداد بازدید:</h3>
      </div>
      <span className="blogPost-head-views-num">{props.views}</span>
    </div>
  );
};

export default PostHeadViews;
