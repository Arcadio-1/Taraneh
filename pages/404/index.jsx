import React, { Fragment } from "react";
import NotFound from "../../components/ui/notFound/NotFound";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>{`فروشگاه اینترنتی کافه ترانه | 404`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content={`صفحه مورد نظرتان یافت نشد در صورت تمایل به صفحه اصلی هدایت میشوید`}
        />
      </Head>
      <NotFound />
    </Fragment>
  );
};

export default index;
