import React from "react";
import TomanIcon from "../Icons/tomanIcon";
const ProductPrice = (props) => {
  const { price, offPersent } = props;

  const priceToShow = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(price);

  if (offPersent) {
    const offprice = new Intl.NumberFormat("en-US", {
      style: "decimal",
    }).format((price - (price / 100) * offPersent).toFixed(0));

    return (
      <div className="productCard-content-price-container">
        <span className="productCard-content-price-price">{priceToShow}</span>
        <span className="productCard-content-price-sellingPrice">
          {offprice}
          <TomanIcon />
        </span>
      </div>
    );
  }
  if (!offPersent) {
    return (
      <div className="productCard-content-price-container">
        <span className="productCard-content-price-sellingPrice">
          {priceToShow}
          <TomanIcon />
        </span>
      </div>
    );
  }
};

export default ProductPrice;
