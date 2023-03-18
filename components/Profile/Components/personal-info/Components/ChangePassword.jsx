import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Modal from "../../../../Layout/Module/Modal";
import PopUpWindow from "./PopUpWindow";
import ArrowsIcon from "../../../../ui/Icons/arrowsIcon";
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../../../store/ui/uiSlice";
import NotifCard from "../../../../ui/NotifCard";

const ChangePassword = ({ password, id, onClose, effectBool }) => {
  const [haveNumber, setHaveNumber] = useState(false);
  const [haveLowecase, setHaveLowercase] = useState(false);
  const [haveCapital, setHaveCapital] = useState(false);
  const [haveSign, setHaveSign] = useState(false);
  const [haveLength, setHaveLength] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState(null);
  const oldPasswordRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    setIsValid(false);
    if (haveNumber && haveLowecase && haveCapital && haveSign && haveLength) {
      setIsValid(true);
    }
  }, [haveNumber, haveLowecase, haveCapital, haveSign, haveLength]);

  const localPasswordChangeHandler = (e) => {
    setPasswordValue((prev) => {
      return (prev = e.target.value);
    });
    const value = e.target.value;
    const regexNumber = RegExp(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{1,24}$/);
    const regexLowercase = RegExp(/^(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{1,24}$/);
    const regexCapital = RegExp(/^(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{1,24}$/);
    const regexSigns = RegExp(/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,24}$/);
    const regexLength = RegExp(/^[a-zA-Z0-9!@#$%^&*]{6,24}$/);

    const isRegexNumberValid = regexNumber.test(value);
    const isRegexLowercaseValid = regexLowercase.test(value);
    const isRegexCapitalValid = regexCapital.test(value);
    const isRegexSignsValid = regexSigns.test(value);
    const isRegexLengthValid = regexLength.test(value);

    if (isRegexNumberValid) {
      setHaveNumber(true);
    }
    if (!isRegexNumberValid) {
      setHaveNumber(false);
    }
    if (isRegexLowercaseValid) {
      setHaveLowercase(true);
    }
    if (!isRegexLowercaseValid) {
      setHaveLowercase(false);
    }
    if (isRegexCapitalValid) {
      setHaveCapital(true);
    }
    if (!isRegexCapitalValid) {
      setHaveCapital(false);
    }
    if (isRegexSignsValid) {
      setHaveSign(true);
    }
    if (!isRegexSignsValid) {
      setHaveSign(false);
    }
    if (isRegexLengthValid) {
      setHaveLength(true);
    }
    if (!isRegexLengthValid) {
      setHaveLength(false);
    }
  };
  const submitEditHandler = async () => {
    dispatch(
      uiAction.setSideNotif({
        status: "loading",
        title: "Loading",
        message: "لطفا صبر کنید",
      })
    );
    if (isValid) {
      const request = await fetch("/api/auth/edit", {
        method: "POST",
        body: JSON.stringify({
          changeType: "password",
          userId: id,
          newData: {
            oldPassword: oldPasswordRef.current.value,
            oldHashedPassword: password,
            newPassword: passwordValue,
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
              "کلمه عبور با موفقیت تغییر یافت  در حال خروج جهت ورود مجدد",
          })
        );
        setTimeout(() => {
          signOut();
        }, 3000);
      }
      console.log(data);
    }
    if (!isValid) {
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
          title={"تغییر رمز عبور"}
          actionTitle={"ویرایش"}
          actionFn={submitEditHandler}
          closeWindow={onClose}
          isValid={isValid}
        >
          <div>
            <div className="flex flex-col">
              <div className="flex flex-col mb-10">
                <label className="text-lg mb-2">
                  رمز عبور فعلی:
                  <span className="text-red-700">*</span>
                </label>
                <input
                  className="border bg-transparent border-gray-300 rounded-lg p-3"
                  type={"text"}
                  ref={oldPasswordRef}
                />
                <Link href={"/recoverPassword"}>
                  <div className="flex items-center text-blue-600">
                    <span>بازیابی رمز عبور</span>
                    <ArrowsIcon arrowType={"left"} />
                  </div>
                </Link>
              </div>
              <div>
                <p className="mb-2 text-lg">رمز عبور جدید</p>
                <input
                  id="name"
                  className="border bg-transparent border-gray-300 rounded-lg p-3"
                  style={{ width: "250px" }}
                  type={"text"}
                  required
                  onChange={localPasswordChangeHandler}
                  // value={passwordValue}
                />
              </div>
              <ul className="mt-5">
                <li
                  className={`text-lg mb-2 p-2 rounded-lg ${
                    haveNumber
                      ? "text-gray-200 bg-green-600"
                      : "text-gray-100 bg-orange-600"
                  }`}
                >
                  شامل عدد
                </li>
                <li
                  className={` text-lg mb-2 p-2 rounded-lg ${
                    haveLowecase
                      ? "text-gray-200 bg-green-600"
                      : "text-gray-100 bg-orange-600"
                  }`}
                >
                  شامل حرف کوچک
                </li>
                <li
                  className={` text-lg mb-2 p-2 rounded-lg ${
                    haveCapital
                      ? "text-gray-200 bg-green-600"
                      : "text-gray-100 bg-orange-600"
                  }`}
                >
                  شامل حرف بزرگ
                </li>
                <li
                  className={`text-lg mb-2 p-2 rounded-lg ${
                    haveSign
                      ? "text-gray-200 bg-green-600"
                      : "text-gray-100 bg-orange-600"
                  }`}
                >
                  <span>(!@#$%^&*) شامل علائم</span>
                </li>
                <li
                  className={`text-lg mb-2 p-2 rounded-lg ${
                    haveLength
                      ? "text-gray-200 bg-green-600"
                      : "text-gray-100 bg-orange-600"
                  }`}
                >
                  شامل 6 الی 24 رقم
                </li>
              </ul>
            </div>
          </div>
        </PopUpWindow>
      </div>
    </Modal>
  );
};

export default ChangePassword;
