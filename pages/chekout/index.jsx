import React, { Fragment } from "react";
// import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
// import FreeShoping from "../../components/checkout/freeShoping";
// import List from "../../components/checkout/list";
// import Coupon from "../../components/checkout/coupon";
// import Actions from "../../components/checkout/actions";
// import TotalCard from "../../components/checkout/totalCard";
// import Setup from "../../components/checkout/Setup";
// import EmptyIcon from "../../components/ui/Icons/EmptyIcon";
import Head from "next/head";
import Checkout from "../../components/checkout/Checkout";
const index = () => {
  return (
    <Fragment>
      <Head>
        <title>سبد خرید</title>
        <meta name="description" content="مدیریت سبد خرید" />
      </Head>
      <Checkout />
    </Fragment>
  );
};

export default index;
