import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../ui/LoadingSpiner/loadingSpiner";
import SliderSection from "../../ui/sliderSection/SliderSection";

const FrequentPurchases = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProduct = async () => {
      const request = await fetch("/api/helperAPI/getAdProducts", {
        method: "GET",
      });
      const data = await request.json();
      // console.log(data);

      if (data.status === "success") {
        setProducts((prev) => {
          return (prev = { status: data.status, data: data.products });
        });
      }
    };
    getProduct();
  }, []);

  if (!products) {
    return <LoadingSpinner text={"در حال بارگزاری"} />;
  }
  if (products && products.status === "success") {
    return (
      <section className="frequentPurchases">
        <h1 className="title">بازدید های اخیر </h1>
        <SliderSection items={products.data} />
      </section>
    );
  }
};

export default FrequentPurchases;
