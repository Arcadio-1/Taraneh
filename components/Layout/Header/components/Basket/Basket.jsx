// import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useToggleMenu from "../../../../../Hook/UseToggoleMenu";
// import { getLocalStorageCartItems } from "../../../../../lib/utilFunctions";
// import {
//   getCartItemsData,
//   getOrederList,
// } from "../../../../../store/ManageData/GetData/GetDataAction";
// import { getDataSliceActions } from "../../../../../store/ManageData/GetData/GetDataSlice";
import BasketIcon from "../../../../ui/Icons/BasketIcon";
import Cart from "./components/Cart";
// import { resetLocalStorageCartItems } from "../../../../../lib/utilFunctions";
const Basket = () => {
  const { isShowMenu, menuRef: cartRef, showMenuHandler } = useToggleMenu();
  const [numberOfOrders, setNumberOfOrders] = useState(0);
  const cartItems = useSelector((state) => state.getData.cartItems);

  // const dispatchCartList = useDispatch();
  // const dispatchCartListStatus = useDispatch();
  // const dispatchCartListData = useDispatch();
  // const dispatchSyncCartList = useDispatch();
  // const cartListStatus = useSelector((state) => state.ui.cartListStatus);
  // const { data, status } = useSession();

  // useEffect(() => {
  //   console.log(cartListStatus);
  // }, [cartListStatus]);

  //merge localStoreage Cartlist with server CartList
  // useEffect(() => {
  //   if (status === "authenticated") {
  //     const localStorageCartList = getLocalStorageCartItems();
  //     if (
  //       cartListStatus &&
  //       cartListStatus.status === "success" &&
  //       localStorageCartList.length > 0
  //     ) {
  //       try {
  //         dispatchSyncCartList({
  //           status: "loading",
  //           titile: "در حال بررسی",
  //           message: "در حال همگام سازی لیست سفارشات",
  //         });
  //         const id = data.user.email._id;
  //         const mixed = [...cartItems, ...localStorageCartList];
  //         const result = Object.values(
  //           mixed.reduce((acc, { _id, amount, ...rest }) => {
  //             if (!acc[_id]) acc[_id] = { _id, amount: 0, ...rest };
  //             acc[_id].amount += amount;
  //             return acc;
  //           }, {})
  //         );
  //         const sendMergedCartList = async (cartList, id) => {
  //           const methodFlag = cartItems.length > 0 ? "PUT" : "POST";
  //           const request = await fetch("/api/ordring/mergeCartItems", {
  //             method: methodFlag,
  //             body: JSON.stringify({
  //               userId: id,
  //               orders: cartList,
  //             }),
  //           });
  //           if (!request) {
  //             throw new Error("خطا در همگام سازی لیست خرید");
  //           }
  //           const response = await request.json();
  //           if (response.status !== "success") {
  //             throw new Error("خطا در همگام سازی لیست سفارشات");
  //           }
  //           resetLocalStorageCartItems();
  //           dispatchSyncCartList({
  //             status: "success",
  //             titile: "همگام سازی با موفقیت انجام شد",
  //             message:
  //               "همگام سازی لیست سفارشات در حافظه مرورگر و لیست سفارشات در سرور با موفقیت انجام شد",
  //           });
  //           dispatchCartList(getOrederList(id));
  //           console.log(response);
  //         };
  //         sendMergedCartList(result, id);
  //       } catch (error) {
  //         dispatchSyncCartList({
  //           status: "loading",
  //           titile: "در حال بررسی",
  //           message: error.message || "خطا نامشخص در همگام سازی",
  //         });
  //       }
  //     }
  //   }
  // }, [
  //   cartItems,
  //   status,
  //   data,
  //   cartListStatus,
  //   dispatchSyncCartList,
  //   dispatchCartList,
  // ]);

  // //set CartList
  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     try {
  //       dispatchCartListStatus({
  //         status: "loading",
  //         titile: "در حال بررسی",
  //         message: " در حال دریافت لیست سفارشات در حافظه مروگر",
  //       });

  //       const localStorageCartList = getLocalStorageCartItems();
  //       dispatchCartList(
  //         getDataSliceActions.setCardItems(localStorageCartList)
  //       );
  //       dispatchCartListStatus({
  //         status: "success",
  //         titile: "با موفقیت دریافت شد",
  //         message: "لیست سفارشات در حافظه مروگر با موفقیت دریافت شد",
  //       });
  //     } catch (error) {
  //       dispatchCartListStatus({
  //         status: "error",
  //         titile: "خطا در دریافت",
  //         message: "خطا در دریافت لیست سفارشات در حافظه مرورگر",
  //       });
  //     }
  //   }
  //   if (status === "authenticated") {
  //     const id = data.user.email._id;
  //     dispatchCartList(getOrederList(id));
  //   }
  // }, [status, dispatchCartList, dispatchCartListStatus, data]);

  // //set CartList Data
  // useEffect(() => {
  //   if (cartListStatus && cartListStatus.status === "success") {
  //     if (cartItems && cartItems.length > 0) {
  //       dispatchCartListData(getCartItemsData(cartItems));
  //     }
  //     if (cartItems && cartItems.length === 0) {
  //       dispatchCartListData(getCartItemsData([]));
  //     }
  //   }
  // }, [cartItems, dispatchCartListData, cartListStatus]);

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
      {/* <Cart showMenuHandler={showMenuHandler} /> */}
    </div>
  );
};

export default Basket;
