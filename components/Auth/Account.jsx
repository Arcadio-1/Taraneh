import React, { useState } from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useRouter } from "next/router";
const Account = ({ currentPage }) => {
  const router = useRouter();
  const { query } = router;
  const currentForm = query.form;
  return (
    <div className="account">
      <ul className="account-nav">
        <li
          className={`account-nav-item ${
            currentForm === "signup" && "selectedNavItem"
          }`}
        >
          <Link href={"?form=signup"}>ثبت نام</Link>
        </li>
        <li
          className={`account-nav-item ${
            (!currentForm || currentForm === "login") && "selectedNavItem"
          }`}
        >
          <Link href={"?form=login"}>ورود</Link>
        </li>
      </ul>
      {(!currentForm || currentForm === "login") && (
        <LoginForm currentPage={currentPage} />
      )}
      {currentForm === "signup" && <SignupForm currentPage={currentPage} />}
    </div>
  );
};

export default Account;
