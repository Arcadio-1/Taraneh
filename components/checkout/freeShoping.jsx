import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { offPriceCalculator } from "../../lib/utilFunctions";

const FreeShoping = () => {
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  const [persent, setPersent] = useState(0);
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
    console.log(presentt);
    if (presentt < 100) {
      setPersent((prev) => {
        return (prev = presentt);
      });
    }
    if (presentt > 100) {
      setPersent((prev) => {
        return (prev = 100);
      });
    }
  }, [cartItemsData]);

  return (
    <div className="freeShoping">
      <div className="w-full border-2 border-red-900 h-2 mt-3 rounded-lg">
        <div
          className="bg-black"
          style={{ height: "100%", width: `${persent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FreeShoping;
