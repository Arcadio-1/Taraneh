import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // autoplay={(true, { delay: 3000 })}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="hero-slide">
          <div className="hero-slide-item slide-0">
            <Image
              src={"/image/hero/1.jpg"}
              alt="hero"
              width={1920}
              height={900}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          <div className="hero-slide-item slide-1">
            <Image
              src={"/image/hero/2.jpg"}
              alt="hero"
              width={1920}
              height={900}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          <div className="hero-slide-item slide-2">
            <Image
              src={"/image/hero/3.jpg"}
              alt="hero"
              width={1920}
              height={900}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;
