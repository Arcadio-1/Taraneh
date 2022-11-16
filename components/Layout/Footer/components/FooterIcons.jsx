import React from "react";
import DeliveryIcon from "../../../ui/Icons/footerIcons/DeliveryIcon";
import DiscountIcon from "../../../ui/Icons/footerIcons/DiscountIcon";
import MoneyIcon from "../../../ui/Icons/footerIcons/MoneyIcon";
import ReturnMoneyIcon from "../../../ui/Icons/footerIcons/ReturnMoneyIcon";
import SupportIcon from "../../../ui/Icons/footerIcons/SupportIcon";
import FooterIconItem from "./FooterIconItem";

const footerIcons = () => {
  return (
    <div className="footer-icons">
      <FooterIconItem
        labelText={"تحویل رایگان برای خرید بیش از 300 هزار تومان"}
      >
        <DeliveryIcon />
      </FooterIconItem>
      <FooterIconItem labelText={"هفت روز ضمانت برگشت کالا"}>
        <ReturnMoneyIcon />
      </FooterIconItem>
      <FooterIconItem labelText={"تخفیف های روزانه"}>
        <DiscountIcon />
      </FooterIconItem>
      <FooterIconItem labelText={"کمترین قیمت در بازار"}>
        <MoneyIcon />
      </FooterIconItem>
      <FooterIconItem labelText={"پشتیبانی 24 ساعت"}>
        <SupportIcon />
      </FooterIconItem>
    </div>
  );
};

export default footerIcons;
