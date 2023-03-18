import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
// import "./multiRangeSlider.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);

  // const maxPriceToShow = new Intl.NumberFormat("en-US", {
  //   style: "decimal",
  // }).format(max);

  // const minPriceToShow = new Intl.NumberFormat("en-US", {
  //   style: "decimal",
  // }).format(min);

  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);
    // console.log(minPercent, maxPercent);

    if (range.current) {
      range.current.style.right = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--left"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), max - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--right"
        // style={{ zIndex: min > max - 100 && "5" }}
      />

      <div className="slider relative">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__right-value">
          <span>
            {/* {new Intl.NumberFormat("en-US", {
              style: "decimal",
            }).format(minVal)} */}
          </span>
          <span> ارزانترین </span>
        </div>
        <div className="slider__left-value">
          {/* <span>
            {new Intl.NumberFormat("en-US", {
              style: "decimal",
            }).format(maxVal)}
          </span> */}
          <span>گرانترین</span>
        </div>
        <div className="rangeSlider-container">
          <div className="rangeSlider">
            <label className="rangeSlider-label">قیمت:</label>
            <div className="rangeSlider-section">
              <span className="rangeSlider-valueHeader">از</span>
              <span className="rangeSlider-value">
                {new Intl.NumberFormat("en-US", {
                  style: "decimal",
                }).format(minVal)}
              </span>
              <span className="rangeSlider-currency">تومان</span>
            </div>
            <div className="rangeSlider-section">
              <span className="rangeSlider-valueHeader">تا</span>
              <span className="rangeSlider-value">
                {new Intl.NumberFormat("en-US", {
                  style: "decimal",
                }).format(maxVal)}
              </span>
              <span className="rangeSlider-currency">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
