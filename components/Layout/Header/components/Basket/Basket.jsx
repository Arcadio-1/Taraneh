import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToggleMenu from "../../../../../Hook/UseToggoleMenu";
import { getLocalStorageCartItems } from "../../../../../lib/utilFunctions";
import {
  getCartItemsData,
  getOrederList,
} from "../../../../../store/ManageData/GetData/GetDataAction";
import { getDataSliceActions } from "../../../../../store/ManageData/GetData/GetDataSlice";
import BasketIcon from "../../../../ui/Icons/BasketIcon";
import Cart from "./components/Cart";
import { resetLocalStorageCartItems } from "../../../../../lib/utilFunctions";
const Basket = () => {
  const { isShowMenu, menuRef: cartRef, showMenuHandler } = useToggleMenu();
  const [numberOfOrders, setNumberOfOrders] = useState(0);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.getData.cartItems);
  const getCartItemsStatus = useSelector((state) => state.ui.getServerCartList);
  const { data, status } = useSession();

  //merge localStoreage Cartlist with server CartList
  useEffect(() => {
    if (status === "authenticated") {
      console.log("merge localStorage CartList with server CartList ");
      const localStorageCartList = getLocalStorageCartItems();
      if (
        getCartItemsStatus &&
        getCartItemsStatus.status === "success" &&
        localStorageCartList.length > 0
      ) {
        console.log("merge localStorage CartList with server CartList ");
        const id = data.user.email._id;
        const mixed = [...cartItems, ...localStorageCartList];
        const result = Object.values(
          mixed.reduce((acc, { _id, amount, ...rest }) => {
            if (!acc[_id]) acc[_id] = { _id, amount: 0, ...rest };
            acc[_id].amount += amount;
            return acc;
          }, {})
        );
        console.log(result);
        const sendMergedCartList = async (cartList, id) => {
          const methodFlag = cartItems.length > 0 ? "PUT" : "POST";
          const request = await fetch("/api/helperAPI/mergeCartItems", {
            method: methodFlag,
            body: JSON.stringify({
              userId: id,
              orders: cartList,
            }),
          });
          const response = await request.json();
          if (response.status === "success") {
            resetLocalStorageCartItems();
            dispatch(getOrederList(id));
          }
          console.log(response);
        };

        sendMergedCartList(result, id);
      }
    }
  }, [cartItems, status, data, getCartItemsStatus, dispatch]);

  //set CartList
  useEffect(() => {
    if (status === "unauthenticated") {
      const localStorageCartList = getLocalStorageCartItems();
      dispatch(getDataSliceActions.setCardItems(localStorageCartList));
    }
    if (status === "authenticated") {
      const id = data.user.email._id;
      dispatch(getOrederList(id));
    }
  }, [status, dispatch, data]);

  //set CartList Data
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      dispatch(getCartItemsData(cartItems));
    }
    if (cartItems && cartItems.length === 0) {
      dispatch(getCartItemsData([]));
    }
  }, [cartItems, dispatch]);

  // set number of cartList Items
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
    </div>
  );
};

export default Basket;
