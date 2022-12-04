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
import LogIcon from "../ui/Icons/LogIcon";
const SignupForm = (props) => {
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
    const regexEn = RegExp(/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/);
    const regexFa = RegExp(
      /۰۹(۱[۰۱۲۳۴۵۶۷۸۹]|۳[۱۲۳۴۵۶۷۸۹]|۰[۱۲۳۴۵۶۷۸۹]|۲[۱۲۳۴۵۶۷۸۹])-?[۰۱۲۳۴۵۶۷۸۹]{3}-?[۰۱۲۳۴۵۶۷۸۹]{4}/
    );
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
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
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
      const request = await fetch("/api/signup/getStates", {
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
      const request = await fetch(`/api/signup/${stateId}`, {
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
          message: "لطفا صبر کنید",
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
          message: "ثبت نام شما با موفقیت انجام شد",
        })
      );
      if (!request.error) {
        setTimeout(() => {
          router.push("/");
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
    emailBlurHandler();
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
      isEmailValid &&
      isPasswordValid &&
      isCPasswordValid &&
      isZipCodeValid &&
      isAddressValid &&
      state !== "false" &&
      city !== "false"
    ) {
      const person = {
        name: nameValue,
        family: familyValue,
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
        <h1 className="account-signup-title">فرم ثبت نام</h1>
        <form className="Form account-signup-form">
          <div className="account-signup-form-line">
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
          </FormItem>
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
              <p className="FormItem-errorMsg">لطفا استان خود را انتخاب کنید</p>
            )}
          </div>
          {isShowCities && (
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
                <p className="FormItem-errorMsg">لطفا شهر خود راانتخاب کنید</p>
              )}
            </div>
          )}
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
          <div className="FormItem">
            <textarea
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              value={addressValue}
              required
              placeholder="آدرس (بلوار پیروزی,خیابان 26 شرقی مجتمع بهار,بلوک اول,طبقه دوم,واحد سوم)"
              className="FormItem-textArea"
            />
            {addressError && (
              <p className="FormItem-errorMsg">
                لطفا آدرس خود را به زبان فارسی وارد کنید
              </p>
            )}
          </div>
          <div className="Form-action">
            <button onClick={cancelHandler} className="Form-action-secondary">
              انصراف
            </button>
            <button onClick={submitHandler} className="Form-action-submit">
              ثبت
            </button>
          </div>
        </form>
        <div className=" account-signup-link">
          <h3
            className=" account-signup-link-item"
            onClick={() => {
              props.onSignup();
            }}
          >
            <LogIcon />
            ورود
          </h3>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupForm;
