import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrederList,
  removeCartItemFromLocalStorage,
  setLocalStorageAmount,
} from "../../../../../../../../store/ManageData/GetData/GetDataAction";
import Minus from "../../../../../../../ui/Icons/Minus";
import PlusIcon from "../../../../../../../ui/Icons/PlusIcon";
import TrashIcon from "../../../../../../../ui/Icons/TrashIcon";

const Amount = ({ selectedItem }) => {
  const { data, status: login } = useSession();
  const dispatch = useDispatch();
  // const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  const cartItems = useSelector((state) => state.getData.cartItems);
  const [itemAmount, setItemAmount] = useState(1);

  useEffect(() => {
    setItemAmount((prev) => {
      const amount = cartItems.filter((item) => {
        if (item._id === selectedItem) {
          return item.amount;
        }
      });
      if (amount.length > 0) {
        return (prev = amount[0].amount);
      }

      return (prev = prev);
    });
  }, [cartItems, selectedItem]);

  const amountHandler = async (type) => {
    if (login === "unauthenticated") {
      if (type === "plus") {
        dispatch(
          setLocalStorageAmount(selectedItem, {
            amount: itemAmount + 1,
          })
        );
      }
      if (type === "minus") {
        if (itemAmount === 1) {
          dispatch(removeCartItemFromLocalStorage(cartItems, selectedItem));
        }
        if (itemAmount > 1) {
          dispatch(
            setLocalStorageAmount(selectedItem, {
              amount: itemAmount - 1,
            })
          );
        }
      }
    }
    if (login === "authenticated") {
      let newCartList = [];
      if (type === "remove") {
        newCartList = cartItems.filter((item) => {
          if (item._id !== selectedItem) {
            return item;
          }
        });
      }
      if (type === "plus") {
        newCartList = cartItems.map((item) => {
          if (item._id === selectedItem) {
            return { ...item, amount: itemAmount + 1 };
          }
          return item;
        });
      }
      if (type === "minus") {
        newCartList = cartItems.map((item) => {
          if (item._id === selectedItem) {
            return { ...item, amount: itemAmount - 1 };
          }
          return item;
        });
      }
      const request = await fetch("/api/helperAPI/addOrder", {
        method: "POST",
        body: JSON.stringify({
          isInsert: false,
          userId: data.user.email._id,
          cartItems: newCartList,
        }),
      });
      const response = await request.json();
      dispatch(getOrederList(data.user.email._id));
      console.log(response);
    }
  };

  return (
    <div className="productDetails-form-amount">
      <button
        className="productDetails-form-amount-btn"
        onClick={(e) => {
          e.preventDefault();
          amountHandler("plus");
        }}
      >
        <PlusIcon />
      </button>
      <label className="productDetails-form-amount-value">{itemAmount}</label>
      {itemAmount > 1 && (
        <button
          className="productDetails-form-amount-btn"
          onClick={(e) => {
            e.preventDefault();
            amountHandler("minus");
          }}
        >
          <Minus />
        </button>
      )}
      {itemAmount === 1 && (
        <button
          className="productDetails-form-amount-remove"
          onClick={(e) => {
            e.preventDefault();
            amountHandler("remove");
          }}
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
};

export default Amount;
