import { useRouter } from "next/router";
import React from "react";
import ListIcon1 from "../../../ui/Icons/ListIcon1";
import ListIcon2 from "../../../ui/Icons/ListIcon2";
import ListIcon3 from "../../../ui/Icons/ListIcon3";
import ListIcon4 from "../../../ui/Icons/ListIcon4";
const ListingIcon = () => {
  const router = useRouter();
  const { query, pathname } = router;
  const selectedList = query.listColumn;
  const listingStyleHandler = (listType) => {
    router.push({
      pathname,
      query: {
        ...query,
        listColumn: listType,
      },
    });
  };
  return (
    <div className="listingManage-icons">
      <div
        className={`listingManage-icons-item ${
          selectedList === "4" && "selectedList"
        }`}
        onClick={() => {
          listingStyleHandler("4");
        }}
      >
        <ListIcon4 />
      </div>
      <div
        className={`listingManage-icons-item ${
          selectedList === 3 && "selectedList"
        }`}
        onClick={() => {
          listingStyleHandler("3");
        }}
      >
        <ListIcon3 />
      </div>
      <div
        className={`listingManage-icons-item ${
          selectedList === "2" && "selectedList"
        }`}
        onClick={() => {
          listingStyleHandler("2");
        }}
      >
        <ListIcon2 />
      </div>
      <div
        className={`listingManage-icons-item ${
          selectedList === "1" && "selectedList"
        }`}
        onClick={() => {
          listingStyleHandler("1");
        }}
      >
        <ListIcon1 />
      </div>
    </div>
  );
};

export default ListingIcon;
