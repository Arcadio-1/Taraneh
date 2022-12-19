import React from "react";
import MultiRangeSlider from "./multuRangeSlider/rangeSlider";

const FilterByPrice = ({ products }) => {
  const prices = products.map((product) => product.price.value);
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);
  // console.log(minPrice);
  return (
    <div className="filterByPrice">
      <h3 className="filterByPrice-title">محدوده قیمت</h3>
      <MultiRangeSlider
        min={minPrice}
        max={maxPrice}
        onChange={({ min, max }) => {
          // console.log("bitter", min, max);
          // console.log(sensoryState);
          // dispatchSensory({ type: "bitter", min: min, max: max });
        }}
      />
    </div>
  );
};

export default FilterByPrice;
