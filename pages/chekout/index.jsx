import React from "react";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import FreeShoping from "../../components/checkout/freeShoping";
import List from "../../components/checkout/list";
import Coupon from "../../components/checkout/coupon";
import Actions from "../../components/checkout/actions";
import TotalCard from "../../components/checkout/totalCard";
import Setup from "../../components/checkout/Setup";
const index = () => {
  return (
    <div className="checkout">
      <section className="productsPage-breadcrumbs">
        <Breadcrumbs links={[{ link: "checkout", title: "سبد خرید" }]} />
      </section>
      <section>
        <Setup />
        <FreeShoping />
        <List />
        <Coupon />
        <Actions />
        <TotalCard />
      </section>
    </div>
  );
};

export default index;
