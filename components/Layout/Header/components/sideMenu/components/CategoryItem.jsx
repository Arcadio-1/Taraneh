import Link from "next/link";
import React, { useRef, useState } from "react";
import MenuArrowIcon from "../../../../../ui/Icons/MenuArrowIcon";
import ArrowIcon from "../../../../../ui/Icons/arrowsIcon";
import useToggleMenu from "../../../../../../Hook/UseToggoleMenu";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../../../../store/ui/uiSlice";
const CategoryItem = ({ item, child }) => {
  const { title, link, icon, subLinks } = item;
  const categoryListRef = useRef();
  const [categoryHeight, setCategoryHeight] = useState(0);
  const { isShowMenu, menuRef, showMenuHandler } = useToggleMenu();
  const dispatchisShowMenu = useDispatch();
  const isShowCategoresHandler = (e) => {
    console.log(e);
    showMenuHandler();
    const listHeight = categoryListRef.current.clientHeight;
    setCategoryHeight(`${listHeight + 20}px`);
  };
  const closeSideMenuHandler = () => {
    dispatchisShowMenu(uiAction.closeModal());
  };
  return (
    <li className={`sideMenu-category-item ${child && "childItem"}`}>
      <div
        ref={menuRef}
        onClick={isShowCategoresHandler}
        className={`${subLinks.length > 0 ? "headList" : ""}`}
      >
        {subLinks.length > 0 && (
          <div className="headList-a">
            <span>{title}</span>
            {subLinks.length > 0 && <ArrowIcon type="down" />}
          </div>
        )}
        {subLinks.length === 0 && (
          <Link onClick={closeSideMenuHandler} href={link}>
            <span>{title}</span>
            {subLinks.length > 0 && <ArrowIcon type="down" />}
          </Link>
        )}
      </div>
      {subLinks.length > 0 && (
        <div
          className={`sideMenu-category-container childContainer`}
          style={
            isShowMenu
              ? {
                  height: categoryHeight,
                  padding: "1em 1em",
                  marginTop: "-16px",
                  marginBottom: "10px",
                }
              : { opacity: 0, padding: "0", height: 0 }
          }
        >
          <div className="sideMenu-category-Wraper">
            <ul ref={categoryListRef} className="sideMenu-category-list ">
              {subLinks.map((item) => {
                return <CategoryItem child={true} key={item.id} item={item} />;
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default CategoryItem;
