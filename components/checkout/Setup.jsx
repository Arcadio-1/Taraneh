import React from "react";
import BasketIcon from "../ui/Icons/BasketIcon";
import DeliveryIcon from "../ui/Icons/footerIcons/DeliveryIcon";
import MoneyIcon from "../ui/Icons/footerIcons/MoneyIcon";

const Setup = () => {
  return (
    <div className="setup">
      <div className="setup-item">
        <div className="container selectedItem">
          <BasketIcon />
          <span className="title ">سبد خرید</span>
        </div>
      </div>
      <div className="setup-item">
        <div className="container">
          <DeliveryIcon />
          <span className="title">زمان و نحوه ارسال</span>
        </div>
      </div>
      <div className="setup-item">
        <div className="container">
          <MoneyIcon />
          <span className="title">پرداخت</span>
        </div>
      </div>
    </div>
  );
};

export default Setup;
