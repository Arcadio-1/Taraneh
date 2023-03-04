import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToggleMenu from "../../../../../Hook/UseToggoleMenu";
import {
  getCartItemsData,
  getLocalStoageCartItems,
  getOrederList,
} from "../../../../../store/ManageData/GetData/GetDataAction";
import BasketIcon from "../../../../ui/Icons/BasketIcon";
import Cart from "./components/Cart";
const Basket = () => {
  const { isShowMenu, menuRef: cartRef, showMenuHandler } = useToggleMenu();
  const { data, status } = useSession();

  const cartItems = useSelector((state) => state.getData.cartItems);
  const dispatch = useDispatch();

  const [numberOfOrders, setNumberOfOrders] = useState(0);

  // const [orderList, setOrderList] = useState();
  useEffect(() => {
    if (status === "unauthenticated") {
      dispatch(getLocalStoageCartItems());
    }
    if (status === "authenticated") {
      const id = data.user.email._id;
      dispatch(getOrederList(id));
    }
  }, [status, dispatch, data]);

  // useEffect(() => {
  //   console.log(cartItemsData);
  // }, [cartItemsData]);
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      // console.log(cartItems);
      dispatch(getCartItemsData(cartItems));
    }
    if (cartItems && cartItems.length === 0) {
      // console.log(cartItems);
      dispatch(getCartItemsData([]));
    }
  }, [cartItems, dispatch]);

  useEffect(() => {
    // console.log(cartItems);
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
      {/* <Cart /> */}
    </div>
  );
};

export default Basket;
