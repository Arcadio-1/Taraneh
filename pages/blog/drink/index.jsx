import React, { Fragment } from "react";
import BlogSub from "../../../components/Blog/BlogSubs/BlogSub";
import Head from "next/head";
const index = () => {
  return (
    <Fragment>
      <Head>
        <title>مجله کافه ترانه | نوشیدنی ها</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={"مجله خبری و سرگرمی کافه ترانه"} />
        <meta charset="utf-8" />
      </Head>
      <BlogSub />
    </Fragment>
  );
};

export default index;
