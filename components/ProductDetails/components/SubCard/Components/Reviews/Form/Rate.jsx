import React, { useEffect } from "react";
import StarIcon from "../../../../../../ui/Icons/StarIcon";

const Rate = ({ rateValue, rateError, onChange }) => {
  return (
    <div className=" form-rate mb-3">
      <label className="text-lg">امتیاز شما به محصول</label>
      <div className="flex gap-5 mt-2">
        <div className="flex form-rate-starG">
          <label
            htmlFor="radio1"
            className="flex"
            onClick={() => onChange(null, 5)}
          >
            <input type="radio" name="radio" id="radio1" className="hidden" />
            <StarIcon isOn={rateValue === 5} />
            <StarIcon isOn={rateValue === 5} />
            <StarIcon isOn={rateValue === 5} />
            <StarIcon isOn={rateValue === 5} />
            <StarIcon isOn={rateValue === 5} />
          </label>
        </div>
        <div className="flex form-rate-starG">
          <label
            htmlFor="radio2"
            className="flex"
            onClick={() => onChange(null, 4)}
          >
            <input type="radio" name="radio" id="radio2" className="hidden" />
            <StarIcon isOn={rateValue === 4} />
            <StarIcon isOn={rateValue === 4} />
            <StarIcon isOn={rateValue === 4} />
            <StarIcon isOn={rateValue === 4} />
          </label>
        </div>
        <div className="flex form-rate-starG">
          <label
            htmlFor="radio3"
            className="flex"
            onClick={() => onChange(null, 3)}
          >
            <input type="radio" name="radio" id="radio3" className="hidden" />
            <StarIcon isOn={rateValue === 3} />
            <StarIcon isOn={rateValue === 3} />
            <StarIcon isOn={rateValue === 3} />
          </label>
        </div>
        <div className="flex form-rate-starG">
          <label
            htmlFor="radio4"
            className="flex"
            onClick={() => onChange(null, 2)}
          >
            <input type="radio" name="radio" id="radio4" className="hidden" />
            <StarIcon isOn={rateValue === 2} />
            <StarIcon isOn={rateValue === 2} />
          </label>
        </div>
        <div className="flex form-rate-starG">
          <label
            htmlFor="radio5"
            className="flex"
            onClick={() => onChange(null, 1)}
          >
            <input type="radio" name="radio" id="radio5" className="hidden" />
            <StarIcon isOn={rateValue === 1} />
          </label>
        </div>
      </div>
      {rateError && (
        <p className="mt-2" style={{ color: "#e76f51" }}>
          لطفا امتیازتان به محصول را وارد کنید
        </p>
      )}
    </div>
  );
};

export default Rate;
