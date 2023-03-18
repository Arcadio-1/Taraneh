import React, { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BackDrop from "./Module/BackDrop";
const Layout = (props) => {
  return (
    <Fragment>
      <BackDrop />
      <Header />
      <main className="MAIN">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
