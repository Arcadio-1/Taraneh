import { useRouter } from "next/router";
import React from "react";

const Menu = ({ list, type }) => {
  const router = useRouter();
  const { query, pathname } = router;
  console.log(query);
  let selectedItem = list[1];
  // console.log(query[type]);
  if (query[type]) {
    selectedItem = list.find((item) => item.link === query[type]);
  }

  const listingHandler = (value) => {
    router.push({
      pathname,
      query: {
        ...query,
        [type]: value,
      },
    });
  };

  return (
    <div className="listManageMenu">
      <ul className="listManageMenu-list">
        {list.map((item) => {
          return (
            <li
              className={`listManageMenu-item ${
                selectedItem.id === item.id && "selectedItem"
              }`}
              key={item.id}
              onClick={listingHandler.bind(null, item.link)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
