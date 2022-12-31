import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect } from "react";

const MainImage = (props) => {
  const { mainImage, title, subImages } = props;
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  const images = subImages.map((image) => {
    return {
      largeURL: image,
      thumbnailURL: image,
      width: 1500,
      height: 1500,
    };
  });
  console.log(images);
  return (
    <div className="productDetails-image-mainImage">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={"auto"}
        id="my-test-gallery"
        className="sliderSection-swiper pswp-gallery"
        pagination={{
          dynamicBullets: true,
        }}
      >
        {/* <SwiperSlide>
          <Image src={mainImage} width={300} height={300} alt={title} />
        </SwiperSlide> */}
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index} className="sliderSection-swiper-slide">
              <a
                href={image.largeURL}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                key={"my-test-gallery" + "-" + index}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={image.largeURL}
                  width={300}
                  height={300}
                  alt={title}
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainImage;
