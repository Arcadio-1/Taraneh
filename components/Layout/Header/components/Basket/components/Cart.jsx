import Link from "next/link";
import CartList from "./components/cartList";
import { useEffect, useState } from "react";
import {
  offPriceCalculator,
  priceFormat,
} from "../../../../../../lib/utilFunctions";
import { useSelector } from "react-redux";
import TomanIcon from "../../../../../ui/Icons/tomanIcon";
import Image from "next/image";
import LoadingSpinner from "../../../../../ui/LoadingSpiner/loadingSpiner";

const Cart = ({ showMenuHandler }) => {
  const cartListData = useSelector((state) => state.getData.cartItemsData);
  const cartListDataStatus = useSelector(
    (state) => state.ui.cartListDataStatus
  );
  const [cartModalData, setCartModalData] = useState({
    amount: 0,
    totalPrice: 0,
    totalDiscount: 0,
  });

  // useEffect(() => {
  //   console.log(cartListDataStatus);
  // }, [cartListDataStatus]);

  useEffect(() => {
    if (cartListData && cartListData.length > 0) {
      const cartData = {
        amount: 0,
        totalPrice: 0,
        totalDiscount: 0,
      };
      cartListData.map((item) => {
        cartData.amount = item.amount + cartData.amount;
        if (item.price.offPersent) {
          const offedPrice = offPriceCalculator(
            item.price.value,
            item.price.offPersent
          );
          cartData.totalPrice += item.amount * offedPrice;
          cartData.totalDiscount +=
            item.amount * (item.price.value - offedPrice);
        }
        if (!item.price.offPersent) {
          cartData.totalPrice += item.amount * item.price.value;
        }
      });
      setCartModalData((prev) => {
        return (prev = cartData);
      });
    }
  }, [cartListData]);

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
      {cartListData.length > 0 && cartListDataStatus.status === "success" && (
        <section className="CartModal-list">
          <div className="CartModal-list-container">
            <CartList />
          </div>
        </section>
      )}
      {cartListDataStatus.status !== "success" && (
        <div className="w-full h-36 border pt-6">
          <LoadingSpinner text={"در حال دریافت لیست سفارشات"} />
        </div>
      )}
      {cartListData.length === 0 && cartListDataStatus.status === "success" && (
        <section className="flex items-center w-full flex-col py-5">
          <Image
            src={"/image/ui/profile/order-empty.svg"}
            width={120}
            height={120}
            alt="emapty"
          />
          <span className="text-xl text-g1_1">سفارشی ثبت نشده است!</span>
        </section>
      )}

      {cartListData.length > 0 && (
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
                <p className="CartModal-footer-price-label">
                  مبلغ قابل پرداخت:
                </p>
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
      )}
    </div>
  );
};
export default Cart;
