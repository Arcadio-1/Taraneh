import React from "react";
import WeightIcon from "../../../../../../../ui/Icons/weight";

const Weight = ({ availableWeights, weightAlert, dispatchWeight }) => {
  // const dispatchWeight = useDispatch();
  return (
    <div className="productDetails-form-weight">
      <div className="productDetails-form-weight-container">
        <label className="productDetails-form-weight-title">
          <WeightIcon />
          وزن بسته :
        </label>
        <ul className="productDetails-form-weight-list">
          {availableWeights.map((item, index) => {
            return (
              <li className="productDetails-form-weight-item" key={index}>
                <label htmlFor={item} className="flex">
                  <input
                    value={item}
                    onChange={(e) => {
                      const value = +e.target.value;
                      dispatchWeight({ type: "weight", weight: value });
                    }}
                    type="radio"
                    name="weight"
                    id={item}
                    className="ml-1"
                  />
                  <p>
                    <span className="productDetails-form-weight-item-weight">
                      {item}
                    </span>
                    <span className=""> گرمی</span>
                  </p>
                </label>
              </li>
            );
          })}
        </ul>
      </div>

      {weightAlert && (
        <p className="productDetails-form-alert">
          لطفا وزن بسته مورد نظرتان را انتخاب کنید!
        </p>
      )}
    </div>
  );
};

export default Weight;
