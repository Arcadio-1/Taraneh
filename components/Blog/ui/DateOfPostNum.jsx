import React from "react";
import ClockIcon from "../../ui/Icons/ClockIcon";

const DateOfPostNum = (props) => {
  let dateOfPost = new Date(props.postDate).toLocaleDateString("fa-IR");
  return (
    <div className="dateOfPost">
      <ClockIcon />
      <span className="dateOfPost-text">{dateOfPost}</span>
    </div>
  );
};

export default DateOfPostNum;
