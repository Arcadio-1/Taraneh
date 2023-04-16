import Layout from "../components/Layout/Layout";
// import "../styles/globals.css";
import "../styles/main.scss";
import { Provider } from "react-redux";
import store from "../store/store";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpiner/loadingSpiner";
import "../components/Products/SideMenu/multuRangeSlider/multiRangeSlider.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const handleStart = (url) => url !== router.asPath && setLoading(true);
  //   const handleComplete = (url) => url === router.asPath && setLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // });

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register(
            "/servic_worker.js",
            {
              scope: "/",
            }
          );
          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
          } else if (registration.active) {
            console.log("Service worker active");
          }
        } catch (error) {
          console.error(`Registration failed with ${error}`);
        }
      }
    };

    // registerServiceWorker();
  }, []);

  // return (
  //   <Provider store={store}>
  //     <SessionProvider session={pageProps.session}>
  //       <Layout>
  //         <div id="overLay"></div>
  //         {!loading && <Component {...pageProps} />}
  //         {loading && (
  //           <div className="w-full h-28 my-10">
  //             <LoadingSpinner text={"در حال بارگزاری"} />
  //           </div>
  //         )}
  //       </Layout>
  //     </SessionProvider>
  //   </Provider>
  // );
  return (
    <Fragment>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="کافه ترانه" content="فروشگاه اینترنتی کافه ترانه"></meta>
      </Head>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <div id="overLay"></div>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
