import { useRouter } from "next/router";
import React from "react";
import ProductCard from "../../ui/productCard/ProductCard";

const ProductsList = (props) => {
  const router = useRouter();
  const { query } = router;
  const columnType = query.listColumn;
  return (
    <div className="productsList">
      <div
        className={`productsList-container  ${
          columnType === "2" && "column2"
        } ${columnType === "3" && "column3"} ${
          columnType === "1" && "column1"
        }  ${columnType === "4" && "column4"} `}
      >
        {props.products.map((product) => {
          return (
            <div className="productsList-item" key={product.id}>
              <ProductCard listStyle={columnType} item={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
