import React, { useState } from "react";
import UserIcon from "../../../ui/Icons/UserIcon";
import MenuArrowIcon from "../../../ui/Icons/MenuArrowIcon";
import useToggleMenu from "../../../../Hook/UseToggoleMenu";
import ProfileMenu from "./profileMenu/ProfileMenu";

const Profile = () => {
  const { isShowMenu, menuRef, showMenuHandler } = useToggleMenu();

  return (
    <div className="header-profile" ref={menuRef}>
      <div
        className={`header-profile-iconContainer ${
          isShowMenu && "profileMenuIsOpen"
        }`}
        onClick={showMenuHandler}
      >
        <div className="header-profile-icons">
          <UserIcon />
          <MenuArrowIcon type={"down"} />
        </div>
      </div>
      {isShowMenu && <ProfileMenu />}
    </div>
  );
};

export default Profile;
