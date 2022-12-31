import React from "react";
import CompareIcon from "../../../../../ui/Icons/CompareIcon";
import LikeIcon from "../../../../../ui/Icons/LikeIcon";
const Actions = () => {
  return (
    <div className="productDetails-content-actions">
      <div className="productDetails-content-actions-btn">
        <LikeIcon />
        <span>افزودن به علاقه مندی ها</span>
      </div>
      <div className="productDetails-content-actions-btn">
        <CompareIcon />
        <span>مقایسه</span>
      </div>
    </div>
  );
};

export default Actions;
