import React, { Fragment, useRef, useState } from "react";
import { useEffect } from "react";
import FormItem from "../ui/FormItem/FormItem";
import UserIcon from "../ui/Icons/UserIcon";
import MobileIcon from "../ui/Icons/MobileIcon";
import MailIcon from "../ui/Icons/MailIcon";
import AddressIcon from "../ui/Icons/AddressIcon";
import KeyIcon from "../ui/Icons/KeyIcon";
import useInputValidation from "./validation/UseInputValidation";
import ShowIcon from "../ui/Icons/ShowIcon";
import HideIcon from "../ui/Icons/HideIcon";
import { signIn, useSession } from "next-auth/react";
import { uiAction } from "../../store/ui/uiSlice";
import "react-toastify/dist/ReactToastify.css";
import NotifCard from "../ui/NotifCard";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import CalenderIcon from "../ui/Icons/CalenderIcon";
import { jalaliToGregorian } from "../../lib/utilFunctions";

const SignupForm = ({ currentPage }) => {
  const stateRef = useRef();
  const cityRef = useRef();
  const router = useRouter();
  const [states, setStates] = useState([]);
  const [getStatesStatus, setGetStatesStatus] = useState("loading");
  const [stateError, setStateError] = useState(false);
  const [cities, setCities] = useState([]);
  const [getCitiesStatus, setGetCitiesStatus] = useState("loading");
  const [cityError, setCityError] = useState(false);
  const [isShowCities, setIsShowCities] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const dispatchNotif = useDispatch();
  const { data: session } = useSession();

  const {
    value: mobileValue,
    isValid: isMobileValid,
    errorStatus: mobileError,
    inputBlurHandler: mobileBlurHandler,
    inputChangeHandler: mobileChangeHandler,
    reset: mobileResetHandler,
  } = useInputValidation((value) => {
    const regexEn = RegExp(/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/);
    const regexFa = RegExp(
      /۰۹(۱[۰۱۲۳۴۵۶۷۸۹]|۳[۱۲۳۴۵۶۷۸۹]|۰[۱۲۳۴۵۶۷۸۹]|۲[۱۲۳۴۵۶۷۸۹])-?[۰۱۲۳۴۵۶۷۸۹]{3}-?[۰۱۲۳۴۵۶۷۸۹]{4}$/
    );
    const isValidEn = regexEn.test(value);
    const isValidFa = regexFa.test(value);
    const isValid = isValidEn || isValidFa;
    return isValid;
  });

  const {
    value: meliValue,
    isValid: isMeliValid,
    errorStatus: meliError,
    inputBlurHandler: meliBlurHandler,
    inputChangeHandler: meliChangeHandler,
    reset: meliResetHandler,
  } = useInputValidation((value) => {
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
  });

  const {
    value: yearValue,
    isValid: isYearValid,
    errorStatus: yearError,
    inputBlurHandler: yearBlurHandler,
    inputChangeHandler: yearChangeHandler,
    reset: yearResetHandler,
  } = useInputValidation((value) => {
    const regexEn = RegExp(/^(13|14)\d{2}$/);
    const regexFa = RegExp(/^(۱۳|۱۴)\[۰۱۲۳۴۵۶۷۸۹]{2}$/);
    const isValidEn = regexEn.test(value);
    const isValidFa = regexFa.test(value);
    const isValid = isValidEn || isValidFa;
    return isValid;
  });

  const {
    value: monthValue,
    isValid: isMonthValid,
    errorStatus: monthError,
    inputBlurHandler: monthBlurHandler,
    inputChangeHandler: monthChangeHandler,
    reset: monthResetHandler,
  } = useInputValidation((value) => {
    const regexEn = RegExp(/^(0?[1-9]|1[012])$/);
    const regexFa = RegExp(/^(۰?[۱۲۳۴۵۶۷۸۹]|1[۰۱۲])$/);
    const isValidEn = regexEn.test(value);
    const isValidFa = regexFa.test(value);
    const isValid = isValidEn || isValidFa;
    return isValid;
  });

  const {
    value: dayValue,
    isValid: isDayValid,
    errorStatus: dayError,
    inputBlurHandler: dayBlurHandler,
    inputChangeHandler: dayChangeHandler,
    reset: dayResetHandler,
  } = useInputValidation((value) => {
    const regexEn = RegExp(/^([0-2]?[1-9]|3[01]|10|20)$/);
    const regexFa = RegExp(/^([۰۱۲]?[۱۲۳۴۵۶۷۸۹]|۳[۰۱]|۱۰|۲۰)$/);
    const isValidEn = regexEn.test(value);
    const isValidFa = regexFa.test(value);
    const isValid = isValidEn || isValidFa;
    return isValid;
  });

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
    value: passwordValue,
    isValid: isPasswordValid,
    errorStatus: passwordError,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
    reset: passwordResetHandler,
  } = useInputValidation((value) => {
    const regex = RegExp(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,24}$/
    );
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

  const {
    value: familyValue,
    isValid: isFamilyValid,
    errorStatus: familyError,
    inputBlurHandler: familyBlurHandler,
    inputChangeHandler: familyChangeHandler,
    reset: familyResetHandler,
  } = useInputValidation((value) => {
    const regex = RegExp(/^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/);
    const isValid = regex.test(value);
    return isValid;
  });

  const {
    value: zipCodeValue,
    isValid: isZipCodeValid,
    errorStatus: zipCodeError,
    inputBlurHandler: zipCodeBlurHandler,
    inputChangeHandler: zipCodeChangeHandler,
    reset: zipCodeResetHandler,
  } = useInputValidation((value) => {
    const regexEn = RegExp(/^[0-9]{10}$/);
    const regexFa = RegExp(/^[۰۱۲۳۴۵۶۷۸۹]{10}$/);
    const isValidEn = regexEn.test(value);
    const isValidFa = regexFa.test(value);
    const isValid = isValidEn || isValidFa;
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
    const regex = RegExp(/^\s*\S+(?:\s+\S+){2}/);
    const isValid = regex.test(value);
    return isValid;
  });

  const {
    value: cPasswordValue,
    isValid: isCPasswordValid,
    errorStatus: cPasswordError,
    inputBlurHandler: cPasswordBlurHandler,
    inputChangeHandler: cPasswordChangeHandler,
    reset: cPasswordResetHandler,
  } = useInputValidation((value) => {
    const isValid = passwordValue === value;
    return isValid;
  });

  useEffect(() => {
    const getStates = async () => {
      const request = await fetch("/api/util/api/getStateList/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await request.json();
      setStates((prev) => (prev = result.states));
      if (result.status === "success") {
        setGetStatesStatus("success");
      }
    };
    getStates();
  }, []);

  const stateChangeHandler = () => {
    const selectedState = stateRef.current.value;
    if (selectedState === "false") {
      setIsShowCities(false);
      return;
    }
    setIsShowCities(true);

    setStateError(false);
    setGetCitiesStatus("loading");
    const getcities = async (stateId) => {
      const request = await fetch(`/api/util/api/getStateCityes/${stateId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const result = await request.json();
      setCities((prev) => (prev = result.cities));
      if (result.status === "success") {
        setGetCitiesStatus("success");
      }
    };
    getcities(selectedState);
  };
  const cityChangeHandler = () => {
    if (cityRef !== "false") {
      setCityError(false);
    }
  };

  const afterSignup = async () => {
    try {
      dispatchNotif(
        uiAction.setSideNotif({
          status: "loading",
          title: "Loading",
          message: "در حال ورود لطفا صبر کنید",
        })
      );
      const request = await signIn("credentials", {
        redirect: false,
        email: emailValue,
        password: passwordValue,
      });
      console.log(request);
      if (!request.ok) {
        throw new Error(request.error);
      }
      dispatchNotif(
        uiAction.setSideNotif({
          status: "success",
          title: "Success",
          message: "ورود با موفقیت انجام شد",
        })
      );
      if (!request.error) {
        setTimeout(() => {
          if (currentPage) {
            router.push(currentPage);
          }
          if (!currentPage) {
            router.push("/");
          }
        }, 1000);
      }
    } catch (error) {
      dispatchNotif(
        uiAction.setSideNotif({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };

  const signupHandler = async (person) => {
    dispatchNotif(
      uiAction.setSideNotif({
        status: "loading",
        title: "Loading",
        message: "لطفا صبر کنید",
      })
    );
    try {
      const request = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(person),
        headers: { "Content-Type": "application/json" },
      });

      const result = await request.json();
      // console.log(result);
      if (result.status === "error") {
        throw new Error(result.errorMessage);
      }
      dispatchNotif(
        uiAction.setSideNotif({
          status: "success",
          title: "Success",
          message: "ثبت نام شما با موفقیت انجام شد",
        })
      );
      afterSignup();

      // console.log(result);
    } catch (error) {
      dispatchNotif(
        uiAction.setSideNotif({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    nameBlurHandler();
    familyBlurHandler();
    mobileBlurHandler();
    meliBlurHandler();
    emailBlurHandler();
    yearBlurHandler();
    monthBlurHandler();
    dayBlurHandler();
    passwordBlurHandler();
    cPasswordBlurHandler();
    zipCodeBlurHandler();
    addressBlurHandler();

    const state = stateRef.current.value;
    const city = isShowCities ? cityRef.current.value : undefined;

    if (state === "false") {
      setStateError(true);
    }
    if (city === "false") {
      setCityError(true);
    }
    if (
      isNameValid &&
      isFamilyValid &&
      isMobileValid &&
      isMeliValid &&
      isEmailValid &&
      isYearValid &&
      isMonthValid &&
      isDayValid &&
      isPasswordValid &&
      isCPasswordValid &&
      isZipCodeValid &&
      isAddressValid &&
      state !== "false" &&
      city !== "false"
    ) {
      const dateString = `${yearValue}/${monthValue}/${dayValue}`;
      const jD = jalaliToGregorian(dateString);
      const birthdate = new Date(jD[0], jD[1] - 1, jD[2]).toLocaleDateString(
        "en-US"
      );
      const person = {
        name: nameValue,
        family: familyValue,
        birthdate: birthdate,
        codeMeli: meliValue,
        mobile: mobileValue,
        email: emailValue,
        password: passwordValue,
        state: state,
        city: city,
        zipCode: zipCodeValue,
        address: addressValue,
      };

      signupHandler(person);
    }
  };
  const cancelHandler = (e) => {
    e.preventDefault();
    nameResetHandler();
    familyResetHandler();
    mobileResetHandler();
    emailResetHandler();
    passwordResetHandler();
    cPasswordResetHandler();
    zipCodeResetHandler();
    addressResetHandler();
    stateRef.current.value = "false";
    setIsShowCities(false);
  };
  const notifHandler = (e) => {
    e.preventDefault();
    // toast("Wow so easy !");
    // console.log(session.user.name);
    dispatchNotif(
      uiAction.setSideNotif({
        status: "info",
        title: "Success",
        message: "با موفقیت وارد شدید",
      })
    );
  };
  return (
    <Fragment>
      <NotifCard />
      <div className="account-signup">
        {/* <h1 className="account-signup-title">فرم ثبت نام</h1> */}
        <form className="Form account-signup-form">
          <div className="account-signup-form-line">
            <div className="Form-item-container">
              <FormItem
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
            </div>

            <div className="Form-item-container">
              <FormItem
                onBlur={familyBlurHandler}
                onChange={familyChangeHandler}
                value={familyValue}
                isValid={isFamilyValid}
                error={familyError}
                errorMsg={"نام خانوادگی خود را به زبان فارسی وارد کنید"}
                label="نام خانوادگی"
                htmlId="family"
                inputType="text"
              >
                <UserIcon />
              </FormItem>
            </div>
          </div>
          <div className="Form-item-container">
            <FormItem
              onBlur={meliBlurHandler}
              onChange={meliChangeHandler}
              value={meliValue}
              isValid={isMeliValid}
              error={meliError}
              label="کد ملی"
              htmlId="meli"
              inputType="text"
              errorMsg={"کد ملی وارد شده صحیح نمیباشد"}
            >
              <UserIcon />
            </FormItem>
          </div>
          <div className="Form-item-container">
            <FormItem
              onBlur={mobileBlurHandler}
              onChange={mobileChangeHandler}
              value={mobileValue}
              isValid={isMobileValid}
              error={mobileError}
              label="شماره موبایل"
              htmlId="mobile"
              inputType="text"
              errorMsg={"شماره موبایل وارد شده صحیح نمیباشد"}
            >
              <MobileIcon />
            </FormItem>
          </div>
          <div className="Form-item-container">
            <h2 className="text-gray-500 mb-5">تاریخ تولد :</h2>
            <div className="flex justify-evenly">
              <div className="w-28 ">
                <FormItem
                  onBlur={yearBlurHandler}
                  onChange={yearChangeHandler}
                  value={yearValue}
                  isValid={isYearValid}
                  error={yearError}
                  label="سال"
                  htmlId="year"
                  inputType="text"
                  inputCls={"text-center pl-3"}
                  errorMsg={" خطا! مثال: 1378"}
                >
                  <CalenderIcon />
                </FormItem>
              </div>
              <div className="w-20">
                <FormItem
                  onBlur={monthBlurHandler}
                  onChange={monthChangeHandler}
                  value={monthValue}
                  isValid={isMonthValid}
                  error={monthError}
                  label="ماه"
                  htmlId="month"
                  inputCls={"text-center pl-3"}
                  inputType="text"
                  errorMsg={" خطا! مثال: 8"}
                >
                  <CalenderIcon />
                </FormItem>
              </div>
              <div className="w-20">
                <FormItem
                  onBlur={dayBlurHandler}
                  onChange={dayChangeHandler}
                  value={dayValue}
                  isValid={isDayValid}
                  error={dayError}
                  label="روز"
                  htmlId="day"
                  inputCls={"text-center pl-3"}
                  inputType="text"
                  errorMsg={" خطا! مثال: 16"}
                >
                  <CalenderIcon />
                </FormItem>
              </div>
            </div>
          </div>

          <div className="Form-item-container">
            <FormItem
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
          </div>

          <div className="Form-item-container">
            <FormItem
              onBlur={passwordBlurHandler}
              onChange={passwordChangeHandler}
              value={passwordValue}
              isValid={isPasswordValid}
              error={passwordError}
              htmlId="password"
              errorMsg={"کلمه عبور باید شش رقم شامل حروف و عدد و علائم باشد"}
              label="رمز عبور"
              inputType={`${isShowPassword ? "text" : "password"}`}
            >
              <KeyIcon />
            </FormItem>
          </div>

          <div className="Form-item-container">
            <div className="FormItem-showPassword">
              <div className="FormItem-showPassword-checker">
                <label
                  htmlFor="cheaker"
                  className="FormItem-showPassword-checker-label"
                >
                  <input
                    onChange={() => {
                      setIsShowPassword((prev) => (prev = !prev));
                    }}
                    id="cheaker"
                    type="checkbox"
                  />
                  <div className="checker-label-slider round"></div>
                </label>
              </div>
              {!isShowPassword && (
                <label htmlFor="cheaker">
                  <ShowIcon />
                </label>
              )}
              {isShowPassword && (
                <label htmlFor="cheaker">
                  <HideIcon />
                </label>
              )}
            </div>
          </div>

          <div className="Form-item-container">
            <FormItem
              onBlur={cPasswordBlurHandler}
              onChange={cPasswordChangeHandler}
              value={cPasswordValue}
              isValid={isCPasswordValid}
              error={cPasswordError}
              errorMsg={"کلمه عبور وارد شده مطابقت ندارد"}
              htmlId="cPassword"
              label="تکرار رمز عبور"
              inputType={`${isShowPassword ? "text" : "password"}`}
            >
              <KeyIcon />
              <div className="Form-item-container"></div>
            </FormItem>
          </div>

          <div className="Form-item-container">
            <div className="FormItem">
              <select
                onChange={stateChangeHandler}
                required
                disabled={getStatesStatus === "loading" ? true : false}
                className="FormItem-select"
                ref={stateRef}
              >
                {getStatesStatus === "success" && (
                  <option value={false}>انتخاب استان...</option>
                )}
                {getStatesStatus === "loading" && (
                  <option>درحال دریافت...</option>
                )}
                {states &&
                  states.map((state) => {
                    return (
                      <option value={state._id} key={state._id}>
                        {state.state}
                      </option>
                    );
                  })}
              </select>
              {stateError && (
                <p className="FormItem-errorMsg">
                  لطفا استان خود را انتخاب کنید
                </p>
              )}
            </div>
          </div>

          {isShowCities && (
            <div className="Form-item-container">
              <div className="FormItem">
                <select
                  disabled={getCitiesStatus === "loading" ? true : false}
                  onChange={cityChangeHandler}
                  ref={cityRef}
                  required
                  className="FormItem-select"
                >
                  {getCitiesStatus === "loading" && (
                    <option>درحال دریافت ...</option>
                  )}
                  {getCitiesStatus === "success" && (
                    <option value={false}>انتخاب شهر...</option>
                  )}
                  {getCitiesStatus === "success" &&
                    cities.map((city) => {
                      return (
                        <option value={city._id} key={city._id}>
                          {city.city}
                        </option>
                      );
                    })}
                </select>
                {cityError && (
                  <p className="FormItem-errorMsg">
                    لطفا شهر خود راانتخاب کنید
                  </p>
                )}
              </div>
            </div>
          )}
          <div className="Form-item-container">
            <FormItem
              onBlur={zipCodeBlurHandler}
              onChange={zipCodeChangeHandler}
              value={zipCodeValue}
              isValid={isZipCodeValid}
              error={zipCodeError}
              errorMsg={"کد پستی وارد شده صحیح نیست"}
              label="کد پستی"
              htmlId="zipCode"
              inputType="text"
            >
              <AddressIcon />
            </FormItem>
          </div>

          <div className="Form-item-container">
            <div
              className={`FormItem ${
                isAddressValid ? "focus:outline-g1_2" : ""
              } ${addressError ? "unvalidItem" : ""}`}
            >
              <textarea
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
                value={addressValue}
                required
                placeholder="آدرس (بلوار پیروزی,خیابان 26 شرقی مجتمع بهار,بلوک اول,طبقه دوم,واحد سوم)"
                className={`FormItem-textArea ${
                  isAddressValid ? "focus:outline-g1_2" : ""
                }`}
              />
              {addressError && (
                <p className="FormItem-errorMsg">
                  لطفا آدرس خود را به زبان فارسی وارد کنید
                </p>
              )}
            </div>
          </div>

          <div className="Form-action">
            {/* <button onClick={cancelHandler} className="Form-action-secondary">
              انصراف
            </button> */}
            <button onClick={submitHandler} className="Form-action-submit">
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignupForm;
