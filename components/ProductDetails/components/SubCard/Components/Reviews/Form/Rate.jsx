import React from "react";
import StarIcon from "../../../../../../ui/Icons/StarIcon";

const Rate = () => {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className=" form-rate mb-3">
      <label className="text-lg">امتیاز شما به محصول</label>
      <div className="flex gap-5 mt-2" onChange={onChangeHandler}>
        <div className="flex form-rate-starG">
          <label htmlFor="radio1" className="flex">
            <input
              type="radio"
              name="radio"
              id="radio1"
              className="hidden"
              value={5}
            />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </label>
        </div>
        <div className="flex form-rate-starG">
          <label htmlFor="radio2" className="flex">
            <input
              type="radio"
              name="radio"
              id="radio2"
              className="hidden"
              value={4}
            />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </label>
        </div>
        <div className="flex form-rate-starG">
          <label htmlFor="radio3" className="flex">
            <input
              type="radio"
              name="radio"
              id="radio3"
              className="hidden"
              value={3}
            />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </label>
        </div>
        <div className="flex form-rate-starG">
          <label htmlFor="radio4" className="flex">
            <input
              type="radio"
              name="radio"
              id="radio4"
              className="hidden"
              value={2}
            />
            <StarIcon />
            <StarIcon />
          </label>
        </div>
        <div className="flex form-rate-starG">
          <label htmlFor="radio5" className="flex">
            <input
              type="radio"
              name="radio"
              id="radio5"
              className="hidden"
              value={1}
            />
            <StarIcon />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Rate;
