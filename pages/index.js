import { Fragment, useEffect } from "react";
import Hero from "../components/Home/Hero/Hero";
import TopRate from "../components/Home/TopRate/TopRate";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../store/ManageData/GetData/GetDataAction";
import Head from "next/head";
useEffect;
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <Fragment>
      <Head>
        <title>فروشگاه اینترنتی کافه ترانه</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="صفحه نخست فروشگاه اینترنتی کافه ترانه"
        />
      </Head>
      <div>
        <Hero />
        <TopRate />
      </div>
    </Fragment>
  );
}
