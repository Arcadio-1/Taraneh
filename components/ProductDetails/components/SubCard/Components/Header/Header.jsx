import Link from "next/link";
import React from "react";

const Header = (props) => {
  const { changeTabHandler, tab } = props;
  const activeTab = {
    backgroundColor: "red",
  };
  const deActiveTab = {
    backgroundColor: "green",
  };
  return (
    <ul className={`flex gap-5 text-xl border-b-2 py-4 mb-4`}>
      <li
        className={`cursor-pointer rounded-md px-3 py-1  ${
          tab === "description" ? "text-green-500 bg-gray-100" : "text-gray-600"
        }`}
        onClick={() => {
          changeTabHandler("description");
        }}
      >
        <Link href={"#توضیحات"}>توضیحات</Link>
      </li>
      <li
        className={`cursor-pointer rounded-md  px-3 py-1   ${
          tab === "infomation" ? "text-green-500  bg-gray-100" : "text-gray-600"
        }`}
        onClick={() => {
          changeTabHandler("infomation");
        }}
      >
        مشخصات
      </li>
      <li
        className={`cursor-pointer rounded-md  px-3 py-1  ${
          tab === "reviwe" ? "text-green-500  bg-gray-100" : "text-gray-600"
        }`}
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
