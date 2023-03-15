import React from "react";

const PaymentMethod = () => {
  return (
    <div className="paymentMethod">
      <h2 className="title">روش پرداخت</h2>
      <ul className="list">
        <li className="item">
          <input id="online" type={"radio"} name={"paymentMethod"} />
          <label htmlFor="online">پرداخت آنلاین</label>
        </li>
        <li className="item">
          <input id="inPerson" type={"radio"} name={"paymentMethod"} />
          <label htmlFor="inPerson">پرداخت هنگام دریافت</label>
        </li>
      </ul>
    </div>
  );
};

export default PaymentMethod;
