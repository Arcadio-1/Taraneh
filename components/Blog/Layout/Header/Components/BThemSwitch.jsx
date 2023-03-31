import React from "react";
import { useDispatch } from "react-redux";
import { blogUiAction } from "../../../../../store/Blog/ui/blogUislice";
import MoonIcon from "../../../../ui/Icons/MoonIcon";
import SunIcon from "../../../../ui/Icons/SunIcon";
const BThemSwitch = () => {
  const dispatchIsDark = useDispatch();
  useDispatch;
  const switchThemHandler = () => {
    dispatchIsDark(blogUiAction.setIsDark());
  };
  return (
    <div className="checker">
      <label htmlFor="cheaker" className="checker-label">
        <input id="cheaker" type="checkbox" onChange={switchThemHandler} />
        <div className="checker-label-slider round">
          <MoonIcon />
          <SunIcon />
        </div>
      </label>
    </div>
  );
};

export default BThemSwitch;
