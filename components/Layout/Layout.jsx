import React, { Fragment, useEffect, useLayoutEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BackDrop from "./Module/BackDrop";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { uiAction } from "../../store/ui/uiSlice";
import BHeader from "../Blog/Layout/Header/Header";
import BFooter from "../Blog/Layout/Footer/Footer";
import DHeader from "../dashboard/Components/Header/DHeader";
import DFooter from "../dashboard/Components/footer/DFooter";
import DASide from "../dashboard/Components/aside/DASide";
import DContent from "../dashboard/Components/content/DContent";
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
    const blog = router.pathname.includes("/blog");
    dispatchIsBlog(uiAction.setIsBlog(blog));
    console.log(router.pathname);
  }, [dispatchIsBlog, router.pathname]);

  useEffect(() => {
    function updateSize() {
      sizeDispatch(uiAction.setWindowWidth(window.innerWidth));
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [sizeDispatch]);
  if (router.pathname === "/dashboard") {
    return (
      <Fragment>
        <BackDrop />
        <div>
          <DASide />
          <div>
            <DHeader />
            <DContent>
              <main className="MAIN">{props.children}</main>
            </DContent>
            <DFooter />
          </div>
        </div>
      </Fragment>
    );
  }

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
