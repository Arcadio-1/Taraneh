import React, { Fragment, useEffect, useLayoutEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BackDrop from "./Module/BackDrop";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { uiAction } from "../../store/ui/uiSlice";
import BHeader from "../Blog/Layout/Header/Header";
import BFooter from "../Blog/Layout/Footer/Footer";
const Layout = (props) => {
  //////////////
  const isDark = useSelector((state) => state.blogUi.isDark);
  const subclass = useSelector((state) => state.blogUi.subsClass);
  const windowWidth = useSelector((state) => state.ui.windowWidth);
  const mainClass = isDark && subclass === "" ? "dark" : "";
  const router = useRouter();
  const sizeDispatch = useDispatch();
  const dispatchIsBlog = useDispatch();
  const isBlog = useSelector((state) => state.ui.isBlog);
  useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);
  useEffect(() => {
    const blog = router.pathname.includes("/blog");
    dispatchIsBlog(uiAction.setIsBlog(blog));
  }, [dispatchIsBlog, router.pathname]);

  // const windowWidthx = window.innerWidth;

  // console.log(windowWidthx);
  // useEffect(() => {
  //   console.log(windowWidthx);
  // }, [windowWidthx]);

  // useLayoutEffect(() => {
  //   console.log(window.innerWidth);
  //   function updateSize() {
  //     sizeDispatch(uiAction.setWindowWidth(window.innerWidth));
  //   }
  //   window.addEventListener("resize", updateSize);
  //   updateSize();
  //   return () => window.removeEventListener("resize", updateSize);
  // }, [sizeDispatch]);

  useEffect(() => {
    console.log(window.innerWidth);
    function updateSize() {
      sizeDispatch(uiAction.setWindowWidth(window.innerWidth));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [sizeDispatch]);
  // useLayoutEffect(() => {
  //   console.log(window.innerWidth);
  // }, []);

  return (
    <Fragment>
      {!isBlog && (
        <Fragment>
          <BackDrop />
          <Header />
          <main className="MAIN">{props.children}</main>
          <Footer />
        </Fragment>
      )}
      {isBlog && (
        <Fragment>
          <BackDrop />
          <BHeader />
          <main className={`MAIN-Blog ${subclass} ${mainClass}`}>
            {props.children}
          </main>
          <BFooter />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Layout;
