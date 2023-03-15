import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../store/ui/uiSlice";

const BackDrop = ({ closeFn }) => {
  const isShow = useSelector((state) => state.ui.isShowBackDrop);

  return (
    <div
      onClick={closeFn}
      className={`backDrop transition-all ease-in-out duration-500 ${
        isShow ? "opacity-100 visible" : "opacity-0 invisible "
      }`}
    ></div>
  );
};

export default BackDrop;
