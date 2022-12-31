import Link from "next/link";
import React from "react";

const Meta = (props) => {
  const { tags, category } = props;
  return (
    <div className="productDetails-content-meta">
      <ul className="productDetails-content-meta-list">
        <li className="productDetails-content-meta-item">
          <label>دسته بندی : </label>
          <span>{category}</span>
        </li>
        <li className="productDetails-content-meta-item">
          <label>تگ : </label>
          <ul className="productDetails-content-meta-tags-list">
            {tags.map((tag) => {
              return (
                <li
                  key={tag.id}
                  className="productDetails-content-meta-tags-item"
                >
                  <Link href={`/products?tag=${tag.title}`}>{tag.title}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Meta;
