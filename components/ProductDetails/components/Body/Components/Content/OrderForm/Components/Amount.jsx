import { useSession } from "next-auth/react";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLocalStorageCartItemAmount,
  getLocalStorageCartItems,
  removeItemFromLocalStorageCartList,
} from "../../../../../../../../lib/utilFunctions";
import { getOrederList } from "../../../../../../../../store/ManageData/GetData/GetDataAction";
import { getDataSliceActions } from "../../../../../../../../store/ManageData/GetData/GetDataSlice";
import { uiAction } from "../../../../../../../../store/ui/uiSlice";
import CloseIcon from "../../../../../../../ui/Icons/CloseIcon";
import Minus from "../../../../../../../ui/Icons/Minus";
import PlusIcon from "../../../../../../../ui/Icons/PlusIcon";
import TrashIcon from "../../../../../../../ui/Icons/TrashIcon";
import LoadingSpinner from "../../../../../../../ui/LoadingSpiner/loadingSpiner";

const Amount = ({ selectedItem: id, remove = false, clearList = false }) => {
  const { data, status: login } = useSession();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.getData.cartItems);
  const [itemAmount, setItemAmount] = useState(1);
  const clearListStatus = useSelector((state) => state.ui.clearListStatus);
  const changeAmountStatus = useSelector(
    (state) => state.ui.changeAmountStatus
  );

  useEffect(() => {
    setItemAmount((prev) => {
      const amount = cartItems.filter((item) => {
        if (item._id === id) {
          return item.amount;
        }
      });
      if (amount.length > 0) {
        return (prev = amount[0].amount);
      }

      return (prev = prev);
    });
  }, [cartItems, id]);

  // useEffect(() => {
  //   console.log(clearListStatus);
  // }, [clearListStatus]);

  // useEffect(() => {
  //   console.log(changeAmountStatus);
  // }, [changeAmountStatus]);

  const amountHandler = async (type) => {
    if (login === "unauthenticated") {
      if (type === "plus") {
        changeLocalStorageCartItemAmount(id, itemAmount + 1);
      }
      if (type === "minus") {
        changeLocalStorageCartItemAmount(id, itemAmount - 1);
      }
      if (type === "remove") {
        removeItemFromLocalStorageCartList(id);
      }
      const localStorageCartList = getLocalStorageCartItems();
      dispatch(getDataSliceActions.setCardItems(localStorageCartList));
    }
    if (login === "authenticated") {
      let newCartList = [];
      if (type === "clearList") {
        dispatch(
          uiAction.setClearListStatus({
            status: "loading",
            title: "در حال بررسی",
            message: "در حال پاکسازی سبد خرید",
          })
        );
        const request = await fetch("/api/ordring", {
          method: "DELETE",
          body: JSON.stringify({
            userId: data.user.email._id,
          }),
        });
        if (!request) {
          dispatch(
            uiAction.setClearListStatus({
              status: "error",
              title: "خطا در اتصال",
              message: "خطا در اتصال به سرور",
            })
          );
        }
        const response = await request.json();
        if (response.status !== "success") {
          dispatch(
            uiAction.setClearListStatus({
              status: "error",
              title: "خطا در پاکسازی",
              message: "خطا در پاکسازی سبد خرید",
            })
          );
        }
        if (response.status === "success") {
          dispatch(
            uiAction.setClearListStatus({
              status: "success",
              title: "پاکسازی موفقیت انجام شد",
              message: "پاکسازی سبد خرید با موفقیت انجام شد",
            })
          );
          dispatch(getOrederList(data.user.email._id));
        }
        console.log(response);
        return;
      }
      if (type === "remove") {
        dispatch(
          uiAction.setChangeAmountStatus({
            status: "loading",
            title: "در حال بررسی",
            message: "در حال بررسی کاهش تعداد سفارشات",
          })
        );
        newCartList = cartItems.filter((item) => {
          if (item._id !== id) {
            return item;
          }
        });
        if (newCartList.length < 1) {
          try {
            amountHandler("clearList");
            dispatch(
              uiAction.setChangeAmountStatus({
                status: "success",
                title: "با موفقیت انجام شد",
                message: "پاکسازی لیست سفارشات با موفقیت انجام شد",
              })
            );
          } catch (error) {
            dispatch(
              uiAction.setChangeAmountStatus({
                status: "error",
                title: "خطا در انجام عملیات",
                message: "پاکسازی لیست سفارشات با خطا مواجه شد",
              })
            );
          }
          return;
        }
      }
      if (type === "plus") {
        dispatch(
          uiAction.setChangeAmountStatus({
            status: "loading",
            title: "در حال بررسی",
            message: "در حال بررسی افزایش تعداد سفارشات",
          })
        );
        newCartList = cartItems.map((item) => {
          if (item._id === id) {
            return { ...item, amount: itemAmount + 1 };
          }
          return item;
        });
      }
      if (type === "minus") {
        dispatch(
          uiAction.setChangeAmountStatus({
            status: "loading",
            title: "در حال بررسی",
            message: "در حال بررسی کاهش تعداد سفارشات",
          })
        );
        newCartList = cartItems.map((item) => {
          if (item._id === id) {
            return { ...item, amount: itemAmount - 1 };
          }
          return item;
        });
      }
      const request = await fetch("/api/ordring/amountManaging", {
        method: "POST",
        body: JSON.stringify({
          userId: data.user.email._id,
          orders: newCartList,
        }),
      });
      if (!request) {
        dispatch(
          uiAction.setChangeAmountStatus({
            status: "error",
            title: "خطا در اتصال به سرور",
            message: "خطا در اتصال به سرور جهت ویرایش تعداد سفارش",
          })
        );
      }
      const response = await request.json();
      console.log(response.status === "success");
      if (response.status !== "success") {
        dispatch(
          uiAction.setChangeAmountStatus({
            status: "error",
            title: "خطا در ویرایش تعداد",
            message: "ویرایش تعداد سفارشات با خطا مواجه شد",
          })
        );
      }
      if (response.status === "success") {
        dispatch(getOrederList(data.user.email._id));
        console.log(response.status);
        dispatch(
          uiAction.setChangeAmountStatus({
            status: "success",
            title: "با موفقیت انجام شد",
            message: "کاهش تعداد با موفقیت انجام شد",
          })
        );
      }
      console.log(response);
    }
  };
  if (!remove && !clearList) {
    return (
      <Fragment>
        {changeAmountStatus.status === "loading" ? (
          <div className="w-16 h-16">
            <LoadingSpinner />
          </div>
        ) : (
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
            <label className="productDetails-form-amount-value">
              {itemAmount}
            </label>
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
        )}
      </Fragment>
    );
  }
  if (remove) {
    return (
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            amountHandler("remove");
          }}
        >
          <CloseIcon />
        </button>
      </div>
    );
  }
  if (clearList) {
    return (
      <div>
        <button
          className="rounded-lg bg-g1_5 text-light_2 px-10 py-2 text-lg"
          onClick={(e) => {
            e.preventDefault();
            amountHandler("clearList");
          }}
        >
          پاکسازی لیست
        </button>
      </div>
    );
  }
};

export default Amount;
