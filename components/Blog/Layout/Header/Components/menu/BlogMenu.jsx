import React, { useEffect, useState } from "react";
import ShopIcon from "../../../../../ui/Icons/ShopIcon";
import CategoriesIcon from "../../../../../ui/Icons/CategoriesIcon";
import ArrowsIcon from "../../../../../ui/Icons/arrowsIcon";
import NewsIcon from "../../../../../ui/Icons/NewsIcon";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../../../../Store/ui/uiSlice";
import CatSubLinks from "./CatSubLinks";
import Link from "next/link";
import Modal from "../../../../../Layout/Module/Modal";
import { blogUiAction } from "../../../../../../store/Blog/ui/blogUislice";

const BlogMenu = () => {
  const isShowMenu = useSelector((state) => state.blogUi.isShowBlogMenu);
  const backdropStatus = useSelector((state) => state.ui.isShowBackDrop);
  const isDark = useSelector((state) => state.blogUi.isDark);
  const subClass = useSelector((state) => state.blogUi.subsClass);
  const dispatch = useDispatch();

  const [isShowDropList, setIsShowDropList] = useState(false);

  const ShowDropListHandler = () => {
    setIsShowDropList((prev) => !prev);
  };
  const closeDropList = () => {
    setIsShowDropList(false);
  };

  const CloseMenuHandler = () => {
    dispatch(blogUiAction.setIsShowBlogMenu(false));
    dispatch(uiAction.hideBackDrop());
  };
  const isItDark = isDark && subClass === "" ? "dark" : "";
  const menuClass = isShowMenu ? `${isItDark} showBmenu` : "";

  useEffect(() => {
    console.log(backdropStatus);
    if (!backdropStatus) {
      dispatch(blogUiAction.setIsShowBlogMenu(false));
    }
  }, [backdropStatus, dispatch]);

  useEffect(() => {
    if (!isShowMenu) {
      closeDropList();
    }
  }, [isShowMenu]);
  return (
    <Modal>
      <section className={`Bmenu ${subClass} ${menuClass}`}>
        <ul className="Bmenu-list">
          <li onClick={CloseMenuHandler} className="Bmenu-list-item">
            <Link href={"/"}>
              <ShopIcon />
              فروشگاه کافه ترانه
            </Link>
          </li>
          <li onClick={CloseMenuHandler} className="Bmenu-list-item">
            <Link href={"/blog"}>
              <NewsIcon />
              مجله کافه ترانه
            </Link>
          </li>
          <li className="Bmenu-list-item" onClick={ShowDropListHandler}>
            <h2 className="Bmenu-list-item-cat">
              <CategoriesIcon />
              دسته بندی مطالب
              <ArrowsIcon arrowType={isShowDropList ? "up" : "down"} />
            </h2>

            {isShowDropList && <CatSubLinks />}
          </li>
        </ul>
      </section>
    </Modal>
  );
};

export default BlogMenu;
