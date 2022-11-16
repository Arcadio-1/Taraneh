import React from "react";

const FooterIconItem = (props) => {
  const { labelText } = props;
  return (
    <div className="footer-icons-item">
      <div className="footer-icons-item-icon">{props.children}</div>
      <p className="footer-icons-item-label">{labelText}</p>
    </div>
  );
};

export default FooterIconItem;
