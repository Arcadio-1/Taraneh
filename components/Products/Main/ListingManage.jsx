import React, { useState } from "react";

import SortIcon from "../../ui/Icons/SortIcon";
import PerPageIcon from "../../ui/Icons/PerPageIcon";
import MenuLabel from "./ListingManageComponents/MenuLabel";
import ListingIcon from "./ListingManageComponents/ListingIcon";
import FilterIcon from "../../ui/Icons/FilterIcon";
import MenuArrowIcon from "../../ui/Icons/MenuArrowIcon";
import { useDispatch } from "react-redux";
import { uiAction } from "../../../store/ui/uiSlice";
const ListingManage = () => {
  const sortingListItems = [
    { id: 1, title: "پرفروش ترین", link: "Max-sell" },
    { id: 2, title: "محبوب ترین", link: "Fav-rate" },
    { id: 3, title: "گرانترین", link: "MaxToLow-price" },
    { id: 4, title: "ارزانترین", link: "LowToMax-price" },
    { id: 5, title: "پربازدیدترین", link: "Max-visited" },
    { id: 6, title: "جدیدترین", link: "Latest-Date" },
  ];
  const perPageListItems = [
    { id: 1, title: "6", link: "6" },
    { id: 2, title: "12", link: "12" },
    { id: 3, title: "24", link: "24" },
    { id: 4, title: "32", link: "32" },
    { id: 5, title: "48", link: "48" },
    { id: 6, title: "64", link: "64" },
  ];
  const dispatch = useDispatch();
  const showFiltersMenuHandler = () => {
    dispatch(uiAction.showBackDrop());
    dispatch(uiAction.setShowFilterMenu());
  };

  return (
    <div className="listingManage">
      <div className="listingManage-forms">
        <div className="listingManage-forms-itemContainer">
          <MenuLabel title="به ترتیب" type="sort" list={sortingListItems}>
            <SortIcon />
          </MenuLabel>
        </div>

        <div className="listingManage-forms-itemContainer">
          <MenuLabel
            title=" تعداد محصول هر صفحه"
            type="perPage"
            list={perPageListItems}
          >
            <PerPageIcon />
          </MenuLabel>
        </div>
        <div
          onClick={showFiltersMenuHandler}
          className="listingManage-forms-item showInMD"
        >
          <FilterIcon />
          <div className="listingManage-forms-item-btn">
            <span className="listingManage-forms-item-selectedOption">
              فیلتر
            </span>
            <span>
              <MenuArrowIcon type="left" />
            </span>
          </div>
        </div>
      </div>

      <div className="listingManage-iconsContiner hideInSM">
        <ListingIcon />
      </div>
    </div>
  );
};

export default ListingManage;
