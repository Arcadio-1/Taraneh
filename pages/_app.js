import Layout from "../components/Layout/Layout";
// import "../styles/globals.css";
import "../styles/main.scss";
import { Provider } from "react-redux";
import store from "../store/store";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <div id="overLay"></div>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
