import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { offPriceCalculator, priceFormat } from "../../../lib/utilFunctions";

const FreeShoping = () => {
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  const [persent, setPersent] = useState(0);
  const [priceToFree, setPriceToFree] = useState(300000);
  useEffect(() => {
    // console.log(cartItemsData);
    let totalPrice = 0;
    cartItemsData.map((item) => {
      if (item.price.offPersent) {
        const offPrice = offPriceCalculator(
          item.price.value,
          item.price.offPersent
        );
        totalPrice += item.amount * offPrice;
        // console.log(totalPrice);
      }
      if (!item.price.offPersent) {
        totalPrice += item.amount * item.price.value;
      }
    });
    const presentt = totalPrice / 3000;
    // console.log(presentt);
    if (presentt < 100) {
      setPriceToFree((prev) => {
        return (prev = 300000 - totalPrice);
      });
      setPersent((prev) => {
        return (prev = presentt);
      });
    }
    if (presentt > 100) {
      setPriceToFree((prev) => {
        return (prev = 0);
      });
      setPersent((prev) => {
        return (prev = 100);
      });
    }
  }, [cartItemsData]);

  return (
    <div className="freeShoping mt-3 ">
      <div className="leftPrice">
        {priceToFree > 0 && (
          <p>
            برای ارسال رایگان
            <span className="price"> {priceFormat(priceToFree)} </span>
            تومان به سبد خرید خود اضافه کنید!
          </p>
        )}
        {!priceToFree && (
          <p>
            هزینه ارسال
            <span className="free"> رایگان </span>
            می باشد
          </p>
        )}
      </div>
      <div className="priceBar">
        <div
          className="priceBar-inner"
          style={{ height: "100%", width: `${persent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FreeShoping;
