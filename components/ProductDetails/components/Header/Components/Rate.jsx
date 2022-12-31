import React from "react";
import StarIcon from "../../../../ui/Icons/StarIcon";
const Rate = (props) => {
  const { rate, buyerLiked } = props;
  return (
    <div className="productDetails-header-meta-rate">
      <div className="productDetails-header-meta-rate-stars">
        <StarIcon isOn={rate >= 1} />
        <StarIcon isOn={rate >= 2} />
        <StarIcon isOn={rate >= 3} />
        <StarIcon isOn={rate >= 4} />
        <StarIcon isOn={rate === 5} />
      </div>
      <div className="productDetails-header-meta-rate-details">
        <span>{buyerLiked}</span>
        <label>نفر از خریداران</label>
      </div>
    </div>
  );
};

export default Rate;
