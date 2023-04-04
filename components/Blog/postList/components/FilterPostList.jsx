import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
// import { useHistory } from "react-router-dom";
import ArrowsIcon from "../../../ui/Icons/arrowsIcon";
import FilterIcon from "../../../ui/Icons/FilterIcon";

const FilterPostList = (props) => {
  const [sortitems, setSortItems] = useState();
  const [selectedSort, setSelectedSort] = useState();
  const [isShowFilterList, setIsShowFilterList] = useState(false);
  const location = useRouter();
  // const history = useHistory();
  const btnRef = useRef();
  const toggoleFilterList = () => {
    setIsShowFilterList(!isShowFilterList);
  };
  useEffect(() => {
    const closeFilterList = (e) => {
      // console.log(e.explicitOriginalTarget);
      // console.log(btnRef.current);
      if (
        e.explicitOriginalTarget !== btnRef.current &&
        e.target.parentElement.explicitOriginalTarget !== btnRef.current
      ) {
        setIsShowFilterList(false);
      }
    };
    document.body.addEventListener("click", closeFilterList);
    const getData = async () => {
      try {
        const request = await fetch("/api/blog/ui/getBlogPostFilterItems", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const response = await request.json();
        const sortingItem = [];
        for (const key in response.data) {
          sortingItem.push({ ...response.data[key] });
        }
        setSortItems(sortingItem);
      } catch (error) {}
    };
    getData();
  }, []);

  const selectSortHandler = (item) => {
    setSelectedSort((prev) => {
      return (prev = item.title);
    });
    if (props.sortType)
      location.push({
        pathname: location.pathname,
        search: `?type=${item.value}&sort=${props.sortType}`,
      });
    if (!props.sortType)
      location.push({
        pathname: location.pathname,
        search: `?type=${item.value}`,
      });
  };
  return (
    <section className="postList-filterAndSort-filter">
      <div className="postList-filterAndSort-filter-container">
        <div className="postList-filterAndSort-filter-label">
          <FilterIcon />
          <span className="postList-filterAndSort-filter-label-title">
            نوع:
          </span>
        </div>
        <label className="postList-filterAndSort-filter-selectBox">
          <div
            className="postList-filterAndSort-sort-selectBox-head"
            onClick={toggoleFilterList}
            ref={btnRef}
          >
            <span className="postList-filterAndSort-sort-selectBox-head-title">
              {selectedSort ? selectedSort : "همه"}
            </span>
            <ArrowsIcon arrowType="down" />
          </div>
          {sortitems && (
            <ul
              className={`postList-filterAndSort-filter-selectBox-list ${
                isShowFilterList && "activeList"
              }`}
            >
              {/* activeList */}
              {sortitems.map((item) => {
                return (
                  <li
                    className="postList-filterAndSort-filter-selectBox-list-item"
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

export default FilterPostList;
