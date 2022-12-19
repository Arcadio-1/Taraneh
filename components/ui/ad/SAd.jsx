import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import TomanIcon from "../Icons/tomanIcon";
import Link from "next/link";
import Image from "next/image";
useState;
const SAd = ({ products, direction, from, to }) => {
  // const adProducts = useSelector((state) => state.getData.adProducts);
  // const status = useSelector((state) => state.ui.getAdProductsStatus);
  const [toShow, setToShow] = useState();

  useEffect(() => {
    // const sAd = adProducts.filter((item) => item.adCat === "s-ad");
    // console.log(sAd);
    setToShow(products.slice(from, to).map((item) => item));
  }, [products, from, to]);

  return (
    <section className="sAd">
      <h2 className="sAd-title">محصولات پیشنهادی</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        className="sAd-list"
        navigation
        // direction="vertical"
        // direction="horizontal"
        direction={direction}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
      >
        {products.map((item) => {
          return (
            <SwiperSlide key={item.id} id={item.id} className="sAd-slide">
              <Link href={`/products/${item.id}`} key={item.id}>
                <div className="sAd-slideContainer" key={item.id}>
                  <div className="sAd-slide-image">
                    <Image
                      src={item.imageLink}
                      width={160}
                      height={160}
                      alt={item.title}
                    />
                  </div>

                  <h4 className="sAd-slide-title">{item.title}</h4>
                  <div className="sAd-slide-down">
                    <div className="sAd-slide-offPersent">
                      <span>{item.price.offPersent}%</span>
                    </div>
                    <span className="sAd-slide-price">{item.price.value}</span>
                    <TomanIcon />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SAd;
