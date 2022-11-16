import React from "react";
import Link from "next/link";
const NavLinks = () => {
  return (
    <ul className="header-navLinks">
      <li className="header-navLinks-item">
        <Link href={"/"}> صفحه نخست</Link>
      </li>
      <li className="header-navLinks-item">محصولات</li>
      <li className="header-navLinks-item">اخبار و آموزش</li>
      <li className="header-navLinks-item">تعمیرات</li>
    </ul>
  );
};

export default NavLinks;
