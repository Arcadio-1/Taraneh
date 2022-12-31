import React, { useState } from "react";
import Minus from "../../../../../../ui/Icons/Minus";
import PlusIcon from "../../../../../../ui/Icons/PlusIcon";
const Amount = () => {
  const [amount, setAmount] = useState(1);
  const amountHandler = (type, e) => {
    e.preventDefault();
    if (type === "plus") {
      setAmount((prev) => prev + 1);
    }
    if (type === "minus") {
      setAmount((prev) => prev - 1);
    }
  };
  return (
    <div className="productDetails-content-ordering-amount">
      <button
        className="productDetails-content-ordering-amount-btn"
        onClick={() => {
          amountHandler("plus");
        }}
      >
        <PlusIcon />
      </button>
      <label className="productDetails-content-ordering-amount-value">
        {amount}
      </label>
      <button
        className="productDetails-content-ordering-amount-btn"
        onClick={() => {
          amountHandler("minus");
        }}
      >
        <Minus />
      </button>
    </div>
  );
};

export default Amount;
