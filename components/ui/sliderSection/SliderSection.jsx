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
import Image from "next/image";
useSelector;

const SliderSection = ({ items, header }) => {
  return (
    <section className="sliderSection">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={10}
        slidesPerView={"auto"}
        className="sliderSection-swiper"
        navigation
      >
        {header && (
          <SwiperSlide>
            <div className="slidHeader">
              <p className="slidHeader-title">{header.title}</p>

              <div className="slidHeader-image">
                <Image
                  src={header.imgLink}
                  alt="محبوب ترین ها"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </SwiperSlide>
        )}
        {!items && (
          <div className="sliderSection-loading">
            <LoadingSpinner text={"در حال بارگزاری محصولات"} />
          </div>
        )}
        {items &&
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
