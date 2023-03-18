import { signOut } from "next-auth/react";
import React from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../../../store/ui/uiSlice";
import Modal from "../../../../Layout/Module/Modal";
import NotifCard from "../../../../ui/NotifCard";
import useEditInfo from "../Hook/useEditInfo";
import PopUpWindow from "./PopUpWindow";

const ChangeEmail = ({ email, id, onClose, effectBool }) => {
  const dispatch = useDispatch();
  const {
    value: emailValue,
    isValid: isEmailValid,
    errorStatus: emailError,
    inputChangeHandler: emailChangeHandler,
  } = useEditInfo((value) => {
    const emailString = String(value).toLowerCase();
    const regex = RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const isValid = regex.test(emailString);
    return isValid;
  }, email);

  const submitEditHandler = async () => {
    dispatch(
      uiAction.setSideNotif({
        status: "loading",
        title: "Loading",
        message: "لطفا صبر کنید",
      })
    );
    if (isEmailValid) {
      const request = await fetch("/api/auth/edit", {
        method: "POST",
        body: JSON.stringify({
          changeType: "email",
          userId: id,
          newData: {
            email: emailValue,
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
    if (!isEmailValid) {
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
        <NotifCard />
        <PopUpWindow
          title={"ویرایش پست الکترونیکی"}
          actionTitle={"ویرایش"}
          actionFn={submitEditHandler}
          closeWindow={onClose}
          isValid={isEmailValid}
        >
          <div>
            <div className="flex flex-col">
              <input
                id="name"
                className="border bg-transparent border-gray-300 rounded-lg p-3"
                style={{ width: "250px" }}
                type={"text"}
                required
                onChange={emailChangeHandler}
                value={emailValue}
              />
              {emailError && (
                <label htmlFor="email" className="text-red-600">
                  ایمیل وارد شده صحیح نیست
                </label>
              )}
            </div>
          </div>
        </PopUpWindow>
      </div>
    </Modal>
  );
};

export default ChangeEmail;
