import React from "react";

const Brands = ({ products }) => {
  const brandsArry = products.map((product) => {
    return { brandsFn: product.brandFn, brandsEn: product.brandEn };
  });
  const brands = brandsArry.filter((value, index) => {
    const _value = JSON.stringify(value);
    return (
      index ===
      brandsArry.findIndex((obj) => {
        return JSON.stringify(obj) === _value;
      })
    );
  });
  return (
    <div className="checkBoxList">
      <h3 className="checkBoxList-title">برند</h3>
      <ul className="checkBoxList-list">
        {brands.map((brand) => {
          return (
            <li key={brand.brandsEn} className="checkBoxList-item">
              <input type="checkbox" className="checkBoxListitem-input" />
              <label className="checkBoxList-item-label">
                <span>{brand.brandsFn}</span>
                <span>{brand.brandsEn}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Brands;
