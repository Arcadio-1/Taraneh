import React, { useEffect } from "react";

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
import ProductCardSkeleton from "../productCard/ProductCardSkeleton";
useSelector;

const SliderSection = ({ items, header }) => {
  const list = [1, 2, 3, 4];
  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

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
                  alt="header.title"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </SwiperSlide>
        )}
        {items.length === 0 && (
          <div className="sliderSection-loading">
            {list.map((item) => {
              return (
                <SwiperSlide key={item}>
                  <ProductCardSkeleton />
                </SwiperSlide>
              );
            })}
          </div>
        )}
        {items.length > 0 &&
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
