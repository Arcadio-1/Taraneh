import React, { Fragment } from "react";
import Head from "next/head";
import Cart from "../../../components/Checkout/Cart/Cart";
const index = () => {
  return (
    <Fragment>
      <Head>
        <title>سبد خرید</title>
        <meta name="description" content="مدیریت سبد خرید" />
      </Head>
      <Cart />
    </Fragment>
  );
};

export default index;
