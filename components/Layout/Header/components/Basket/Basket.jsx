import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useToggleMenu from "../../../../../Hook/UseToggoleMenu";
import BasketIcon from "../../../../ui/Icons/BasketIcon";
import Cart from "./components/Cart";
const Basket = () => {
  const { isShowMenu, menuRef: cartRef, showMenuHandler } = useToggleMenu();
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const cartItems = useSelector((state) => state.getData.cartItems);

  useEffect(() => {
    if (cartItems) {
      setNumberOfOrders((prev) => {
        let amount = 0;
        cartItems.map((item) => {
          return (amount = item.amount + amount);
        });
        return (prev = amount);
      });
    }
  }, [cartItems]);

  return (
    <div className="header-basket" ref={cartRef}>
      <div className="header-basket-container" onClick={showMenuHandler}>
        <BasketIcon />
        <span className="header-basket-amount">
          {cartItems ? numberOfOrders : ""}
        </span>
      </div>

      {isShowMenu && <Cart showMenuHandler={showMenuHandler} />}
      {/* <Cart showMenuHandler={showMenuHandler} /> */}
    </div>
  );
};

export default Basket;
