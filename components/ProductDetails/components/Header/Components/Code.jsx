import React from "react";

const Code = (props) => {
  const { id } = props;
  return (
    <div className="productDetails-header-meta-code">
      <label>کد کالا : </label>
      <span>{id}</span>
    </div>
  );
};

export default Code;
