import Link from "next/link";
import React, { Fragment } from "react";
import CoffeeBagIcon from "../../../../../ui/Icons/NavIcons/CoffeeBagIcon";
import CoffeeBeansIcon from "../../../../../ui/Icons/NavIcons/CoffeeBeansIcon";
import CoffeeCupIcon2 from "../../../../../ui/Icons/NavIcons/CoffeeCupIcon2";
import CoffeeMatchinIcon from "../../../../../ui/Icons/NavIcons/CoffeeMatchinIcon";
import CategoryItem from "./CategoryItem";

const CategoryList = (props) => {
  const { links, status } = props;
  // const categories = [
  //   { id: 1, title: "قهوه شرکتی", link: "packaged" },
  //   { id: 2, title: "قهوه قله", link: "bulk" },
  //   { id: 3, title: "نوشیدنی", link: "packaged" },
  //   { id: 4, title: "ابزا تهیه نوشیدنی", link: "packaged" },
  //   { id: 5, title: "", link: "packaged" },
  // ];
  return (
    <Fragment>
      {status === "success" && (
        <ul className="sideMenu-category-list">
          {links.data.map((item) => {
            return <CategoryItem child={false} key={item.id} item={item} />;
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default CategoryList;
