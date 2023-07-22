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

  const [changeAmountStatusX, setChangeAmountStatus] = useState({
    status: null,
    title: null,
    message: null,
  });
  const [clearListStatusX, setClearListStatus] = useState({
    status: null,
    title: null,
    message: null,
  });

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
      try {
        if (type === "clearList") {
          setClearListStatus((prev) => {
            return (prev = {
              status: "loading",
              title: "در حال بررسی",
              message: "در حال پاکسازی سبد خرید",
            });
          });
          const request = await fetch("/api/shop/data/post-put-delete-Order/", {
            method: "DELETE",
            body: JSON.stringify({
              userId: data.user.email._id,
            }),
          });
          if (!request) {
            throw new Error("خطا در اتصال به سرور");
          }
          const response = await request.json();
          if (response.status !== "success") {
            throw new Error("خطا در پاکسازی سبد خرید");
          }
          if (response.status === "success") {
            setClearListStatus((prev) => {
              return (prev = {
                status: "success",
                title: "پاکسازی موفقیت انجام شد",
                message: "پاکسازی سبد خرید با موفقیت انجام شد",
              });
            });
            dispatch(getOrederList(data.user.email._id));
          }
        }
      } catch (error) {
        setClearListStatus((prev) => {
          return (prev = {
            status: "error",
            title: "خطا در پاکسازی",
            message: error.message || "خطا در پاکسازی سفارشاتلیست خرید",
          });
        });
      }

      try {
        let newCartList = [];

        if (type === "remove") {
          setChangeAmountStatus((prev) => {
            return (prev = {
              status: "loading",
              title: "در حال بررسی",
              message: "در حال بررسی حذف سفارش",
            });
          });
          newCartList = cartItems.filter((item) => {
            if (item._id !== id) {
              return item;
            }
          });
          if (newCartList.length === 0) {
            setChangeAmountStatus((prev) => {
              return (prev = {
                status: "success",
                title: "در حال پاکسازی سبد خرید",
                message: "محصول مورد نظر عضو شد در حال پاکسازی سبد خرید",
              });
            });
            amountHandler("clearList");
          }
        }
        if (type === "plus") {
          setChangeAmountStatus((prev) => {
            return (prev = {
              status: "loading",
              title: "در حال بررسی",
              message: "در حال بررسی افزایش تعداد سفارشات",
            });
          });
          newCartList = cartItems.map((item) => {
            if (item._id === id) {
              return { ...item, amount: itemAmount + 1 };
            }
            return item;
          });
        }
        if (type === "minus") {
          setChangeAmountStatus((prev) => {
            return (prev = {
              status: "loading",
              title: "در حال بررسی",
              message: "در حال بررسی کاهش تعداد سفارشات",
            });
          });
          newCartList = cartItems.map((item) => {
            if (item._id === id) {
              return { ...item, amount: itemAmount - 1 };
            }
            return item;
          });
        }
        const request = await fetch("/api/shop/data/changeAmount/", {
          method: "POST",
          body: JSON.stringify({
            userId: data.user.email._id,
            orders: newCartList,
          }),
        });
        if (!request) {
          throw new Error("خطا در اتصال به سرور جهت ویرایش تعداد سفارش");
        }
        const response = await request.json();
        if (response.status !== "success") {
          throw new Error("ویرایش تعداد سفارشات با خطا مواجه شد");
        }
        if (response.status === "success") {
          setChangeAmountStatus((prev) => {
            return (prev = {
              status: "success",
              title: "با موفقیت انجام شد",
              message: "کاهش تعداد با موفقیت انجام شد",
            });
          });
          dispatch(getOrederList(data.user.email._id));
        }
      } catch (error) {
        setChangeAmountStatus((prev) => {
          return (prev = {
            status: "error",
            title: "خطا در تغییر تعداد",
            message: error.message || "خطا در تغیر تعداد سفارشات لیست خرید",
          });
        });
      }
    }
  };

  if (!remove && !clearList) {
    return (
      <div className="relative">
        <div
          className={`productDetails-form-amount ${
            changeAmountStatusX.status === "loading" ? "opacity-0" : ""
          }`}
        >
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
        <div
          className={`${
            changeAmountStatusX.status === "loading"
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <div
            className="w-12 h-12 absolute top-0 left-1/2 -translate-x-1/2
          "
          >
            <LoadingSpinner />
          </div>
        </div>
      </div>
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
