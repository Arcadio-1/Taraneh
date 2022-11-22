import React from "react";
import { useSelector } from "react-redux";
import SliderSection from "../../sliderSection/SliderSection";

const TopRate = () => {
  const products = useSelector((state) => state.getData.products);
  let prods = [...products];
  let topRateProducts = [];
  console.log(products);

  if (products.length > 0) {
    topRateProducts = prods.sort((prodA, prodB) => {
      return prodA.statistics.rate < prodB.statistics.rate ? 1 : -1;
    });
    topRateProducts = topRateProducts.slice(0, 10);
  }
  console.log(topRateProducts);
  return (
    <section className="topRate">
      <h1 className="topRate-title">محبوب ترین محصولات</h1>
      <SliderSection items={topRateProducts} />
    </section>
  );
};

export default TopRate;
