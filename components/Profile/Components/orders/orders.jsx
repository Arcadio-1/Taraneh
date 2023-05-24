import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchIcon from "../../../ui/Icons/SearchIcon";
import BackIcon from "../../../ui/Icons/BackIcon";

const Orders = () => {
  const router = useRouter();
  const [routerContent, setRouterContent] = useState("in-porocess");
  useEffect(() => {
    if (router.query.activeTab) {
      setRouterContent((prev) => {
        return (prev = router.query.activeTab);
      });
    }
  }, [router]);

  const routepuser = (path) => {
    router.push(path);
  };
  return (
    <div className="profile-orders border rounded-xl">
      <div className="flex justify-between py-8 px-5 w-full">
        <div className=" flex items-center">
          <div className="p-1">
            <Link href={"/profile"}>
              <BackIcon />
            </Link>
          </div>
          <h1 className="text-xl">تاریخچه سفارش ها</h1>
        </div>
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className="">
        <ul className=" border-b border-gray-200 pb-1 flex gap-1 text-lg ">
          <li
            className={`relative py-2 px-6 ${
              routerContent === "in-porocess" ? "text-red-600" : ""
            }`}
            onClick={() => {
              routepuser("?activeTab=in-porocess");
            }}
          >
            <Link href={"?activeTab=in-porocess"} as={"?activeTab=in-porocess"}>
              <div>
                <span>جاری</span>
              </div>
              <div
                className={`ui-tabUnderline bottom-[calc(-2px)] ${
                  routerContent === "in-porocess" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </Link>
          </li>
          <li
            className={`relative py-2 px-6 ${
              routerContent === "sent" ? "text-red-600" : ""
            }`}
          >
            <Link href={"?activeTab=sent"}>
              <div className={`flex gap-1 `}>
                <span>تحویل شده</span>
                <p
                  className={`fnNum text-white py-[1px] px-2 rounded-md ${
                    routerContent === "sent" ? "bg-red-500" : "bg-gray-400"
                  }`}
                >
                  28
                </p>
              </div>
              <div
                className={`ui-tabUnderline bottom-[calc(-2px)] ${
                  routerContent === "sent" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </Link>
          </li>
          <li
            className={`relative py-2 px-6 ${
              routerContent === "returned" ? "text-red-600" : ""
            }`}
          >
            <Link href={"?activeTab=returned"}>
              <div className={`flex gap-1 `}>
                <span>مرجوع شده</span>
                <p
                  className={`fnNum text-white py-[1px] px-2 rounded-md ${
                    routerContent === "returned" ? "bg-red-500" : "bg-gray-400"
                  }`}
                >
                  7
                </p>
              </div>
              <div
                className={`ui-tabUnderline bottom-[calc(-2px)] ${
                  routerContent === "returned" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </Link>
          </li>
          <li
            className={`relative py-2 px-6 ${
              routerContent === "cancle" ? "text-red-600" : ""
            }`}
          >
            <Link href={"?activeTab=cancle"}>
              <div className={`flex gap-1 `}>
                <span>لغو شده</span>
                <p
                  className={`fnNum text-white py-[1px] px-2 rounded-md ${
                    routerContent === "cancle" ? "bg-red-500" : "bg-gray-400"
                  }`}
                >
                  10
                </p>
              </div>
              <div
                className={`ui-tabUnderline bottom-[calc(-2px)] ${
                  routerContent === "cancle" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </Link>
          </li>
        </ul>
        <section className="py-24 flex items-center justify-center">
          <div>
            <Image
              src={"/image/ui/profile/order-empty.svg"}
              height={100}
              width={100}
              alt="empty"
            />
            <p>هنوز هیچ سفارشی ندارید</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Orders;
