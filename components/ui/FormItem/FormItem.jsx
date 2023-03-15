import React from "react";

const FormItem = ({
  label,
  clsName,
  htmlId,
  inputType,
  inputCls,
  isValid,
  children,
  value,
  onBlur,
  onChange,
  errorMsg,
  error,
}) => {
  // const { label, clsName, htmlId, inputType, inputCls } = props;
  // let clsStatus;
  // if (status === "error") {
  //   clsStatus = "FormItem-error";
  // }
  // if (status === "success") {
  //   clsStatus = "FormItem-error";
  // }
  // if (status === "pening") {
  //   clsStatus = "FormItem-pending";
  // }
  return (
    <div className={`FormItem ${clsName ? clsName : ""} ${value && "mt-5"}`}>
      <div className="FormItem-container">
        <label
          htmlFor={htmlId}
          className={`FormItem-icon ${isValid ? "validIcons" : ""}`}
        >
          {children}
        </label>
        <label
          htmlFor={htmlId}
          className={`FormItem-label  ${value && "labelUper"}`}
        >
          {label}
        </label>
        <input
          required
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          className={`FormItem-input ${inputCls}`}
          id={htmlId}
          type={inputType}
        />
      </div>

      {error && (
        <label
          htmlFor={htmlId}
          className="FormItem-errorMsg"
        >{`${errorMsg}`}</label>
      )}
    </div>
  );
};

export default FormItem;
