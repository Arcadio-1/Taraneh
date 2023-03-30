import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../ui/LoadingSpiner/loadingSpiner";
import SliderSection from "../../ui/sliderSection/SliderSection";
const TopRate = () => {
  const products = useSelector((state) => state.getData.products);
  const getProductsStatus = useSelector(
    (state) => state.ui.getAllproductsStatus
  );

  const [topRateProducts, setTopRateProducts] = useState([]);

  useEffect(() => {
    console.log(getProductsStatus);
  }, [getProductsStatus]);

  // useEffect(() => {
  //   console.log(topRateProducts);
  // }, [topRateProducts]);

  useEffect(() => {
    if (getProductsStatus.status === "success") {
      let prods = [...products];
      setTopRateProducts((prev) => {
        return (prev = prods.sort((prodA, prodB) => {
          return prodA.statistics.rate < prodB.statistics.rate ? 1 : -1;
        }));
      });
      setTopRateProducts((prev) => {
        return (prev = prev.slice(0, 10));
      });
    }
  }, [products, getProductsStatus]);

  return (
    <section className="topRate">
      <div className="topRate-slidHeader-background">
        <Image
          src={"/image/ui/topRateBack.webp"}
          alt="محبوب ترین ها"
          width={900}
          height={500}
        />
      </div>
      <SliderSection
        items={topRateProducts}
        header={{
          title: "محبوب ترین ها",
          imgLink: "/image/ui/toprateVector.png",
        }}
      />
    </section>
  );
};

export default TopRate;
