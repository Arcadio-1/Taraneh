import Link from "next/link";
import React from "react";
const Brand = (props) => {
  const { brandEn, brandFn } = props;
  return (
    <div className="productDetails-header-meta-brand">
      <label>برند :</label>
      <Link href={`/products?brands=${brandEn}`}>{brandFn}</Link>
    </div>
  );
};

export default Brand;
