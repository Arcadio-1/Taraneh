import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ArrowsIcon from "../../../ui/Icons/arrowsIcon";
import SortIcon from "../../../ui/Icons/SortIcon";

const SortPostList = (props) => {
  const btn = useRef();
  const [sortitems, setSortItems] = useState();
  const [selectedFilter, setSelectedFilter] = useState();
  const [isShowDropDown, setIsShowDropDown] = useState(false);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    const closeDropDown = (e) => {
      // console.log(e.target.parentElement.explicitOriginalTarget);
      // console.log(btn.current);
      if (
        e.explicitOriginalTarget !== btn.current &&
        e.target.parentElement.explicitOriginalTarget !== btn.current
      ) {
        setIsShowDropDown(false);
      }
    };
    document.body.addEventListener("click", closeDropDown);
    const getData = async () => {
      try {
        const request = await fetch("/json/Blog/blogPostsSortItems.json");
        const response = await request.json();
        const sortingItem = [];
        for (const key in response) {
          sortingItem.push({ ...response[key] });
        }
        setSortItems(sortingItem);
      } catch (error) {}
    };
    getData();
  }, []);
  const toggoleDropDown = () => {
    console.log("fuck");
    setIsShowDropDown(!isShowDropDown);
  };
  const selectSortHandler = (item) => {
    setSelectedFilter((prev) => {
      return (prev = item.title);
    });
    if (props.filterType)
      history.push({
        pathname: location.pathname,
        search: `?type=${props.filterType}&sort=${item.value}`,
      });
    if (!props.filterType)
      history.push({
        pathname: location.pathname,
        search: `?sort=${item.value}`,
      });
  };
  return (
    <section className="postList-filterAndSort-sort">
      <div className="postList-filterAndSort-sort-container">
        <div className="postList-filterAndSort-sort-label">
          <SortIcon />
          <span className="postList-filterAndSort-sort-label-title">
            مرتب سازی:
          </span>
        </div>
        <label className="postList-filterAndSort-sort-selectBox">
          <div
            className="postList-filterAndSort-sort-selectBox-head"
            ref={btn}
            onClick={toggoleDropDown}
          >
            <span className="postList-filterAndSort-sort-selectBox-head-title">
              {selectedFilter ? selectedFilter : "جدیدترین"}
            </span>
            <ArrowsIcon arrowType="down" />
          </div>
          {sortitems && (
            <ul
              className={`postList-filterAndSort-sort-selectBox-list ${
                isShowDropDown && "activeList"
              }`}
            >
              {/* activeList */}
              {sortitems.map((item) => {
                return (
                  <li
                    className="postList-filterAndSort-sort-selectBox-list-item"
                    key={item.value}
                    onClick={() => selectSortHandler(item)}
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          )}
        </label>
      </div>
    </section>
  );
};

export default SortPostList;
