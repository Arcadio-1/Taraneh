import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToggleMenu from "../../../../../Hook/UseToggoleMenu";
import { getLocalStorageCartItems } from "../../../../../lib/utilFunctions";
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
    if (status === "authenticated") {
      const localStorageCartItems = getLocalStorageCartItems();
      const mixed = [...cartItems, ...localStorageCartItems];

      // const unic = mixed.map((item1) => {
      //   return mixed.find((item2) => {
      //     if (item1._id === item2._id) {
      //       return item2;
      //     }
      //   });
      // });
      // console.log(mixed);
      // console.log(unic);

      // const idAmounts = [];
      // for (const item of mixed) {
      //   if (item._id in idAmounts) {
      //     console.log(item._id);
      //     idAmounts[item["_id"]] += item["amount"];
      //   } else {
      //     item;
      //   }
      // }
      // const result = Object.entries(idAmounts).map(([k, v]) => ({
      //   _id: k,
      //   amount: v,
      // }));
      // console.log(result);
      // const data = [
      //   { _id: 13, amount: 3, grind: "four", weidth: "500" },
      //   { _id: 12, amount: 5, grind: "six", weidth: "500" },
      //   { _id: 7, amount: 4, grind: "five", weidth: "500" },
      //   { _id: 13, amount: 1, grind: "nine", weidth: "500" },
      // ];

      const result = Object.values(
        mixed.reduce((acc, { _id, amount, ...rest }) => {
          if (!acc[_id]) acc[_id] = { _id, amount: 0, ...rest };
          acc[_id].amount += amount;
          return acc;
        }, {})
      );
      console.log(mixed);
      console.log(result);

      // const idAmounts = {};
      // for (const item of data) {
      //   if (item["id"] in idAmounts) {
      //     idAmounts[item["id"]] += item["amount"];
      //   } else {
      //     idAmounts[item["id"]] = item["amount"];
      //   }
      // }
      // const result = Object.entries(idAmounts).map(([k, v]) => ({
      //   id: k,
      //   amount: v,
      // }));
      // console.log(result);
    }
  }, [cartItems, status]);

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
