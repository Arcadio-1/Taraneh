import React from "react";
import CloseIcon from "../../../../ui/Icons/CloseIcon";

const BsmSearch = (props) => {
  return (
    <div className="BSearch-smInput">
      <button
        className="BSearch-smInput-closeBtn"
        onClick={() => props.onToggleMiniSearch()}
      >
        <CloseIcon />
      </button>
      <input
        type="text"
        className="BSearch-smInput-input"
        placeholder="جستجو در مجله کافه ترانه..."
      />
      <button className="BSearch-smInput-searchBtn">جستجو</button>
    </div>
  );
};

export default BsmSearch;
