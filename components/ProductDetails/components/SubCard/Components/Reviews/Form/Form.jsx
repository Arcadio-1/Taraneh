import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
// import { getUserInfo } from "../../../../../../../pages/api/helper";
import useInputValidation from "../../../../../../Auth/validation/UseInputValidation";
import Rate from "./Rate";
const Form = ({ postId }) => {
  const [rate, setRate] = useState();
  const [showRateIsNullMassage, setShowRateIsNullMassage] = useState(false);
  const checkboxRef = useRef();
  const { data: session } = useSession();
  // const showRateIsNullMassage = false;

  const selectRateHandler = (e) => {
    // rate = e.target.value;
    setRate((prev) => {
      return (prev = e.target.value);
    });
    console.log(rate);

    setShowRateIsNullMassage(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // const providers = getUserInfo();
    // console.log(providers);
    if (!rate) {
      setShowRateIsNullMassage(true);
    }
    if (isTextValid) {
      console.log(session.user.email._id);
      console.log(textValue, rate, checkboxRef.current.checked);
      const request = await fetch("/api/helperAPI/addReviwe", {
        method: "POST",
        body: JSON.stringify({
          postId: postId,
          text: textValue,
          rate: rate,
          anonimus: checkboxRef.current.checked,
          parent: [],
        }),
        headers: { "Content-Type": "application/json" },
      });
      const response = await request.json();
      console.log(response);
    }
  };

  const {
    value: textValue,
    isValid: isTextValid,
    errorStatus: textError,
    inputBlurHandler: textBlurHandler,
    inputChangeHandler: textChangeHandler,
    reset: textResetHandler,
  } = useInputValidation((value) => {
    const regex = RegExp(/^\s*\S/);
    const isValid = regex.test(value);
    return isValid;
  });
  return (
    <div className="">
      <p className="text-xl">دیدگاه شما</p>
      <form className="flex flex-col gap-3 mt-3">
        <Rate
          onSelectRate={selectRateHandler}
          isShowNotif={showRateIsNullMassage}
        />
        <div className="FormItem">
          <textarea
            onChange={textChangeHandler}
            onBlur={textBlurHandler}
            value={textValue}
            required
            placeholder="دیدگاه خود را در این قسمت وارد کنید"
            className="FormItem-textArea bg-gray-100"
          />
          {textError && (
            <p className="FormItem-errorMsg">
              لطفا دیدگاه خود را به زبان فارسی وارد کنید
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <input type="checkbox" ref={checkboxRef} />
          <label>ارسال ناشناس</label>
        </div>
        <div className="flex gap-5 transition-all duration-500">
          <button
            className="bg-cyan-500 text-white py-2 rounded-lg w-40 hover:bg-cyan-600 "
            onClick={submitHandler}
          >
            ثبت دیدگاه
          </button>
          <button className="bg-gray-400 text-white py-2 rounded-lg w-40 hover:bg-gray-500">
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
