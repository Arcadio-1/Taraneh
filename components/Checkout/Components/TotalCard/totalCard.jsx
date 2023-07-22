import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { offPriceCalculator, priceFormat } from "../../../../lib/utilFunctions";
import TomanIcon from "../../../ui/Icons/tomanIcon";

const TotalCard = ({ actionType }) => {
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
    <div className="totalCard">
      <table className="table">
        <tbody>
          <tr>
            <th>قیمت کالا ها ({cartModalData.amount}) : </th>
            <td>
              {priceFormat(cartModalData.orgTotalPrice)}
              <TomanIcon />
            </td>
          </tr>
          <tr>
            <th>جمع سبد خرید : </th>
            <td>
              {priceFormat(cartModalData.totalPrice)}
              <TomanIcon />
            </td>
          </tr>
          {cartModalData.totalDiscount > 0 && (
            <tr>
              <th>سود شما از خرید : </th>
              <td>
                {priceFormat(cartModalData.totalDiscount)}
                <TomanIcon />
              </td>
            </tr>
          )}

          <tr>
            <th> هزینه ارسال : </th>
            {cartModalData.totalPrice > 300000 && <td>رایگان</td>}
            {cartModalData.totalPrice < 300000 && (
              <td>
                {priceFormat(cartModalData.totalWeight * 10 + 20000)}
                <TomanIcon />
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <div className="totalCard-actions">
        {actionType === "cuntinue" && (
          <Link href={"/checkout/payment"}>
            <button className="totalCard-actions-cuntinue">ادامه</button>
          </Link>
        )}
        {actionType === "pay" && (
          <Link href={"/checkout/payment"}>
            <button className="totalCard-actions-pay">پرداخت</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TotalCard;
