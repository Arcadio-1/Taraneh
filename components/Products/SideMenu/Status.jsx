import React from "react";

const Status = () => {
  return (
    <div className="checkBoxList">
      <h3 className="checkBoxList-title">وضعیت کالا</h3>
      <ul className="checkBoxList-list">
        <li className="checkBoxList-item">
          <input
            className="checkBoxList-item-input"
            type="checkbox"
            value="Available"
          />
          <label className="checkBoxList-item-label">موجود</label>
        </li>
        <li className="checkBoxList-item">
          <input
            className="checkBoxList-item-input"
            type="checkbox"
            value="Available"
          />
          <label className="checkBoxList-item-label">ناموجود</label>
        </li>
      </ul>
      <div></div>
      <div></div>
    </div>
  );
};

export default Status;
