import React, { Fragment } from "react";
import NotFound from "../../components/ui/notFound/NotFound";
import Head from "next/head";
import AccessDenied from "../../components/ui/accessDenied/AccessDenied";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>{`فروشگاه اینترنتی کافه ترانه | صفحه غیر مجاز`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content={`شما مجاز به دسترسی به این صفحه نیستید`}
        />
      </Head>
      <AccessDenied />
    </Fragment>
  );
};

export default index;
