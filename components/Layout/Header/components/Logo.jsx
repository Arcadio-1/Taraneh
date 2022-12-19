import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoIcon from "../../../ui/Icons/LogoIcon";

const Logo = () => {
  return (
    <div className="header-logo">
      <Link href={"/"}>
        {/* <Image
          src={"/image/Tarane-Logo.png"}
          alt="کافه ترانه"
          height={70}
          width={170}
        /> */}
        <LogoIcon />
      </Link>
    </div>
  );
};

export default Logo;
