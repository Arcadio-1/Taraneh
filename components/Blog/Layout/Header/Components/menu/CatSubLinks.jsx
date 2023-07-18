import Link from "next/link";
import React from "react";
import NewsIcon from "../../../../../ui/Icons/NewsIcon";
import CoffeeIcon from "../../../../../ui/Icons/CoffeeIcon";
import DrinkIcon from "../../../../../ui/Icons/DrinkIcon";
import DrinkMakerIcon from "../../../../../ui/Icons/DrinkMakerIcon";
import { useDispatch } from "react-redux";
import { blogUiAction } from "../../../../../../store/Blog/ui/blogUislice";

const CatSubLinks = ({ onCliclClose }) => {
  const dispatchIsShowBlogMenu = useDispatch();
  const CloseMenuHandler = () => {
    dispatchIsShowBlogMenu(blogUiAction.setIsShowBlogMenu(false));
  };
  return (
    <ul className="Bmenu-list-item-inner">
      <li onClick={onCliclClose} className="Bmenu-list-item-inner-item">
        <Link href={"/blog/coffee"}>
          <CoffeeIcon />
          قهوه شناسی
        </Link>
      </li>
      <li onClick={onCliclClose} className="Bmenu-list-item-inner-item">
        <Link href={"/blog/drink"}>
          <DrinkIcon />
          نوشیدنی ها
        </Link>
      </li>
      <li onClick={onCliclClose} className="Bmenu-list-item-inner-item">
        <Link href={"/blog/tools"}>
          <DrinkMakerIcon />
          ابزار تهیه نوشیدنی
        </Link>
      </li>
      <li className="Bmenu-list-item-inner-item">
        <Link href={"/blog/news"}>
          <NewsIcon />
          اخبار دنیا قهوه
        </Link>
      </li>
    </ul>
  );
};

export default CatSubLinks;
