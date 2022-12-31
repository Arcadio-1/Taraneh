import React from "react";
import DeliveryIcon from "../../../../../ui/Icons/DeliveryIcon";
import MoneyIcon from "../../../../../ui/Icons/footerIcons/MoneyIcon";
import GuaranteeIcon from "../../../../../ui/Icons/GuaranteeIcon";
const Message = () => {
  return (
    <div className="productDetails-message-card">
      <ul className="productDetails-message-list">
        <li className="productDetails-message-item">
          <DeliveryIcon />
          <span>ارسال رایگان برای خرید بیش از 500 هزار تومان</span>
        </li>
        <li className="productDetails-message-item">
          <MoneyIcon />
          <span>ضمانت 7 روزه برگشت کالا در صورت عدم رضایت</span>
        </li>
        <li className="productDetails-message-item">
          <GuaranteeIcon />
          <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
        </li>
      </ul>
    </div>
  );
};

export default Message;
