import React from "react";
import TickIcon from "../../../../../ui/Icons/TickIcon";

const CheckList = (props) => {
  const { producingCountry, packingCountry, coffeeType, taste } = props;
  return (
    <div className="productDetails-content-checkList">
      <ul className="productDetails-content-checkList-list">
        <li className="productDetails-content-checkList-item">
          <TickIcon />
          <label>از کشور : </label>
          <span>{producingCountry}</span>
        </li>
        <li className="productDetails-content-checkList-item">
          <TickIcon />
          <label>بسته بندی : </label>
          <span>{packingCountry}</span>
        </li>
        {coffeeType !== "none" && (
          <li className="productDetails-content-checkList-item">
            <TickIcon />
            <label>نژاد : </label>
            {coffeeType === "arabica" && <span>عربیکا</span>}
            {coffeeType === "robusta" && <span>روبوستا</span>}
            {coffeeType === "mix" && <span>میکس</span>}
          </li>
        )}
        {taste.robusta && (
          <li className="productDetails-content-checkList-item">
            <TickIcon />
            <label>روبوستا : </label>
            <p>
              <span>{taste.robusta}</span>
              درصد
            </p>
          </li>
        )}
        {taste.arabica && (
          <li className="productDetails-content-checkList-item">
            <TickIcon />
            <label>عربیکا : </label>
            <p>
              <span>{taste.arabica}</span>
              درصد
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CheckList;
