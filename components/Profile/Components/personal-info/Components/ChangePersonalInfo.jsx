import { signOut } from "next-auth/react";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../../../store/ui/uiSlice";
import Modal from "../../../../Layout/Module/Modal";
import useEditInfo from "../Hook/useEditInfo";
import PopUpWindow from "./PopUpWindow";

export const ChangePersonalInfo = ({
  name,
  family,
  codeMeli,
  id,
  onClose,
  effectBool,
}) => {
  const dispatch = useDispatch();
  const {
    value: nameValue,
    isValid: isNameValid,
    errorStatus: nameError,
    inputChangeHandler: nameChangeHandler,
  } = useEditInfo((value) => {
    const regex = RegExp(/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/);
    const isValid = regex.test(value);
    return isValid;
  }, name);

  const {
    value: meliValue,
    isValid: isMeliValid,
    errorStatus: meliError,
    inputChangeHandler: meliChangeHandler,
  } = useEditInfo((value) => {
    const regexEn = RegExp(/^\d{10}$/);
    const regexFa = RegExp(/^\[۰۱۲۳۴۵۶۷۸۹]{10}$/);

    const check = +value[9];
    const sum =
      value
        .split("")
        .slice(0, 9)
        .reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
    const isChecked = sum < 2 ? check === sum : check + sum === 11;

    const isValidEn = regexEn.test(value);
    const isValidFa = regexFa.test(value);
    const isValid = (isValidEn || isValidFa) && isChecked;
    return isValid;
  }, codeMeli);

  const {
    value: familyValue,
    isValid: isFamilyValid,
    errorStatus: familyError,
    inputChangeHandler: familyChangeHandler,
  } = useEditInfo((value) => {
    const regex = RegExp(/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/);
    const isValid = regex.test(value);
    return isValid;
  }, family);

  const submitEditHandler = async () => {
    dispatch(
      uiAction.setSideNotif({
        status: "loading",
        title: "Loading",
        message: "لطفا صبر کنید",
      })
    );
    if (isMeliValid && isFamilyValid && isNameValid) {
      const request = await fetch("/api/auth/edit", {
        method: "POST",
        body: JSON.stringify({
          changeType: "personal",
          userId: id,
          newData: {
            name: nameValue,
            family: familyValue,
            codeMeli: meliValue,
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
    if (isMeliValid || !isFamilyValid || !isNameValid) {
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
    <div>
      <Modal>
        <div
          className={` transition-all duration-200 ease-in ${
            effectBool ? "opacity-100 w-0" : "opacity-0 w-0"
          }`}
        >
          <PopUpWindow
            title={"ثبت اطلاعات شناسایی"}
            actionTitle={"بررسی اطلاعات"}
            actionFn={submitEditHandler}
            closeWindow={onClose}
            isValid={isMeliValid && isFamilyValid && isNameValid}
          >
            <div>
              <div className="mb-5">
                <p>
                  لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما
                  باید با اطلاعاتی که وارد می‌کنید همخوانی داشته باشند.
                </p>
              </div>
              <div className="mb-3">
                <div className="flex justify-between mb-5 gap-4">
                  <div className="w-full">
                    <div className="mb-3">
                      <label htmlFor="name">نام</label>
                      <span className="text-red-600">*</span>
                    </div>
                    <div className="flex flex-col">
                      <input
                        id="name"
                        className="border bg-transparent border-gray-300 rounded-lg p-3"
                        type={"text"}
                        required
                        onChange={nameChangeHandler}
                        value={nameValue}
                      />
                      {nameError && (
                        <label htmlFor="name" className="text-red-600">
                          نام وارد شده صحیح نیست
                        </label>
                      )}
                    </div>
                  </div>
                  <div className="ml-6 w-full">
                    <div className="mb-3">
                      <label>نام خانوادگی</label>
                      <span className="text-red-600">*</span>
                    </div>
                    <div>
                      <input
                        className="bg-transparent w-full border border-gray-300 rounded-lg p-3"
                        type={"text"}
                        required
                        onChange={familyChangeHandler}
                        value={familyValue}
                      />
                      {familyError && (
                        <label htmlFor="name" className="text-red-600">
                          نام خانوادگی وارد شده صحیح نیست
                        </label>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 mb-5">
                    <input id="codeMeli" type={"checkbox"} />
                    <label htmlFor="codeMeli">
                      اتباع خارجی هستم و کد ملی ندارم
                    </label>
                  </div>
                  <div className="">
                    <div className="mb-3">
                      <label>کد ملی</label>
                      <span className="text-red-600">*</span>
                    </div>
                    <div>
                      <input
                        className="bg-transparent border rounded-lg w-full p-2 border-gray-300"
                        type={"text"}
                        required
                        onChange={meliChangeHandler}
                        value={meliValue}
                      />
                      {meliError && (
                        <label htmlFor="name" className="text-red-600">
                          کد ملی وارد شده صحیح نیست
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PopUpWindow>
        </div>
      </Modal>
    </div>
  );
};
