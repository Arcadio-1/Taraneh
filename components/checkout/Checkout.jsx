import React, { useEffect } from "react";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import EmptyIcon from "../ui/Icons/EmptyIcon";
import FreeShoping from "./components/freeShoping";
import List from "./components/list";
import Coupon from "./components/coupon";
import Actions from "./components/actions";
import TotalCard from "../Shiping/Components/totalCard";
import { useSelector } from "react-redux";
import Empty from "./components/Empty";
import Setup from "../ui/Setup/Setup";
const Checkout = () => {
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  useEffect(() => {
    console.log(cartItemsData);
  }, [cartItemsData]);
  return (
    <div className="checkout">
      <section className="productsPage-breadcrumbs">
        <Breadcrumbs links={[{ link: "chekout", title: "سبد خرید" }]} />
      </section>
      {cartItemsData.length === 0 && (
        <section>
          <Empty />
        </section>
      )}
      {cartItemsData.length > 0 && (
        <section>
          <Setup selected={"chekout"} />
          <FreeShoping />
          <div className="flex items-center justify-between gap-5 max-lg:flex-col-reverse max-lg:items-start">
            <div className="w-full max-lg:w-full">
              <List />
              <div className="flex items-center justify-between mt-5">
                {/* <Coupon /> */}
                {/* <Actions /> */}
              </div>
            </div>
            {/* <div className="w-3/12 max-lg:mt-5">
              <TotalCard />
            </div> */}
          </div>
        </section>
      )}
    </div>
  );
};

export default Checkout;
