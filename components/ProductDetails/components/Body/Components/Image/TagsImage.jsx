import React from "react";

const TagsImage = (props) => {
  const { sell, offPersent } = props;
  console.log(props);
  return (
    <div className="productDetails-image-tags">
      {offPersent > 0 && (
        <div className="productDetails-image-tags-offPersent">
          <span>{offPersent}%</span>
        </div>
      )}
      {sell === "topsell" && (
        <div className="productDetails-image-tags-sells">
          <span>پرفروش</span>
        </div>
      )}
      {sell === "special" && (
        <div className="productDetails-image-tags-sells">
          <span>فروش ویژه</span>
        </div>
      )}
    </div>
  );
};

export default TagsImage;
