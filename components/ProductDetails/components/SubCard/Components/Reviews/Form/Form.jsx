import React from "react";
import useInputValidation from "../../../../../../Auth/validation/UseInputValidation";
import Rate from "./Rate";
import FormItem from "../../../../../../ui/FormItem/FormItem";
import UserIcon from "../../../../../../ui/Icons/UserIcon";
import MailIcon from "../../../../../../ui/Icons/MailIcon";

const Form = () => {
  const {
    value: emailValue,
    isValid: isEmailValid,
    errorStatus: emailError,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    reset: emailResetHandler,
  } = useInputValidation((value) => {
    const emailString = String(value).toLowerCase();
    const regex = RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const isValid = regex.test(emailString);
    return isValid;
  });

  const {
    value: addressValue,
    isValid: isAddressValid,
    errorStatus: addressError,
    inputBlurHandler: addressBlurHandler,
    inputChangeHandler: addressChangeHandler,
    reset: addressResetHandler,
  } = useInputValidation((value) => {
    const regex = RegExp(/^\s*\S/);
    const isValid = regex.test(value);
    return isValid;
  });

  const {
    value: nameValue,
    isValid: isNameValid,
    errorStatus: nameError,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    reset: nameResetHandler,
  } = useInputValidation((value) => {
    const regex = RegExp(/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/);
    const isValid = regex.test(value);
    return isValid;
  });
  return (
    <div className="">
      <p className="text-xl">دیدگاه شما</p>
      <form className="flex flex-col gap-3 mt-3">
        <Rate />
        <div className="FormItem">
          <textarea
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            value={addressValue}
            required
            placeholder="دیدگاه خود را در این قسمت وارد کنید"
            className="FormItem-textArea bg-gray-100"
          />
          {addressError && (
            <p className="FormItem-errorMsg">
              لطفا دیدگاه خود را به زبان فارسی وارد کنید
            </p>
          )}
        </div>
        <FormItem
          inputCls={"bg-gray-100 h-12"}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={nameValue}
          isValid={isNameValid}
          error={nameError}
          errorMsg={"نام خود را به زبان فارسی وارد کنید"}
          label="نام"
          htmlId="name"
          inputType="text"
        >
          <UserIcon />
        </FormItem>
        <div>
          <FormItem
            inputCls={"bg-gray-100  h-12"}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            value={emailValue}
            isValid={isEmailValid}
            error={emailError}
            label="ایمیل"
            htmlId="email"
            inputType="email"
            errorMsg={" ایمیل وارد شده صحیح نمیباشد"}
          >
            <MailIcon />
          </FormItem>
          <p className="text-gray-500">ایمیل شما نمایش داده نمیشود</p>
        </div>

        <div>
          <input type="checkbox" />
          <label>ذخیره مشخصات وارد شده</label>
        </div>
        <div className="flex gap-5 transition-all duration-500">
          <button className="bg-cyan-500 text-white py-2 rounded-lg w-40 hover:bg-cyan-600 ">
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
