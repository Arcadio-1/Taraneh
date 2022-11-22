import React from "react";
import LogIcon from "../../../ui/Icons/LogIcon";
import Link from "next/link";
const Log = () => {
  return (
    <div className="header-log">
      <Link href="/account">
        <LogIcon />
        <span>ورود</span>
        <span>/</span>
        <span>ثبت نام</span>
      </Link>
    </div>
  );
};

export default Log;
