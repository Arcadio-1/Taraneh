import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../../store/ui/uiSlice";
import Modal from "../../Layout/Module/Modal";
import CloseIcon from "../../ui/Icons/CloseIcon";
import Brands from "../SideMenu/Brands";
import Categories from "../SideMenu/Categories";
import FilterByPrice from "../SideMenu/FilterByPrice";
import SideAd from "../SideMenu/SideAd";
import Status from "../SideMenu/Status";

const FilterMenu = ({ products }) => {
  const dispatch = useDispatch();
  const isShowFilterMenu = useSelector((state) => state.ui.isShowFilterMenu);
  const closeMenuHandler = () => {
    dispatch(uiAction.closeModal());
  };
  return (
    <Modal>
      <div
        className="filterModuleMenu"
        style={{ left: `${isShowFilterMenu ? "0" : "-450px"}` }}
      >
        <div className="filterModuleMenu-header">
          <div onClick={closeMenuHandler}>
            <CloseIcon />
          </div>
          <h1 className="filterModuleMenu-title">فیلترها</h1>
        </div>
        <div className="filterModuleMenu-container">
          <Categories products={products} />
          <FilterByPrice products={products} />
          <Status />
          <Brands products={products} />
        </div>
      </div>
    </Modal>
  );
};

export default FilterMenu;
