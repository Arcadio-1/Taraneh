import React from "react";

const FormItem = (props) => {
  const { label, clsName, htmlId, inputType } = props;
  return (
    <div className={`FormItem ${clsName && clsName}`}>
      <label htmlFor={htmlId} className="FormItem-label">
        {label}
      </label>
      <input className="FormItem-input" id={htmlId} type={inputType} />
    </div>
  );
};

export default FormItem;
