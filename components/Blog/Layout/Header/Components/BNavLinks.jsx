import React, { Fragment, useEffect, useState } from "react";
import CatSubLinks from "./menu/CatSubLinks";
import Link from "next/link";
import ArrowsIcon from "../../../../ui/Icons/arrowsIcon";
import MenuIcon from "../../../../ui/Icons/MenuIcon";
import { useDispatch, useSelector } from "react-redux";
import { blogUiAction } from "../../../../../store/Blog/ui/blogUislice";
import { uiAction } from "../../../../../store/ui/uiSlice";

const BNavLinks = (props) => {
  const dispatchBackDrop = useDispatch();
  const dispatchShowMenu = useDispatch();
  const [navLinks, setNavLinks] = useState([]);
  const [navLinksStatus, setNavLinksStatus] = useState([]);
  const windowWidth = useSelector((state) => state.ui.windowWidth);

  const showMenuHandler = () => {
    if (props.miniSearchShowed) {
      props.onToggleMiniSearch();
    }
    dispatchBackDrop(uiAction.showBackDrop());
    dispatchShowMenu(blogUiAction.setIsShowBlogMenu(true));
  };

  useEffect(() => {
    const getNavLinks = async () => {
      try {
        setNavLinksStatus({
          status: "loading",
          title: "در حال دریافت",
          message: "در حال دریافت سربرگ ها",
        });
        const request = await fetch("/api/blog/ui/getNavLinks", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!request.ok) {
          throw new Error(data.error, "خطا در دریافت سربرگ کد 1");
        }
        const response = await request.json();
        if (response.status !== "success") {
          throw new Error(data.error, "خطا در دریافت لیست سربرگ کد 2");
        }
        const links = [];
        for (const key in response.data) {
          links.push({
            id: key,
            title: response.data[key].title,
            path: response.data[key].link,
          });
        }
        setNavLinks((prev) => {
          return (prev = links);
        });
      } catch (error) {
        setNavLinksStatus({
          status: "error",
          title: "خطا در دریافت سربرگ ها",
          message: error.message,
        });
      }
    };
    getNavLinks();
  }, []);

  // useEffect(() => {
  //   console.log(navLinks);
  // }, [navLinks]);

  return (
    <Fragment>
      <nav className="BNavLinks">
        {windowWidth > 450 && (
          <ul className="BNavLinks-list">
            {navLinks.map((item) => {
              return (
                <li key={item.id} className="BNavLinks-list-item">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
            <li className="BNavLinks-list-item catLink">
              <Link href={"blog/cat"}>
                دسته بندی مطالب <ArrowsIcon arrowType="down" />
              </Link>
              <CatSubLinks />
            </li>
          </ul>
        )}
        {windowWidth < 450 && (
          <div onClick={showMenuHandler} className="BNavLinks-menuIcon">
            <MenuIcon />
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default BNavLinks;
