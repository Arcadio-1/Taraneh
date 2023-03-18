import { signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../../../store/ui/uiSlice";
import Modal from "../../../../Layout/Module/Modal";
import useEditInfo from "../Hook/useEditInfo";
import PopUpWindow from "./PopUpWindow";

const ChangeMobileNumber = ({ mobile, id, onClose, effectBool }) => {
  const dispatch = useDispatch();
  const {
    value: mobileValue,
    isValid: isMobileValid,
    errorStatus: mobileError,
    inputChangeHandler: mobileChangeHandler,
  } = useEditInfo((value) => {
    const regexEn = RegExp(/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/);
    const regexFa = RegExp(
      /۰۹(۱[۰۱۲۳۴۵۶۷۸۹]|۳[۱۲۳۴۵۶۷۸۹]|۰[۱۲۳۴۵۶۷۸۹]|۲[۱۲۳۴۵۶۷۸۹])-?[۰۱۲۳۴۵۶۷۸۹]{3}-?[۰۱۲۳۴۵۶۷۸۹]{4}$/
    );
    const isValidEn = regexEn.test(value);
    const isValidFa = regexFa.test(value);
    const isValid = isValidEn || isValidFa;
    return isValid;
  }, mobile);

  const submitEditHandler = async () => {
    dispatch(
      uiAction.setSideNotif({
        status: "loading",
        title: "Loading",
        message: "لطفا صبر کنید",
      })
    );
    if (isMobileValid) {
      const request = await fetch("/api/auth/edit", {
        method: "POST",
        body: JSON.stringify({
          changeType: "mobile",
          userId: id,
          newData: {
            mobile: mobileValue,
          },
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      if (data.status === "error") {
        dispatch(
          uiAction.setSideNotif({
            status: "error",
            title: "Error",
            message: data.message,
          })
        );
      }
      if (data.status === "success") {
        dispatch(
          uiAction.setSideNotif({
            status: "success",
            title: "Success",
            message:
              "پست الکترونیکی با موفقیت تغییر یافت در حال خروج جهت ورود مجدد",
          })
        );
        setTimeout(() => {
          signOut();
        }, 3000);
      }
      console.log(data);
    }
    if (!isMobileValid) {
      dispatch(
        uiAction.setSideNotif({
          status: "error",
          title: "Error",
          message: "اطلاعات وارد شده صحیح نیست",
        })
      );
    }
  };
  return (
    <Modal>
      <div
        className={` transition-all duration-200 ease-in ${
          effectBool ? "opacity-100 w-0" : "opacity-0 w-0"
        }`}
      >
        <PopUpWindow
          title={"ویرایش شماره موبایل"}
          actionTitle={"دریافت کد تایید و تغییر شماره"}
          actionFn={submitEditHandler}
          closeWindow={onClose}
          isValid={isMobileValid}
        >
          <div>
            <div className="flex flex-col">
              <input
                id="name"
                className="border bg-transparent border-gray-300 rounded-lg p-3"
                style={{ width: "250px" }}
                type={"text"}
                required
                onChange={mobileChangeHandler}
                value={mobileValue}
              />
              {mobileError && (
                <label htmlFor="mobile" className="text-red-600">
                  شماره وارد شده صحیح نیست
                </label>
              )}
            </div>
            <p className="mt-10 mr-5">
              برای ثبت این شماره باید آن را تایید کنید.
            </p>
          </div>
        </PopUpWindow>
      </div>
    </Modal>
  );
};

export default ChangeMobileNumber;
