import React, { Fragment, useEffect } from "react";
import CatSubLinks from "./menu/CatSubLinks";
import Link from "next/link";
import ArrowsIcon from "../../../../ui/Icons/arrowsIcon";
import MenuIcon from "../../../../ui/Icons/MenuIcon";
import { blogGetBlogNavLinks } from "../../../../../store/Blog/getData/BlogGetDataAction";
import { useDispatch, useSelector } from "react-redux";
// import useToggleMenu from "../../../../../Hook/UseToggoleMenu";
import { blogUiAction } from "../../../../../store/Blog/ui/blogUislice";
import { uiAction } from "../../../../../store/ui/uiSlice";

const BNavLinks = (props) => {
  const dispatchNavLinks = useDispatch();
  const dispatchBackDrop = useDispatch();
  const dispatchShowMenu = useDispatch();
  const navLinks = useSelector((state) => state.blogGetData.blogNavLinks);
  // const { isShowMenu, menuRef: cartRef, showMenuHandler } = useToggleMenu();
  const windowWidth = useSelector((state) => state.ui.windowWidth);

  const showMenuHandler = () => {
    if (props.miniSearchShowed) {
      props.onToggleMiniSearch();
    }
    dispatchBackDrop(uiAction.showBackDrop());
    dispatchShowMenu(blogUiAction.setIsShowBlogMenu(true));
  };
  useEffect(() => {
    dispatchNavLinks(blogGetBlogNavLinks());
  }, [dispatchNavLinks]);

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
