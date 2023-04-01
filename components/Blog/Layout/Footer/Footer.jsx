import React from "react";
import BFooterAddEmail from "./components/BFooterAddEmail";
import BFooterCopyWrite from "./components/BFooterCopyright";
import BFooterNavLinks from "./components/BFooterNavLinks";
import BFooterSocialIcons from "./components/BFooterSocialIcons";
import { useSelector } from "react-redux";
const BFooter = () => {
  const isDark = useSelector((state) => state.blogUi.isDark);
  const subClass = useSelector((state) => state.blogUi.subsClass);
  const footerClass = isDark && subClass === "" ? "dark" : "";
  return (
    <footer className={`BFooter ${footerClass} ${subClass}`}>
      <div className="BFooter-container">
        <BFooterSocialIcons />
        <BFooterAddEmail />
        <BFooterNavLinks />
        <BFooterCopyWrite />
      </div>
    </footer>
  );
};

export default BFooter;
