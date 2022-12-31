import React from "react";
import TomanIcon from "../../../../../ui/Icons/tomanIcon";
TomanIcon;
const Price = (props) => {
  const { price } = props;

  const { value, offPersent } = price;

  const priceToShow = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(value);

  const offprice = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format((value - (value / 100) * offPersent).toFixed(0));

  return (
    <div className="productDetails-content-price">
      {offPersent > 0 && (
        <div className="productDetails-content-price-container">
          <div className="productDetails-content-price-off">
            <span>{priceToShow}</span>
            <TomanIcon />
          </div>
          <div className="productDetails-content-price-main">
            <span>{offprice}</span>
            <TomanIcon />
          </div>
        </div>
      )}
      {!offPersent && (
        <div className="productDetails-content-price-container">
          <div className="productDetails-content-price-main">
            <TomanIcon />
            <span>{offprice}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Price;
