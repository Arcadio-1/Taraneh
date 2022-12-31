import React from "react";

const Title = (props) => {
  const { title } = props;
  return (
    <div className="productDetails-header-title">
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
