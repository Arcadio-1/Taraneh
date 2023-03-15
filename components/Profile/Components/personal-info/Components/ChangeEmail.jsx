import React from "react";
import Modal from "../../../../Layout/Module/Modal";
import useEditInfo from "../Hook/useEditInfo";
import PopUpWindow from "./PopUpWindow";

const ChangeEmail = ({ email, id, onClose, effectBool }) => {
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
      console.log(data);
    }
  };
  return (
    <Modal closeFn={onClose}>
      <div
        className={` transition-all duration-200 ease-in ${
          effectBool ? "opacity-100 w-0" : "opacity-0 w-0"
        }`}
      >
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
