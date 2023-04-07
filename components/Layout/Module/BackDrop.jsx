import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../store/ui/uiSlice";
const BackDrop = () => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const isShow = useSelector((state) => state.ui.isShowBackDrop);
  const closeHandler = () => {
    dispatch(uiAction.hideBackDrop());
  };

  return mounted ? (
    <Fragment>
      {ReactDOM.createPortal(
        <div
          onClick={closeHandler}
          className={`backDrop transition-all ease-in-out duration-500 ${
            isShow ? "opacity-100 visible" : "opacity-0 invisible "
          }`}
        ></div>,
        document.getElementById("overLay")
      )}
    </Fragment>
  ) : (
    <div></div>
  );
};

export default BackDrop;
