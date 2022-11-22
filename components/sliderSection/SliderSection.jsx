import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import LoadingSpinner from "../ui/LoadingSpiner/loadingSpiner";
import ProductCard from "../ui/productCard/ProductCard";
import { useSelector } from "react-redux";
useSelector;

const SliderSection = (props) => {
  const status = useSelector((state) => state.ui.getAllproductsStatus);

  const { items } = props;
  return (
    <section className="sliderSection">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={"auto"}
        className="sliderSection-swiper"
        navigation
      >
        {status && status.status === "loading" && (
          <SwiperSlide>
            <LoadingSpinner />
          </SwiperSlide>
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
      </Swiper>
    </section>
  );
};

export default SliderSection;
