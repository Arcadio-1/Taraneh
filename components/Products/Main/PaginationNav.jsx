import React from "react";
import ArrowsIcon from "../../ui/Icons/arrowsIcon";
1;

import { useRouter } from "next/router";

const PaginationNav = (props) => {
  let { numberOfPages } = props;
  const router = useRouter();
  const { query, pathname } = router;
  // console.log(query);
  const { sortType, filterType } = router.query;
  const { page } = query;
  const numberOfBtn = 3;
  const pageNum = +page || 1;
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  // console.log(pages);
  const prevBtnHandler = () => {
    console.log(pageNum);
    if (!pageNum || pageNum === 1) {
      return;
    }
    router.push({
      pathname,
      query: {
        ...query,
        page: pageNum - 1,
      },
    });
  };
  const nextBtnHandler = () => {
    console.log(pageNum);
    if (pageNum === pages.length) {
      return;
    }
    router.push({
      pathname,
      query: {
        ...query,
        page: pageNum + 1,
      },
    });
  };
  const pageNumberHandler = (num) => {
    router.push({
      pathname,
      query: {
        ...query,
        page: num,
      },
    });
  };

  return (
    <div className="paginationNav-container">
      <ul className="paginationNav-list">
        <li
          className="paginationNav-list-item prevBtn"
          onClick={prevBtnHandler}
        >
          <ArrowsIcon arrowType={"right"} />
        </li>
        {1 <= pageNum - numberOfBtn && (
          <div className="paginationNav-list-item-end">
            <li
              className={`paginationNav-list-item`}
              onClick={() => pageNumberHandler(pages[0])}
              key={pages[pages.length - 1]}
            >
              {pages[0]}
            </li>
            <span className="paginationNav-list-dots">...</span>
          </div>
        )}
        {pages.map((item) => {
          if (item < pageNum + numberOfBtn && item > pageNum - numberOfBtn) {
            return (
              <li
                className={`paginationNav-list-item ${
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
          <div className="paginationNav-list-item-end">
            <span className="paginationNav-list-dots">...</span>
            <li
              className={`paginationNav-list-item`}
              onClick={() => pageNumberHandler(pages[pages.length - 1])}
              key={pages[pages.length - 1]}
            >
              {pages[pages.length - 1]}
            </li>
          </div>
        )}
        <li
          className="paginationNav-list-item nextBtn"
          onClick={nextBtnHandler}
        >
          <ArrowsIcon arrowType={"left"} />
        </li>
      </ul>
    </div>
  );
};

export default PaginationNav;
