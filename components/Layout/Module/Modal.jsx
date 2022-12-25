import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../store/ui/uiSlice";
import BackDrop from "./BackDrop";
const Modal = (props) => {
  const isShowBackDrop = useSelector((state) => state.ui.isShowBackDrop);
  const [mounted, setMounted] = useState(false);
  let overLay;
  const dispatch = useDispatch();
  const windowWidth = useSelector((state) => state.ui.windowWidth);

  useLayoutEffect(() => {
    function updateSize() {
      dispatch(uiAction.setWindowWidth(window.innerWidth));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [dispatch]);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (mounted) {
    overLay = document.getElementById("overLay");
  }

  if (windowWidth > 768) {
    dispatch(uiAction.closeModal());
  }

  return mounted ? (
    <Fragment>
      {ReactDOM.createPortal(props.children, overLay)}
      {isShowBackDrop && ReactDOM.createPortal(<BackDrop />, overLay)}
    </Fragment>
  ) : null;
};

export default Modal;
