import React from "react";
import CopyrightIcon from "../../../../ui/Icons/CopyrightIcon";

const BFooterCopyright = () => {
  return (
    <div className="BFooter-copyright">
      <CopyrightIcon />
      <span className="BFooter-copyright-text">
        هر گونه کپی‌برداری جزئی یا کلی از مطالب کافه ترانه بدون کسب مجوز مکتوب
        ممنوع است. حقوق این سایت به مقام معظم حسین اسکندری تعلق دارد
      </span>
    </div>
  );
};

export default BFooterCopyright;
