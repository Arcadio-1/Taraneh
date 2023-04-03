import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import ArrowsIcon from "../../../ui/Icons/arrowsIcon";

const Pagination = (props) => {
  let { propsPageNum, sortType, filterType, numberOfPages } = props;
  // console.log(propsPageNum);
  const numberOfBtn = 3;
  const pageNum = propsPageNum ? +propsPageNum : 1;
  const location = useLocation();
  const history = useHistory();
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  const prevBtnHandler = () => {
    // console.log(sortType);
    if (!pageNum || pageNum === 1) {
      return;
    }
    if (pageNum && sortType && filterType) {
      history.push({
        pathname: location.pathname,
        search: `?type=${filterType}&sort=${sortType}&page=${pageNum - 1}`,
      });
    }
    if (pageNum && !sortType && !filterType) {
      history.push({
        pathname: location.pathname,
        search: `?page=${pageNum - 1}`,
      });
    }
    if (pageNum && sortType && !filterType) {
      history.push({
        pathname: location.pathname,
        search: `?sort=${sortType}&page=${pageNum - 1}`,
      });
    }

    if (pageNum && !sortType && filterType) {
      history.push({
        pathname: location.pathname,
        search: `?type=${filterType}&page=${pageNum - 1}`,
      });
    }
  };
  const nextBtnHandler = () => {
    console.log(pageNum);
    if (pageNum === pages.length) {
      return;
    }
    if (sortType && filterType) {
      history.push({
        pathname: location.pathname,
        search: `?type=${filterType}&sort=${sortType}&page=${+pageNum + 1}`,
      });
      return;
    }
    if (!sortType && filterType) {
      history.push({
        pathname: location.pathname,
        search: `?type=${filterType}&page=${pageNum + 1}`,
      });
      return;
    }
    if (sortType && !filterType) {
      history.push({
        pathname: location.pathname,
        search: `?sort=${sortType}&page=${pageNum + 1}`,
      });
      return;
    }
    if (!sortType && !filterType) {
      console.log(pageNum);
      history.push({
        pathname: location.pathname,
        search: `?page=${pageNum + 1}`,
      });
    }
  };
  const pageNumberHandler = (num) => {
    if (sortType && filterType) {
      history.push({
        pathname: location.pathname,
        search: `?type=${filterType}&sort=${sortType}&page=${num}`,
      });
    }
    if (!sortType && filterType) {
      history.push({
        pathname: location.pathname,
        search: `?type=${filterType}&page=${num}`,
      });
    }
    if (sortType && !filterType) {
      history.push({
        pathname: location.pathname,
        search: `?sort=${sortType}&page=${num}`,
      });
    }
    if (!sortType && !filterType) {
      history.push({ pathname: location.pathname, search: `?page=${num}` });
    }
  };

  return (
    <div className="postList-pagination-container">
      <ul className="postList-pagination-list">
        <li
          className="postList-pagination-list-item prevBtn"
          onClick={prevBtnHandler}
        >
          <ArrowsIcon arrowType={"right"} />
        </li>
        {1 <= pageNum - numberOfBtn && (
          <div className="postList-pagination-list-item-end">
            <li
              className={`postList-pagination-list-item`}
              onClick={() => pageNumberHandler(pages[0])}
              key={pages[pages.length - 1]}
            >
              {pages[0]}
            </li>
            <span className="postList-pagination-list-dots">...</span>
          </div>
        )}
        {pages.map((item) => {
          if (item < pageNum + numberOfBtn && item > pageNum - numberOfBtn) {
            return (
              <li
                className={`postList-pagination-list-item ${
                  item === +pageNum ? "activePageNum" : ""
                }`}
                onClick={() => pageNumberHandler(item)}
                key={item}
              >
                {item}
              </li>
            );
          }

          return null;
        })}
        {pages.length >= pageNum + numberOfBtn && (
          <div className="postList-pagination-list-item-end">
            <span className="postList-pagination-list-dots">...</span>
            <li
              className={`postList-pagination-list-item`}
              onClick={() => pageNumberHandler(pages[pages.length - 1])}
              key={pages[pages.length - 1]}
            >
              {pages[pages.length - 1]}
            </li>
          </div>
        )}
        <li
          className="postList-pagination-list-item nextBtn"
          onClick={nextBtnHandler}
        >
          <ArrowsIcon arrowType={"left"} />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
