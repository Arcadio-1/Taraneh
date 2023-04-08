import Layout from "../components/Layout/Layout";
// import "../styles/globals.css";
import "../styles/main.scss";
import { Provider } from "react-redux";
import store from "../store/store";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpiner/loadingSpiner";
import "../components/Products/SideMenu/multuRangeSlider/multiRangeSlider.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  // useEffect(() => {
  //   console.log(loading);
  // }, [loading]);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <div id="overLay"></div>
          {!loading && <Component {...pageProps} />}
          {loading && (
            <div className="w-full h-28 my-10">
              <LoadingSpinner text={"در حال بارگزاری"} />
            </div>
          )}
        </Layout>
      </SessionProvider>
    </Provider>
  );
  // return (
  //   <Provider store={store}>
  //     <SessionProvider session={pageProps.session}>
  //       <Layout>
  //         <div id="overLay"></div>
  //         <Component {...pageProps} />
  //       </Layout>
  //     </SessionProvider>
  //   </Provider>
  // );
}

export default MyApp;
