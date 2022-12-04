import React, { useState } from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const isLogintogler = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div className="account">
      {isLogin && <LoginForm onSignup={isLogintogler} />}
      {!isLogin && <SignupForm onSignup={isLogintogler} />}
    </div>
  );
};

export default Account;
