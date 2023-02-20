import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStoageCartItems } from "../../../../../../../../store/ManageData/GetData/GetDataAction";
import Minus from "../../../../../../../ui/Icons/Minus";
import PlusIcon from "../../../../../../../ui/Icons/PlusIcon";
import TrashIcon from "../../../../../../../ui/Icons/TrashIcon";

const Amount = ({ onSetAmount, amount, selectedItem, cartItems }) => {
  const { status: login } = useSession();
  const dispatch = useDispatch();
  const localstorageCartItems = useSelector((state) => state.getData.cartItems);

  const amountHandler = (type) => {
    if (type === "plus") {
      onSetAmount({ amount: amount + 1, type: "setAmount" });
    }
    if (type === "minus") {
      if (amount === 1) {
        if (login === "unauthenticated") {
          console.log(cartItems);
          const newItems = cartItems.filter((item) => {
            if (item.id !== selectedItem) {
              return item;
            }
          });
          const jsonFile = JSON.stringify(newItems);
          console.log(newItems);
          localStorage.setItem("cartItems", jsonFile);
          dispatch(getLocalStoageCartItems());
          console.log(localstorageCartItems);
        }
        return;
      }
      // onSetAmount({ amount: amount - 1, type: "setAmount" });
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
      <label className="productDetails-form-amount-value">{amount}</label>
      {amount > 1 && (
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
      {amount === 1 && (
        <button
          className="productDetails-form-amount-remove"
          onClick={(e) => {
            e.preventDefault();
            amountHandler("minus");
          }}
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
};

export default Amount;
