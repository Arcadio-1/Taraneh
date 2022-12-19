import { useRouter } from "next/router";
import React, { useRef } from "react";
const Categories = ({ products }) => {
  const router = useRouter();
  const { query, pathname } = router;
  const inputRef = useRef();

  // console.log(query[type]);

  const queryHandler = (value) => {
    let selecteds = value;
    const setes = query[type];
    if (setes) {
      selecteds = `${selecteds},${setes}`;
    }
    console.log(setes);
    router.push({
      pathname,
      query: {
        ...query,
        [type]: selecteds,
      },
    });
  };
  const categoriesArry = products.map((product) => {
    return product.category;
  });

  let categories = [...new Set(categoriesArry)];

  return (
    <div className="categories">
      <div className="checkBoxList">
        <h3 className="checkBoxList-title">دسته بندی</h3>
        <ul className="checkBoxList-list">
          {categories.map((item) => {
            return (
              <li className="checkBoxList-item" key={item}>
                <input
                  ref={inputRef}
                  className="checkBoxList-item-input"
                  onChange={queryHandler.bind(null, item)}
                  type="checkbox"
                  //   checked={query[]}
                />
                <label className="checkBoxList-item-label">{item}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
