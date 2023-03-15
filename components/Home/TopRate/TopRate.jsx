import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import SliderSection from "../../ui/sliderSection/SliderSection";
const TopRate = () => {
  const products = useSelector((state) => state.getData.products);
  const getProductsStatus = useSelector(
    (state) => state.ui.getAllproductsStatus
  );

  let topRateProducts = [];

  if (getProductsStatus && getProductsStatus.status === "success") {
    let prods = [...products];
    topRateProducts = prods.sort((prodA, prodB) => {
      return prodA.statistics.rate < prodB.statistics.rate ? 1 : -1;
    });
    topRateProducts = topRateProducts.slice(0, 10);
  }

  if (getProductsStatus && getProductsStatus.status !== "error")
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

  if (getProductsStatus && getProductsStatus.status === "error")
    return (
      <section className="topRate">
        <h1 className="topRate-title">محبوب ترین محصولات</h1>
        <p>اتصال به سرور ممکن نیست</p>
      </section>
    );
};

export default TopRate;
