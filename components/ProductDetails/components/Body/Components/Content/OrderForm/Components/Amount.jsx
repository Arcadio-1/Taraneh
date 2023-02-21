import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItemFromLocalStorage,
  setLocalStorageAmount,
} from "../../../../../../../../store/ManageData/GetData/GetDataAction";
import { sendDataAction } from "../../../../../../../../store/ManageData/SendData/SendDataSlice";
import Minus from "../../../../../../../ui/Icons/Minus";
import PlusIcon from "../../../../../../../ui/Icons/PlusIcon";
import TrashIcon from "../../../../../../../ui/Icons/TrashIcon";

const Amount = ({ selectedItem }) => {
  const { status: login } = useSession();
  const dispatch = useDispatch();
  const localstorageCartItems = useSelector((state) => state.getData.cartItems);
  const [itemAmount, setItemAmount] = useState(1);

  useEffect(() => {
    setItemAmount((prev) => {
      const amount = localstorageCartItems.filter((item) => {
        if (item.id === selectedItem) {
          return item.amount;
        }
      });
      if (amount.length > 0) {
        return (prev = amount[0].amount);
      }

      return (prev = prev);
    });
  }, [localstorageCartItems, selectedItem]);

  const amountHandler = (type) => {
    if (type === "plus") {
      dispatch(setLocalStorageAmount(selectedItem, { amount: itemAmount + 1 }));
    }
    if (type === "minus") {
      if (itemAmount === 1) {
        if (login === "unauthenticated") {
          dispatch(
            removeCartItemFromLocalStorage(localstorageCartItems, selectedItem)
          );
        }
        return;
      }
      dispatch(setLocalStorageAmount(selectedItem, { amount: itemAmount - 1 }));
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
