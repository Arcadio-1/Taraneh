import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import ArrowsIcon from "../../../ui/Icons/arrowsIcon";
import HomeIcon from "../../../ui/Icons/HomeIcon";

const TopAddres = ({ title, id }) => {
  const subCat = useSelector((state) => state.blogUi.blogSub);
  const category = () => {
    switch (subCat) {
      case "drink":
        return "روش تهیه انواع نوشیدنی";
      case "coffee":
        return "قهوه شناسی";
      case "tools":
        return "همه چیز راجب ابزار تهیه نوشیدنی";
      case "news":
        return "اخبار دنیای کافی";
      default:
        return;
    }
  };

  return (
    <div className="blogPost-topAddres">
      <Link className="blogPost-topAddres-link" href={"/blog"}>
        <HomeIcon />
      </Link>
      {/* <ArrowsIcon arrowType="left" /> */}
      <span className="blogPost-topAddres-backslash">/</span>
      <Link className="blogPost-topAddres-link" href={`/blog/${subCat}`}>
        {category()}
      </Link>
      {/* <span className="blogPost-topAddres-backslash">/</span> */}
      {/* <ArrowsIcon arrowType="left" /> */}
      {/* <Link
        className="blogPost-topAddres-link"
        href={`/blog/${subCat}/${id}/${title}`}
      >
        {title}
      </Link> */}
    </div>
  );
};

export default TopAddres;
