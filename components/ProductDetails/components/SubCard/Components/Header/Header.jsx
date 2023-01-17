import Link from "next/link";
import React from "react";

const Header = (props) => {
  const { changeTabHandler } = props;
  return (
    <ul className="flex gap-5 text-xl border-b-2 py-4 mb-4">
      <li
        className="cursor-pointer "
        onClick={() => {
          changeTabHandler("description");
        }}
      >
        <Link href={"#توضیحات"}>توضیحات</Link>
      </li>
      <li
        className="cursor-pointer "
        onClick={() => {
          changeTabHandler("infomation");
        }}
      >
        مشخصات
      </li>
      <li
        className="cursor-pointer "
        onClick={() => {
          changeTabHandler("reviwe");
        }}
      >
        نظرات و سوالات
      </li>
    </ul>
  );
};

export default Header;
