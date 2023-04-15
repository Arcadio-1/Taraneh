import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import CommentsList from "./Comments/CommentsList";
import Form from "./Form/Form";

const Reviws = ({ comments, title, postId }) => {
  const numberOfComments = comments.length;
  const formRef = useRef();
  const textRef = useRef();

  const focusOnText = () => {
    textRef.current.focus();
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  const { data, status } = useSession();
  const [replyTo, setReplyTo] = useState(null);

  return (
    <div className="subCard-reviwe p-2 flex flex-col gap-5">
      <div className="">
        {status === "unauthenticated" && (
          <div>
            <p className="text-xl mb-5 text-cyan-500">
              جهت ارسال دیدگاه به حساب کاربری خود وارد شوید
            </p>
            <div className="flex gap-5">
              <Link href={"/account?form=login"}>
                <p className="px-10 py-2 bg-gray-500 text-white rounded-lg">
                  ورود
                </p>
              </Link>
              <Link href={"/account?form=signup"}>
                <p className="px-10 py-2 bg-cyan-500 text-white rounded-lg">
                  ثبت نام
                </p>
              </Link>
            </div>
          </div>
        )}
        {status === "authenticated" && (
          <Form
            postId={postId}
            replyTo={replyTo}
            setReplyTo={setReplyTo}
            userData={data.user.email}
            firstComment={!comments.length}
            textRef={textRef}
            formRef={formRef}
          />
        )}
      </div>

      <p className="text-xl">
        <span>{numberOfComments}</span>
        <span> نظرات برای </span>
        <span className="font-bold"> {title} </span>
        <span>ثبت شده</span>
      </p>
      {!!numberOfComments && (
        <CommentsList
          comments={comments}
          replyTo={replyTo}
          setReplyTo={setReplyTo}
          onTextFocus={focusOnText}
        />
      )}
      {!numberOfComments && (
        <div>
          <p className="text-xl text-center">اولین نظر را شما بدهید</p>
        </div>
      )}
    </div>
  );
};

export default Reviws;
