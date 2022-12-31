import React, { useState } from "react";
import Amount from "./Amount";

const OrderForm = (props) => {
  const { status } = props;

  return (
    <div className="productDetails-content-ordering">
      <form className="productDetails-content-ordering-form">
        <Amount status={status} />
        <button className="productDetails-content-ordering-submitBtn">
          افزودن به سبد خرید
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
