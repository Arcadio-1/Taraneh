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
            <span>/</span>
            <span>ثبت نام</span>
          </Link>
        </div>
      )}
      {status === "authenticated" && (
        <div
          className="header-log-signout"
          onClick={() => {
            signOut();
          }}
        >
          <LogIcon />
          <span>خروج</span>
        </div>
      )}
    </div>
  );
};

export default Log;
