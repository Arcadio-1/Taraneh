import React, { useEffect } from "react";
import { uiAction } from "../../../store/ui/uiSlice.js";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Log from "./components/Log";
import Basket from "./components/Basket/Basket";
import NavLinks from "./components/NavLinks";
import { useSession } from "next-auth/react";
import Profile from "./components/Profile";
import HambergerMenu from "./components/HambergerMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItemsData,
  getOrederList,
} from "../../../store/ManageData/GetData/GetDataAction";
import {
  getLocalStorageCartItems,
  resetLocalStorageCartItems,
} from "../../../lib/utilFunctions";
import { getDataSliceActions } from "../../../store/ManageData/GetData/GetDataSlice";
const Header = () => {
  const { data, status } = useSession();

  const cartItems = useSelector((state) => state.getData.cartItems);
  const dispatchCartList = useDispatch();
  const dispatchCartListStatus = useDispatch();
  const dispatchCartListData = useDispatch();
  const dispatchSyncCartList = useDispatch();
  const cartListStatus = useSelector((state) => state.ui.cartListStatus);
  //merge localStoreage Cartlist with server CartList
  useEffect(() => {
    if (status === "authenticated") {
      const localStorageCartList = getLocalStorageCartItems();
      if (
        cartListStatus.status === "success" &&
        localStorageCartList.length > 0
      ) {
        try {
          dispatchSyncCartList(
            uiAction.setSyncCartListStatus({
              status: "loading",
              titile: "در حال بررسی",
              message: "در حال همگام سازی لیست سفارشات",
            })
          );
          const id = data.user.email._id;
          const mixed = [...cartItems, ...localStorageCartList];
          const result = Object.values(
            mixed.reduce((acc, { _id, amount, ...rest }) => {
              if (!acc[_id]) acc[_id] = { _id, amount: 0, ...rest };
              acc[_id].amount += amount;
              return acc;
            }, {})
          );
          const sendMergedCartList = async (cartList, id) => {
            const methodFlag = cartItems.length > 0 ? "PUT" : "POST";
            const request = await fetch("/api/ordring/mergeCartItems", {
              method: methodFlag,
              body: JSON.stringify({
                userId: id,
                orders: cartList,
              }),
            });
            if (!request) {
              throw new Error("خطا در همگام سازی لیست خرید");
            }
            const response = await request.json();
            if (response.status !== "success") {
              throw new Error("خطا در همگام سازی لیست سفارشات");
            }
            resetLocalStorageCartItems();
            dispatchSyncCartList(
              uiAction.setSyncCartListStatus({
                titile: "همگام سازی با موفقیت انجام شد",
                message:
                  "همگام سازی لیست سفارشات در حافظه مرورگر و لیست سفارشات در سرور با موفقیت انجام شد",
              })
            );
            dispatchCartList(getOrederList(id));
            console.log(response);
          };
          sendMergedCartList(result, id);
        } catch (error) {
          dispatchSyncCartList(
            uiAction.setSyncCartListStatus({
              status: "loading",
              titile: "در حال بررسی",
              message: error.message || "خطا نامشخص در همگام سازی",
            })
          );
        }
      }
    }
  }, [
    cartItems,
    status,
    data,
    cartListStatus,
    dispatchSyncCartList,
    dispatchCartList,
  ]);

  //set CartList
  useEffect(() => {
    if (status === "unauthenticated") {
      try {
        dispatchCartListStatus(
          uiAction.setCartListStatus({
            status: "loading",
            title: "در حال دریافت لیست خرید",
            message: "در حال دریافت لیست خرید از سرور",
          })
        );

        const localStorageCartList = getLocalStorageCartItems();
        if (localStorageCartList) {
          dispatchCartList(
            getDataSliceActions.setCardItems(localStorageCartList)
          );
        }

        dispatchCartListStatus(
          uiAction.setCartListStatus({
            status: "success",
            titile: "با موفقیت دریافت شد",
            message: "لیست سفارشات در حافظه مروگر با موفقیت دریافت شد",
          })
        );
      } catch (error) {
        dispatchCartListStatus(
          uiAction.setCartListStatus({
            status: "error",
            titile: "خطا در دریافت",
            message: "خطا در دریافت لیست سفارشات در حافظه مرورگر",
          })
        );
      }
    }
    if (status === "authenticated") {
      const id = data.user.email._id;
      dispatchCartList(getOrederList(id));
    }
  }, [status, dispatchCartList, dispatchCartListStatus, data]);

  //set CartList Data
  useEffect(() => {
    if (cartListStatus && cartListStatus.status === "success") {
      if (cartItems && cartItems.length > 0) {
        dispatchCartListData(getCartItemsData(cartItems));
      }
      if (cartItems && cartItems.length === 0) {
        dispatchCartListData(getCartItemsData([]));
      }
    }
  }, [cartItems, dispatchCartListData, cartListStatus]);

  return (
    <header className="header">
      <div className="header-container">
        <HambergerMenu />
        <Logo />
        <Search />
        <div className="header-basketAndProfile">
          {status === "unauthenticated" && <Log />}
          {status === "authenticated" && <Profile />}
          <Basket />
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
