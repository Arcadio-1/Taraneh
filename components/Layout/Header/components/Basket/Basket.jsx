import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToggleMenu from "../../../../../Hook/UseToggoleMenu";
import { getLocalStoageCartItems } from "../../../../../store/ManageData/GetData/GetDataAction";
import BasketIcon from "../../../../ui/Icons/BasketIcon";
import Cart from "./components/Cart";
const Basket = () => {
  const cartItems = useSelector((state) => state.getData.cartItems);
  const dispatch = useDispatch();
  const { isShowMenu, menuRef: cartRef, showMenuHandler } = useToggleMenu();
  const { status } = useSession();
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  useEffect(() => {
    if (status === "unauthenticated") {
      dispatch(getLocalStoageCartItems());
    }
  }, [status, dispatch]);

  useEffect(() => {
    // console.log(cartItems);
    if (cartItems) {
      // console.log("fuck");
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

      {isShowMenu && <Cart />}
      {/* {isShowMenu && <p>kir khar</p>} */}
    </div>
  );
};

export default Basket;
