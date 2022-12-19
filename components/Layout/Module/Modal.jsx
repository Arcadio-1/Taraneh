import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import BackDrop from "./BackDrop";

const Modal = (props) => {
  // const isShowNotif = useSelector((state) => state.ui.isShowNotif);
  const errorBackDrop = false;
  return (
    <Fragment>
      {ReactDOM.createPortal(
        props.children,
        document.getElementById("overLay")
      )}
      {errorBackDrop &&
        ReactDOM.createPortal(<BackDrop />, document.getElementById("overLay"))}
    </Fragment>
  );
};

export default Modal;
