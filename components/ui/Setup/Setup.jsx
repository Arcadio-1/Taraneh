import Link from "next/link";
import React from "react";
import BasketIcon from "../Icons/BasketIcon";
import DeliveryIcon from "../Icons/footerIcons/DeliveryIcon";
import MoneyIcon from "../Icons/footerIcons/MoneyIcon";

const Setup = ({ selected }) => {
  return (
    <div className="setup">
      <div className="setup-item">
        <div
          className={`container  ${selected === "chekout" && "selectedItem"}`}
        >
          <Link href={"/chekout"}>
            <BasketIcon />
            <span className="title ">سبد خرید</span>
          </Link>
        </div>
      </div>
      <div className="setup-item">
        <div
          className={`container  ${selected === "shiping" && "selectedItem"}`}
        >
          <Link href={"/shiping"}>
            <DeliveryIcon />
            <span className="title">زمان و نحوه ارسال</span>
          </Link>
        </div>
      </div>
      <div className="setup-item">
        <div
          className={`container  ${selected === "payment" && "selectedItem"}`}
        >
          <Link href={"payment"}>
            <MoneyIcon />
            <span className="title">پرداخت</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Setup;
