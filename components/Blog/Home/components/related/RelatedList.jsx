import React from "react";
import { useSelector } from "react-redux";
import RelatedAd1158 from "../ad/RelatedAd1158";
import RelatedItem from "./RelatedItem";

const RelatedLists = (props) => {
  const size = useSelector((state) => state.ui.windowWidth);
  return (
    <div className="related-list-container">
      {props.list.map((item) => {
        return <RelatedItem key={item.id} item={item} />;
      })}
      {size < 720 && <RelatedAd1158 />}
    </div>
  );
};

export default RelatedLists;
