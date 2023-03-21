import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MyList = () => {
  const router = useRouter();
  const [routerContent, setRouterContent] = useState("favorites");
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
        <h1 className="text-xl">لیست ها</h1>
        {/* <div>
          <SearchIcon />
        </div> */}
      </div>
      <div className="">
        <ul className=" border-b border-gray-200 pb-1 flex gap-1 text-lg ">
          <li
            className={`relative py-2 px-6 ${
              routerContent === "favorites" ? "text-red-600" : ""
            }`}
            onClick={() => {
              routepuser("?activeTab=favorites");
            }}
          >
            <Link href={"?activeTab=favorites"} as={"?activeTab=favorites"}>
              <div>
                <span>لیست علاقه مندی</span>
              </div>
              <div
                className={`ui-tabUnderline bottom-[calc(-2px)] ${
                  routerContent === "favorites" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </Link>
          </li>
          <li
            className={`relative py-2 px-6 ${
              routerContent === "public" ? "text-red-600" : ""
            }`}
          >
            <Link href={"?activeTab=public"}>
              <div className={`flex gap-1 `}>
                <span>لیست عمومی</span>
                <p
                  className={`fnNum text-white py-[1px] px-2 rounded-md ${
                    routerContent === "public" ? "bg-red-500" : "bg-gray-400"
                  }`}
                >
                  28
                </p>
              </div>
              <div
                className={`ui-tabUnderline bottom-[calc(-2px)] ${
                  routerContent === "public" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </Link>
          </li>
          <li
            className={`relative py-2 px-6 ${
              routerContent === "announcements" ? "text-red-600" : ""
            }`}
          >
            <Link href={"?activeTab=announcements"}>
              <div className={`flex gap-1 `}>
                <span>اطلاع رسانی</span>
                <p
                  className={`fnNum text-white py-[1px] px-2 rounded-md ${
                    routerContent === "announcements"
                      ? "bg-red-500"
                      : "bg-gray-400"
                  }`}
                >
                  7
                </p>
              </div>
              <div
                className={`ui-tabUnderline bottom-[calc(-2px)] ${
                  routerContent === "announcements"
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              ></div>
            </Link>
          </li>
        </ul>
        <section className="py-24 flex items-center justify-center flex-col">
          <Image
            src={"/image/ui/profile/favorites-list-empty.svg"}
            height={150}
            width={150}
            alt="empty"
          />
          <p className="text-xl">لیست علاقه مندی های شما خالی است.</p>
        </section>
      </div>
    </div>
  );
};

export default MyList;
