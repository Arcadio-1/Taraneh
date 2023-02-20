import React from "react";
import TomanIcon from "../../../../../../../ui/Icons/tomanIcon";
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
    <div className="productDetails-form-sub-price">
      <label className="productDetails-form-sub-price-title">قیمت :</label>
      {offPersent > 0 && (
        <div className="productDetails-form-sub-price-container">
          <div className="productDetails-form-sub-price-off">
            <span className="productDetails-form-sub-price-off-price">
              {priceToShow}
            </span>
            <TomanIcon />
            <span className="productDetails-form-sub-price-off-persent">
              %{offPersent}-
            </span>
          </div>
          <div className="productDetails-form-sub-price-main">
            <span>{offprice}</span>
            <TomanIcon />
          </div>
        </div>
      )}
      {!offPersent && (
        <div className="productDetails-form-sub-price-container">
          <div className="productDetails-form-sub-price-main">
            <TomanIcon />
            <span>{offprice}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Price;
