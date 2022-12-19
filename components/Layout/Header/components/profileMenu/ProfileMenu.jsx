import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ProductsIcon from "../../../../ui/Icons/ProductsIcon";
import CommentIcon from "../../../../ui/Icons/CommentIcon";
import LikeIcon from "../../../../ui/Icons/LikeIcon";
import ExitIcon from "../../../../ui/Icons/ExitIcon";
import { signOut } from "next-auth/react";

const ProfileMenu = () => {
  const { data: session, status } = useSession();
  console.log(session);
  const name = `${session.user.email.name} ${session.user.email.family}`;
  return (
    <div className="profileMenu">
      <ul className="profileMenu-list">
        <li className="profileMenu-item">
          <Image
            src={"/image/ui/profile.png"}
            height={30}
            width={30}
            alt="profile"
          />
          <Link href={"/profile"}>{name}</Link>
        </li>
        <li className="profileMenu-item">
          <ProductsIcon />
          <Link href={"/profile"}>سفارش ها</Link>
        </li>
        <li className="profileMenu-item">
          <LikeIcon />
          <Link href={"/profile"}>لیست ها</Link>
        </li>
        <li className="profileMenu-item">
          <CommentIcon />
          <Link href={"/profile"}>دیدگاه ها</Link>
        </li>
        <li
          className="profileMenu-item"
          onClick={() => {
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
