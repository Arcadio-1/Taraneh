import Head from 'next/head';
import React, { Fragment } from 'react'
import NoConnection from '../components/ui/noConnection/NoConnection';

const Offline = () => {
  return (
    <Fragment>
      <Head>
        <title>{`فروشگاه اینترنتی کافه ترانه | خطا در اتصال`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content={`خطا در اتصال در صورت تمایل به صفحه اصلی هدایت میشوید`}
        />
      </Head>
      <NoConnection />
    </Fragment>
  );
}

export default Offline