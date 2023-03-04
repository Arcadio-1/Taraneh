import Link from "next/link";
import React from "react";
import EmptyIcon from "../../ui/Icons/EmptyIcon";

const Empty = () => {
  return (
    <div className="flex items-center justify-center m-5">
      <div className="flex flex-col items-center max-w-xl border-2 border-cyan-100 p-10 rounded-lg">
        <div className="bg-cyan-100 rounded-full flex p-10 w-auto">
          <EmptyIcon />
        </div>
        <p className="mt-5 text-2xl"> سبد خرید شما خالی میباشد</p>
        <div className="bg-cyan-500 text-white mt-5 py-1 px-10 rounded-lg text-xl">
          <Link href={"/products"}>مشاهده لیست محصولات</Link>
        </div>
      </div>
    </div>
  );
};

export default Empty;
