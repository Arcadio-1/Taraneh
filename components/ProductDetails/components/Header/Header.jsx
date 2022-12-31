import React from "react";
import Brand from "./Components/Brand";
import Code from "./Components/Code";
import Rate from "./Components/Rate";
import Title from "./Components/Title";

const Header = (props) => {
  const { title, statistics, brandFn, brandEn, id } = props;
  return (
    <div className="productDetails-header">
      <Title title={title} />
      <div className="productDetails-header-meta">
        <Brand brandEn={brandEn} brandFn={brandFn} />
        <Rate rate={statistics.rate} buyerLiked={statistics.buyerLiked} />
        <Code id={id} />
      </div>
    </div>
  );
};

export default Header;
