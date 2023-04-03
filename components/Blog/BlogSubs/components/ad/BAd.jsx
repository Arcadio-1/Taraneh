import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BAdItem from "./BAdItem";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const BAd = (props) => {
  const adProducts = useSelector((state) => state.blogGetData.blogAdProducts);
  const status = useSelector((state) => state.blogUi.blogAdProductsStatus);
  const [toShow, setToShow] = useState();
  useEffect(() => {
    const allBAd = adProducts.filter((item) => item.adCat === "b-ad");
    setToShow(allBAd.slice(props.from, props.to).map((item) => item));
  }, [adProducts, props]);
  return (
    <section className="bAd">
      <h2 className="bAd-title">محصولات پیشنهادی</h2>
      {toShow && status.status === "success" && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={"auto"}
          className="bAd-list"
          // navigation
          // direction="vertical"
          // direction="horizontal"
          direction={props.direction}
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
        >
          {toShow.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                id={item.id}
                className="bAd-list-slide"
              >
                <BAdItem item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default BAd;
