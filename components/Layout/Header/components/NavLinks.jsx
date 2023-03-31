import React from "react";
import Link from "next/link";
import BlogIcon from "../../../ui/Icons/NavIcons/BlogIcon";
import CoffeeMachine from "../../../ui/Icons/CoffeeMachine";
const NavLinks = () => {
  return (
    <ul className="header-navLinks">
      <li className="header-navLinks-item">
        <Link href={"/"}> صفحه نخست</Link>
      </li>
      <li className="header-navLinks-item">
        <Link href={"/products"}> محصولات</Link>
      </li>
      <li className="header-navLinks-item">
        <Link href={"/blog"}>
          <BlogIcon />
          اخبار و آموزش
        </Link>
      </li>
      <li className="header-navLinks-item">
        <Link href={"/"}>
          <CoffeeMachine /> تعمیرات
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
