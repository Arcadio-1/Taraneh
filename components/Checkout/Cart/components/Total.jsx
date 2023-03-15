import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { offPriceCalculator, priceFormat } from "../../../../lib/utilFunctions";
import TomanIcon from "../../../ui/Icons/tomanIcon";

const Total = () => {
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  const cartItems = useSelector((state) => state.getData.cartItems);
  const [cartModalData, setCartModalData] = useState({
    amount: 0,
    orgTotalPrice: 0,
    totalPrice: 0,
    totalDiscount: 0,
    totalWeight: 0,
  });

  useEffect(() => {
    const cartData = {
      amount: 0,
      orgTotalPrice: 0,
      totalPrice: 0,
      totalDiscount: 0,
      totalWeight: 0,
    };
    cartItemsData.map((item) => {
      cartData.amount = item.amount + cartData.amount;
      cartData.totalWeight = item.weight + cartData.totalWeight;

      if (item.price.offPersent) {
        const offPrice = offPriceCalculator(
          item.price.value,
          item.price.offPersent
        );
        cartData.totalPrice += item.amount * offPrice;
        cartData.orgTotalPrice += item.amount * item.price.value;
        cartData.totalDiscount += item.amount * (item.price.value - offPrice);
      }
      if (!item.price.offPersent) {
        cartData.orgTotalPrice += item.amount * item.price.value;
        cartData.totalPrice += item.amount * item.price.value;
      }
    });
    setCartModalData((prev) => {
      return (prev = cartData);
    });
  }, [cartItemsData, cartItems]);
  return (
    <tr>
      <th className="text-xl">مجموع :</th>
      <th className="max-md:hidden"></th>
      <th className="max-sm:hidden"></th>
      <th className="max-sm:hidden"></th>
      <th className="fnNum text-xl max-sm:hidden">
        عدد {cartModalData.amount}
      </th>
      <th className="hidden max-sm:hidden"></th>
      <th className="fnNum text-xl">
        {priceFormat(cartModalData.totalDiscount)}
        <TomanIcon />
      </th>
      <th className="fnNum text-xl">
        {priceFormat(cartModalData.totalPrice)}
        <TomanIcon />
      </th>
    </tr>
  );
};

export default Total;
