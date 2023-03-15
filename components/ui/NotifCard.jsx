import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store/ui/uiSlice";
import CloseIcon from "./Icons/CloseIcon";
import Modal from "../Layout/Module/Modal";
import SuccessIcon from "./Icons/notificationsIcons/SuccessIcon";
import WarningIcon from "./Icons/notificationsIcons/WarningIcon";
import ErrorIcon from "./Icons/notificationsIcons/ErrorIcon";
import InfoIcon from "./Icons/notificationsIcons/InfoIcon";

const NotifCard = (props) => {
  const dispatchNotif = useDispatch();
  const notifState = useSelector((state) => state.ui.sideNotif);

  useEffect(() => {
    if (
      notifState.status === "success" ||
      notifState.status === "error" ||
      notifState.status === "warning"
    ) {
      console.log(notifState.status);
      const clearnotif = setTimeout(() => {
        dispatchNotif(
          uiAction.setSideNotif({
            status: "null",
            title: "null",
            message: "null",
          })
        );
      }, 5000);
      return () => {
        clearTimeout(clearnotif);
      };
    }
  }, [notifState, dispatchNotif]);

  return (
    <Fragment>
      <Modal>
        <div className={`sideNotif sideNotif-${notifState.status}`}>
          <div className="sideNotif-header">
            {notifState.message !== "null" && (
              <Fragment>
                <CloseIcon />
                {notifState.status === "success" && <SuccessIcon />}
                {notifState.status === "warning" && <WarningIcon />}
                {notifState.status === "error" && <ErrorIcon />}
                {notifState.status === "loading" && <InfoIcon />}
              </Fragment>
            )}
          </div>
          <div className="sideNotif-container">
            {notifState.message !== "null" && (
              <p className="sideNotif-message">{notifState.message}</p>
            )}
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default NotifCard;
