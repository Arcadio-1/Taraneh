import React from "react";
import StarIcon from "../Icons/StarIcon";

const ProductRate = (props) => {
  const { rate } = props;
  const stars = [];
  for (let i = 0; i < rate; i++) {
    stars.push("starOn");
  }
  while (stars.length < 5) {
    stars.push("starOff");
  }
  return (
    <div className="productCard-content-stars">
      {stars.map((star, index) => {
        return <StarIcon isOn={star} key={index} />;
      })}
      <span className="productCard-content-stars-rate">{rate}/5</span>
    </div>
  );
};

export default ProductRate;
