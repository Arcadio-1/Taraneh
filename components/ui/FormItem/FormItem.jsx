import React from "react";

const FormItem = (props) => {
  const { label, clsName, htmlId, inputType } = props;
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
    <div className={`FormItem ${clsName ? clsName : ""}`}>
      <div className="FormItem-container">
        <div className={`FormItem-icon ${props.isValid ? "validIcons" : ""}`}>
          {props.children}
        </div>
        <label
          htmlFor={htmlId}
          className={`FormItem-label  ${props.value && "labelUper"}`}
        >
          {label}
        </label>
        <input
          required
          value={props.value}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className="FormItem-input"
          id={htmlId}
          type={inputType}
        />
      </div>

      {props.error && (
        <p className="FormItem-errorMsg">{`${props.errorMsg}`}</p>
      )}
    </div>
  );
};

export default FormItem;
