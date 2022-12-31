import React from "react";

const Status = (props) => {
  const { status } = props;
  return (
    <div className="productDetails-content-status">
      {status ? (
        <div className="productDetails-content-status-item available">
          <span>موجود</span>
        </div>
      ) : (
        <div className="productDetails-content-status-item notAvailable">
          <span>ناموجود</span>
        </div>
      )}
    </div>
  );
};

export default Status;
