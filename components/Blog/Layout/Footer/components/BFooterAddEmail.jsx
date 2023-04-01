import React from "react";

const BFooterAddEmail = () => {
  return (
    <div className="BFooter-newsLeter">
      <form className="BFooter-newsLeter-form">
        <input
          className="BFooter-newsLeter-form-input"
          type="email"
          placeholder="آدرس ایمیل خود را وارد کنید"
          required
        />
        <button className="BFooter-newsLeter-form-button">عضویت</button>
      </form>
    </div>
  );
};

export default BFooterAddEmail;
