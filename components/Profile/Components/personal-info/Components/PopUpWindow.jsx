import React from "react";
import CloseIcon from "../../../../ui/Icons/CloseIcon";
const PopUpWindow = ({
  title,
  actionTitle,
  children,
  actionFn,
  closeWindow,
  isValid,
}) => {
  return (
    <div className="personalInfo-popupWindow">
      <div className="personalInfo-popupWindow-header">
        <h2 className="personalInfo-popupWindow-header-title">{title}</h2>
        <button onClick={closeWindow}>
          <CloseIcon />
        </button>
      </div>
      <div className="personalInfo-popupWindow-container">{children}</div>
      <div className="personalInfo-popupWindow-action">
        <button
          disabled={!isValid}
          className={`${isValid ? "bg-red-500" : "bg-gray-300"}`}
          onClick={actionFn}
        >
          {actionTitle}
        </button>
      </div>
    </div>
  );
};

export default PopUpWindow;
