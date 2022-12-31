import React from "react";

const ShortDescription = (props) => {
  const { description } = props;
  return (
    <div className="productDetails-content-shortDescription">
      <p className="productDetails-content-shortDescription-text">
        {description.substr(0, 140)}
      </p>
    </div>
  );
};

export default ShortDescription;
