import Link from "next/link";
import React from "react";
import CommentIcon from "../../ui/Icons/CommentIcon";
import HomeIcon from "../../ui/Icons/HomeIcon";
import BasketIcon from "../../ui/Icons/BasketIcon";
import LikeIcon from "../../ui/Icons/LikeIcon";
import AddresIcon from "../../ui/Icons/AddressIcon";
import GiftIcon from "../../ui/Icons/GiftIcon";
import NotifIcon from "../../ui/Icons/NotifIcon";
import ViewsIcon from "../../ui/Icons/ViewsIcon";
import ProfileIcon from "../../ui/Icons/ProfileIcon";
import ExitIcon from "../../ui/Icons/ExitIcon";

const MenuList = () => {
  return (
    <div className="profile-menuList">
      <ul className="list">
        <li className="item ">
          <Link href={"/profile"}>
            <HomeIcon />
            <p className="title">خلاصه فعالیت ها</p>
          </Link>
        </li>
        <li className="item selectedItem">
          <Link href={"/profile/orders"}>
            <BasketIcon />
            <p className="title">سفارش ها</p>
          </Link>
        </li>
        <li className="item">
          <Link href={"/profile/lists"}>
            <LikeIcon />
            <p className="title">لیست های من</p>
          </Link>
        </li>
        <li className="item">
          <Link href={"/profile/comments"}>
            <CommentIcon />
            <p className="title">دیدگاه ها</p>
          </Link>
        </li>
        <li className="item">
          <Link href={"/profile/addresses"}>
            <AddresIcon />
            <p className="title">آدرس ها</p>
          </Link>
        </li>
        <li className="item">
          <Link href={"/profile/gift-cards"}>
            <GiftIcon />
            <p className="title">کارت های هدیه</p>
          </Link>
        </li>
        <li className="item">
          <Link href={"/profile/notification"}>
            <NotifIcon />
            <p className="title">پیغام ها</p>
          </Link>
        </li>
        <li className="item">
          <Link href={"/profile/user-history"}>
            <ViewsIcon />
            <p className="title">بازدید های اخیر</p>
          </Link>
        </li>
        <li className="item">
          <Link href={"/profile/personal-info"}>
            <ProfileIcon />
            <p className="title">اطلاعات حساب کاربری</p>
          </Link>
        </li>
        <li className="item">
          <Link href={"/"}>
            <ExitIcon />
            <p className="title">خروج</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
