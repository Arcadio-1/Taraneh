import React, { Fragment } from "react";
import Home from "../../components/Blog/Home/Home";
import Head from "next/head";
const index = () => {
  return (
    <Fragment>
      <Head>
        <title>مجله کافه ترانه</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={"مجله خبری و سرگرمی کافه ترانه"} />
        <meta charset="utf-8" />
      </Head>
      <Home />
    </Fragment>
  );
};

export default index;
