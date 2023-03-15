import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import SearchIcon from "../../../ui/Icons/SearchIcon";

const Orders = () => {
  const router = useRouter();
  const routepuser = (path) => {
    router.push(path);
  };
  return (
    <div>
      <div>
        <h1>تاریخچه سفارش ها</h1>
        <SearchIcon />
      </div>
      <div>
        <ul>
          <li
            onClick={() => {
              routepuser("?active-tab=in-porocess");
            }}
          >
            <Link
              href={"?active-tab=in-porocess"}
              as={"?active-tab=in-porocess"}
            >
              جاری
            </Link>
          </li>
          <li>
            <Link href={"?active-tab=sent"}>تحویل شده</Link>
          </li>
          <li>
            <Link href={"?active-tab=returned"}>مرجوع شده</Link>
          </li>
          <li>
            <Link href={"?active-tab=cancle"}>لغو شده</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Orders;
