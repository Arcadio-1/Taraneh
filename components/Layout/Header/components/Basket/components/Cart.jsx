import Link from "next/link";
import CartList from "./components/cartList";
import { useEffect, useState } from "react";
import {
  getCartList,
  offPriceCalculator,
  priceFormat,
} from "../../../../../../lib/utilFunctions";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsData } from "../../../../../../store/ManageData/GetData/GetDataAction";
import TomanIcon from "../../../../../ui/Icons/tomanIcon";
const Cart = () => {
  const cartitemss = useSelector((state) => state.getData.cartItems);
  const cartitemssData = useSelector((state) => state.getData.cartItemsData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartitemss && cartitemss.length > 0) {
      console.log(cartitemss);
      dispatch(getCartItemsData(cartitemss));
    }
  }, [cartitemss, dispatch]);

  const numberOfItemToOrder = () => {
    let amount = 0;
    cartitemssData.map((item) => {
      return (amount = item.amount + amount);
    });
    return amount;
  };

  const totalPrice = () => {
    let price = 0;
    cartitemssData.map((item) => {
      if (item.price.offPersent) {
        const pricee = offPriceCalculator(
          item.price.value,
          item.price.offPersent
        );
        return (price += item.amount * pricee);
      }
      return (price += item.amount * item.price.value);
    });
    return price;
  };

  const totalOffPrice = () => {
    let price = 0;
    cartitemssData.map((item) => {
      if (item.price.offPersent) {
        const offPrice = offPriceCalculator(
          item.price.value,
          item.price.offPersent
        );
        const amount = item.price.value - offPrice;
        return (price += item.amount * amount);
      }
      // return (price += item.amount * item.price.value);
    });
    return price;
  };

  return (
    <div className="CartModal">
      <header className="CartModal-header">
        <p className="CartModal-header-content">
          <span className="CartModal-header-label">کالا</span>
          <span className="CartModal-header-amount">
            {cartitemssData && cartitemssData.length > 0
              ? numberOfItemToOrder()
              : "0"}
          </span>
        </p>
        <Link className="CartModal-header-linkToBasket" href={"/cart"}>
          مشاهده سبد خرید
        </Link>
      </header>
      <section className="CartModal-list">
        {cartitemssData.length > 0 && <CartList cartItems={cartitemssData} />}
      </section>
      <footer className="CartModal-footer">
        <div className="flex flex-col w-full items-end">
          <div className="flex flex-col items-start w-full">
            <div className="CartModal-footer-profit">
              <label className="CartModal-footer-profit-label">
                سود شما از خرید:
              </label>
              <span className="CartModal-footer-profit-price">
                {priceFormat(totalOffPrice())}

                <TomanIcon />
              </span>
            </div>
            <div className="CartModal-footer-price">
              <p className="CartModal-footer-price-label">مبلغ قابل پرداخت:</p>
              <p className="CartModal-footer-price-price">
                {cartitemssData || cartitemssData.length > 0
                  ? priceFormat(totalPrice())
                  : "0"}
                <TomanIcon />
              </p>
            </div>
          </div>

          <div className="CartModal-footer-action">
            <button className="CartModal-footer-action-submitBtn">
              تکمیل سفارش
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Cart;
