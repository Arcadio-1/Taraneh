import { useSession } from "next-auth/react";
import LoadingSpinner from "../../../../../../ui/LoadingSpiner/loadingSpiner";
import React, { useEffect, useRef, useState } from "react";
// import { getUserInfo } from "../../../../../../../pages/api/helper";
import useInputValidation from "../../../../../../Auth/validation/UseInputValidation";
import Rate from "./Rate";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../../../../../store/ui/uiSlice";
import { getCurentDate } from "../../../../../../../lib/utilFunctions";

const Form = ({
  postId,
  replyTo,
  userData,
  firstComment,
  textRef,
  formRef,
}) => {
  const dispatchSideNotif = useDispatch();
  const checkboxRef = useRef();
  const { data: session } = useSession();
  const [postStatus, setPostStatus] = useState({
    status: null,
    title: null,
    message: null,
  });
  const {
    value: commentValue,
    isValid: isCommentValid,
    errorStatus: commentError,
    inputBlurHandler: commentBlurHandler,
    inputChangeHandler: commentChangeHandler,
    reset: commentResetHandler,
  } = useInputValidation((value) => {
    const regex = RegExp(/^\s*\S+(?:\s+\S+){2}/);
    const isValid = regex.test(value);
    return isValid;
  });
  const {
    value: rateValue,
    isValid: isRateValid,
    errorStatus: rateError,
    inputChangeHandler: rateChangeHandler,
    inputBlurHandler: rateBlurHandler,
    reset: rateResetHandler,
  } = useInputValidation((value) => {
    const regex = RegExp(/^[1-5]{1}$/);
    const isValid = regex.test(value);
    return isValid;
  });

  const submitComment = async (e) => {
    e.preventDefault();
    commentBlurHandler();
    rateBlurHandler();
    if (isCommentValid && isRateValid) {
      const isReplayTo = replyTo
        ? { id: replyTo.id, fullName: replyTo.fullname }
        : null;
      let dateTime = getCurentDate();
      const fullname = `${userData.name} ${userData.family}`;
      const methodFlag = firstComment ? "POST" : "PUT";
      try {
        setPostStatus({
          status: "loading",
          title: "در حال ارسال",
          message: "در حال ارسال نظرتان",
        });
        const request = await fetch("/api/shop/data/postComment/", {
          method: methodFlag,
          body: JSON.stringify({
            _id: postId,
            comment: {
              id: userData._id + today.getTime(),
              date: dateTime,
              rate: rateValue,
              userId: userData._id,
              fullname: fullname,
              text: commentValue,
              like: 0,
              dislike: 0,
              parent: isReplayTo,
            },
          }),
        });
        if (!request || request.status === "error") {
          throw new Error("بروز خطا در ارسال نظر شما کد:06");
        }
        const response = await request.json();
        if (!response || response.status === "error") {
          throw new Error("کد:07 بروز خطا در ارسال نظر شما");
        }
        if (response && response.status === "success") {
          commentResetHandler();
          rateResetHandler();
          setPostStatus({
            status: "success",
            title: "با موفقیت ارسال شد",
            message: "نظر شما با موفقیت ارسال شد",
          });
          dispatchSideNotif(
            uiAction.setSideNotif({
              status: "success",
              title: "ارسال شد",
              message: "نظر شما ارسال شد",
            })
          );
        }
      } catch (error) {
        setPostStatus({
          status: "error",
          title: "خطا در ارسال",
          message: error.message || "خطا در ارسال نظر شما",
        });
        dispatchSideNotif(
          uiAction.setSideNotif({
            status: "error",
            title: "خطا در ارسال",
            message: "خطا در ارسال نظر",
          })
        );
      }
    }
  };

  return (
    <div className="relative">
      <p ref={formRef} className="text-xl">
        دیدگاه شما
      </p>
      {replyTo && (
        <div className="mt-3 ">
          <span className="pr-5 text-lg">در پاسخ به </span>
          <span className="text-orange-600 text-xl">{replyTo.fullname}</span>
        </div>
      )}
      <form className="flex flex-col gap-3 mt-3">
        <Rate
          rateValue={rateValue}
          rateError={rateError}
          onChange={rateChangeHandler}
        />
        <div className="FormItem">
          <textarea
            onChange={commentChangeHandler}
            onBlur={commentBlurHandler}
            value={commentValue}
            required
            ref={textRef}
            placeholder="دیدگاه خود را در این قسمت وارد کنید"
            className="FormItem-textArea bg-gray-100"
          />
          {commentError && (
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
            onClick={submitComment}
          >
            ثبت دیدگاه
          </button>
          <button className="bg-gray-400 text-white py-2 rounded-lg w-40 hover:bg-gray-500">
            انصراف
          </button>
        </div>
      </form>
      {postStatus.status === "loading" && (
        <div className="h-full flex backdrop-blur-[1px] absolute top-0 left-0 w-full">
          <div className="w-20 h-20 m-auto">
            <LoadingSpinner text={"در حال ارسال"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
