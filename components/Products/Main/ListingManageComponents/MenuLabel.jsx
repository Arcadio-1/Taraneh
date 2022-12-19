import React from "react";
import MenuArrowIcon from "../../../ui/Icons/MenuArrowIcon";
import Menu from "./Menu";
import useToggleMenu from "../../../../Hook/useToggoleMenu";
import { useRouter } from "next/router";

const MenuLabel = (props) => {
  const { title, list, type } = props;
  const { query } = useRouter();
  let selectedItem = list[1];
  // console.log(query[type]);
  if (query[type]) {
    selectedItem = list.find((item) => item.link === query[type]);
  }

  const { isShowMenu, menuRef, showMenuHandler } = useToggleMenu();
  return (
    <div className="listingManage-forms-item">
      {props.children}
      <span className="listingManage-forms-item-label hideInMD">{title}</span>
      <div
        ref={menuRef}
        onClick={showMenuHandler}
        className="listingManage-forms-item-btn"
      >
        <span className="listingManage-forms-item-selectedOption">
          {selectedItem.title}
        </span>
        <span>
          <MenuArrowIcon type="down" />
        </span>

        {isShowMenu && <Menu list={list} type={type} />}
      </div>
    </div>
  );
};

export default MenuLabel;
