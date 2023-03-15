import React from "react";
import { useSelector } from "react-redux";
import Item from "./item";
import Total from "./Total";
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
          <Total />
        </tbody>
      </table>
    </div>
  );
};

export default List;
