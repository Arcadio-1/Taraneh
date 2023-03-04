import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { priceFormat } from "../../../lib/utilFunctions";
import TomanIcon from "../../ui/Icons/tomanIcon";
import Actions from "./actions";
import Coupon from "./coupon";
import Item from "./item";
const List = () => {
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);

  return (
    <div className="list">
      <table className="table">
        <thead>
          <tr className="">
            <th className="max-md:hidden"></th>
            <th> محصول</th>
            <th className="max-sm:hidden">قیمت</th>
            <th className="max-sm:hidden">جزئیات</th>
            <th className="max-sm:hidden">تعداد</th>
            <th>تخفیف</th>
            <th>قیمت کل</th>
            {/* <th></th> */}
            {/* <th></th> */}
            <th className="max-sm:hidden"></th>
          </tr>
        </thead>
        <tbody className="">
          {cartItemsData &&
            cartItemsData.length > 0 &&
            cartItemsData.map((item) => {
              return <Item key={item._id} item={item} />;
            })}
          <tr>
            <th className="text-xl">مجموع :</th>
            <th className="max-md:hidden"></th>
            <th className="max-sm:hidden"></th>
            <th className="max-sm:hidden"></th>
            <th className="fnNum text-xl max-sm:hidden"> عدد 10</th>
            <th className="hidden max-sm:hidden"></th>
            <th className="fnNum text-xl">
              {priceFormat(1526000)}
              <TomanIcon />
            </th>
            <th className="fnNum text-xl">
              {priceFormat(1526000)}
              <TomanIcon />
            </th>
            <th>
              <Actions />
            </th>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-evenly gap-5 mt-10">
        {/* <Coupon /> */}
        <div className="">
          <Link href={"/shiping"}>
            <button
              className={
                "bg-green-600 flex items-center py-1 px-5 text-2xl rounded-lg text-white bottom-5"
              }
            >
              ادامه
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default List;
