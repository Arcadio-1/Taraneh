import React from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../store/ui/uiSlice";

const BackDrop = () => {
  const CloseBackDropDispatch = useDispatch();
  const closeModalHandler = () => {
    CloseBackDropDispatch(uiAction.closeBackDrop());
  };
  return <div onClick={closeModalHandler} className="backDrop"></div>;
};

export default BackDrop;
