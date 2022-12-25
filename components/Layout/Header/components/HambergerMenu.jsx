import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useToggleMenu from "../../../../Hook/UseToggoleMenu";
import { uiAction } from "../../../../store/ui/uiSlice";
import MenuIcon from "../../../ui/Icons/MenuIcon";
import SideMenu from "./sideMenu/SideMenu";
const HambergerMenu = () => {
  const isShowSideMenu = useSelector((state) => state.ui.isShowMenu);
  const dispatchShowSideMenu = useDispatch();

  const showSideMenuHandler = () => {
    dispatchShowSideMenu(uiAction.setShowSideMenu());
  };

  return (
    <div className="header-menu">
      <div onClick={showSideMenuHandler}>
        <MenuIcon />
      </div>
      <div>
        <SideMenu isShowMenu={isShowSideMenu} />
      </div>
    </div>
  );
};

export default HambergerMenu;
