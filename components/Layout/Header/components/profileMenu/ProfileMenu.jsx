import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ProductsIcon from "../../../../ui/Icons/ProductsIcon";
import CommentIcon from "../../../../ui/Icons/CommentIcon";
import LikeIcon from "../../../../ui/Icons/LikeIcon";
import ExitIcon from "../../../../ui/Icons/ExitIcon";
import { signOut } from "next-auth/react";
import SettingIcon from "../../../../ui/Icons/settingIcon";

const ProfileMenu = ({ closeMenu }) => {
  const { data: session, status } = useSession();
  const name = `${session.user.email.name} ${session.user.email.family}`;
  return (
    <div className="profileMenu">
      <ul className="profileMenu-list">
        <li className="profileMenu-item" onClick={closeMenu}>
          <Link href={"/profile"}>
            <div className="flex items-center gap-2">
              <Image
                src={"/image/ui/profile.png"}
                height={30}
                width={30}
                alt="profile"
              />
              {name}
            </div>
          </Link>
        </li>
        <li className="profileMenu-item" onClick={closeMenu}>
          <ProductsIcon />
          <Link href={"/profile"}>سفارش ها</Link>
        </li>
        <li className="profileMenu-item" onClick={closeMenu}>
          <LikeIcon />
          <Link href={"/profile"}>لیست ها</Link>
        </li>
        <li className="profileMenu-item" onClick={closeMenu}>
          <CommentIcon />
          <Link href={"/profile"}>دیدگاه ها</Link>
        </li>
        {session.user.email.rank === "admin" && (
          <li className="profileMenu-item" onClick={closeMenu}>
            <SettingIcon />
            <Link href={"/dashboard"}> مدیریت فروشگاه</Link>
          </li>
        )}

        <li
          className="profileMenu-item"
          onClick={() => {
            closeMenu();
            signOut();
          }}
        >
          <ExitIcon />
          <Link href={"#"}>خروج از حساب کاربری</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
