import Link from "next/link";
import CartList from "./components/cartList";
import { useEffect, useState } from "react";
import {
  offPriceCalculator,
  priceFormat,
} from "../../../../../../lib/utilFunctions";
import { useSelector } from "react-redux";
// import { getCartItemsData } from "../../../../../../store/ManageData/GetData/GetDataAction";
import TomanIcon from "../../../../../ui/Icons/tomanIcon";

const Cart = ({ showMenuHandler }) => {
  const cartitemss = useSelector((state) => state.getData.cartItems);
  const cartitemssData = useSelector((state) => state.getData.cartItemsData);

  const [cartModalData, setCartModalData] = useState({
    amount: 0,
    totalPrice: 0,
    totalDiscount: 0,
  });

  const numbers = [
    5, 78, 54, 768, 78, 68687, 6787, 7636, 47, 7, 7, 8, 8, 8, 4, 4, 4, 7, 9, 74,
    2, 4, 7, 778, 87,
  ];
  const getSmallestNumber = (num) => {
    let smalest = +num[0];
    for (const item of num) {
      if (item < +smalest) {
        smalest = item;
      }
    }
    console.log(smalest);
  };

  useEffect(() => {
    const cartData = {
      amount: 0,
      totalPrice: 0,
      totalDiscount: 0,
    };
    cartitemssData.map((item) => {
      cartData.amount = item.amount + cartData.amount;
      if (item.price.offPersent) {
        const offPrice = offPriceCalculator(
          item.price.value,
          item.price.offPersent
        );
        cartData.totalPrice += item.amount * offPrice;
        cartData.totalDiscount += item.amount * (item.price.value - offPrice);
      }
      if (!item.price.offPersent) {
        cartData.totalPrice += item.amount * item.price.value;
      }
    });
    setCartModalData((prev) => {
      return (prev = cartData);
    });
  }, [cartitemssData]);

  return (
    <div className="CartModal">
      <header className="CartModal-header">
        <p className="CartModal-header-content">
          <span
            className="CartModal-header-label"
            onClick={() => getSmallestNumber(numbers)}
          >
            کالا
          </span>
          <span className="CartModal-header-amount">
            {cartModalData.amount}
          </span>
        </p>
        <Link className="CartModal-header-linkToBasket" href={"/cart"}>
          مشاهده سبد خرید
        </Link>
      </header>
      {cartitemss && cartitemss.length > 0 && (
        <section className="CartModal-list">
          <div className="CartModal-list-container">
            <CartList />
          </div>
        </section>
      )}
      {cartitemss && cartitemss.length === 0 && (
        <section className="flex items-center w-full">
          <span className="text-center w-full text-lg m-3">
            سفارشی ثبت نشده است!
          </span>
        </section>
      )}

      <footer className="CartModal-footer">
        <div className="flex flex-col w-full items-end">
          <div className="flex flex-col items-start w-full">
            {cartModalData.totalDiscount > 0 && (
              <div className="CartModal-footer-profit">
                <label className="CartModal-footer-profit-label">
                  سود شما از خرید:
                </label>
                <span className="CartModal-footer-profit-price">
                  {priceFormat(cartModalData.totalDiscount)}

                  <TomanIcon />
                </span>
              </div>
            )}

            <div className="CartModal-footer-price">
              <p className="CartModal-footer-price-label">مبلغ قابل پرداخت:</p>
              <p className="CartModal-footer-price-price">
                {priceFormat(cartModalData.totalPrice)}
                <TomanIcon />
              </p>
            </div>
          </div>

          <div className="CartModal-footer-action">
            <Link href={"/checkout/cart"}>
              <button
                onClick={showMenuHandler}
                className="CartModal-footer-action-submitBtn"
              >
                تکمیل سفارش
              </button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Cart;
