import React from "react";
import LogIcon from "../../../ui/Icons/LogIcon";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Log = () => {
  const { data: session, status } = useSession();
  // status === "unauthenticated" && <Log />;

  return (
    <div className="header-log">
      {status === "unauthenticated" && (
        <div className="header-log-signin">
          <Link href="/account">
            <LogIcon />
            <span>ورود</span>
            <span className="hideInMD">/</span>
            <span className="hideInMD">ثبت نام</span>
          </Link>
        </div>
      )}
      {/* {status === "authenticated" && (
        <div
          className="header-log-signout"
          onClick={() => {
            signOut();
          }}
        >
          <LogIcon />
          <span className="header-log-signout-text">خروج</span>
        </div>
      )} */}
    </div>
  );
};

export default Log;
