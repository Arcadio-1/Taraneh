import React from "react";
import Link from "next/link";
import FormItem from "../ui/FormItem/FormItem";

const LoginForm = () => {
  return (
    <div className="account">
      <form className="Form">
        <FormItem
          label="ایمیل / شماره موبایل"
          inputType="text"
          htmlId="username"
        />
        <FormItem label="رمز عبور" inputType="password" htmlId="password" />
        <div className="Form-action">
          <button>ورود</button>
        </div>
        <div className="Form-link">
          <Link href="/forgetpass">فراموشی رمز عبور</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
