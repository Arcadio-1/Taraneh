import Link from "next/link";
import React, { useRef, useState } from "react";
import MenuArrowIcon from "../../../../../ui/Icons/MenuArrowIcon";
import ArrowIcon from "../../../../../ui/Icons/arrowsIcon";
import useToggleMenu from "../../../../../../Hook/UseToggoleMenu";
const CategoryItem = ({ item, child }) => {
  const { title, link, icon, subLinks } = item;
  const categoryListRef = useRef();
  const [categoryHeight, setCategoryHeight] = useState(0);
  const { isShowMenu, menuRef, showMenuHandler } = useToggleMenu();

  const isShowCategoresHandler = (e) => {
    console.log(e);
    showMenuHandler();
    const listHeight = categoryListRef.current.clientHeight;
    setCategoryHeight(`${listHeight + 20}px`);
  };
  return (
    <li className={`sideMenu-category-item ${child && "childItem"}`}>
      <div
        ref={menuRef}
        onClick={isShowCategoresHandler}
        className={`${subLinks.length > 0 ? "headList" : ""}`}
      >
        <Link href={subLinks.length > 0 ? "#" : link}>
          <span>{title}</span>
          {subLinks.length > 0 && <ArrowIcon type="down" />}
        </Link>
      </div>
      {subLinks.length > 0 && (
        <div
          className={`sideMenu-category-container`}
          style={
            isShowMenu
              ? {
                  height: categoryHeight,
                  padding: "1em 1em",
                  backgroundColor: "#ffffff30",
                  marginTop: "-14px",
                  marginBottom: "10px",
                }
              : { opacity: 0, padding: "0", height: 0 }
          }
        >
          <div className="sideMenu-category-Wraper">
            <ul ref={categoryListRef} className="sideMenu-category-list">
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
