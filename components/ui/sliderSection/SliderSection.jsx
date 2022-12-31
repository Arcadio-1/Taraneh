import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import LoadingSpinner from "../LoadingSpiner/loadingSpiner";
import ProductCard from "../productCard/ProductCard";
import { useSelector } from "react-redux";
import TopRateHeader from "../../Home/TopRate/TopRateHeader";
useSelector;

const SliderSection = (props) => {
  const status = useSelector((state) => state.ui.getAllproductsStatus);
  const { items } = props;
  return (
    <section className="sliderSection">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={10}
        slidesPerView={"auto"}
        className="sliderSection-swiper"
        navigation
      >
        <SwiperSlide>
          <TopRateHeader />
        </SwiperSlide>
        {status && status.status === "loading" && (
          <div className="sliderSection-loading">
            <LoadingSpinner text={"در حال بارگزاری محصولات"} />
          </div>
        )}
        {status &&
          status.status === "success" &&
          items.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                id={item.id}
                className="sliderSection-swiper-slide"
              >
                <ProductCard item={item} />
              </SwiperSlide>
            );
          })}
        {status && status.status === "error" && (
          <SwiperSlide>
            <p>cant get Data</p>
          </SwiperSlide>
        )}
      </Swiper>
    </section>
  );
};

export default SliderSection;
