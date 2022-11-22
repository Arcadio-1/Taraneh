import React, { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="MAIN">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
