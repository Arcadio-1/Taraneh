import Link from "next/link";
import React from "react";
import BasketIcon from "../../../ui/Icons/BasketIcon";
import DeliveryIcon from "../../../ui/Icons/footerIcons/DeliveryIcon";
import MoneyIcon from "../../../ui/Icons/footerIcons/MoneyIcon";
const Setup = ({ selected }) => {
  return (
    <div className="setup">
      <div className="setup-item">
        <div className={`container  ${selected === "cart" && "selectedItem"}`}>
          <Link href={"/checkout/cart"}>
            <BasketIcon />
            <span className="title ">سبد خرید</span>
          </Link>
        </div>
      </div>
      <div className="setup-item">
        <div
          className={`container  ${selected === "shiping" && "selectedItem"}`}
        >
          <Link href={"/checkout/shiping"}>
            <DeliveryIcon />
            <span className="title">زمان و نحوه ارسال</span>
          </Link>
        </div>
      </div>
      <div className="setup-item">
        <div
          className={`container  ${selected === "payment" && "selectedItem"}`}
        >
          <Link href={"/checkout/payment"}>
            <MoneyIcon />
            <span className="title">پرداخت</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Setup;
