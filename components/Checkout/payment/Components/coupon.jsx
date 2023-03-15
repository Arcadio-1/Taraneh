import React from "react";

const Coupon = () => {
  return (
    <div className="coupon">
      <h2 className="coupon-title">کد تخفیف</h2>
      <div className="coupon-input">
        <input type="text" placeholder="کد تخفیف" />
        <button>اعمال کد تخفیف</button>
      </div>
    </div>
  );
};

export default Coupon;
