import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TomanIcon from "../../../ui/Icons/tomanIcon";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const SAd = (props) => {
  const adProducts = useSelector((state) => state.getData.adProducts);
  const status = useSelector((state) => state.ui.getAdProductsStatus);
  const [toShow, setToShow] = useState();

  useEffect(() => {
    const sAd = adProducts.filter((item) => item.adCat === "s-ad");
    // console.log(sAd);
    setToShow(sAd.slice(props.from, props.to).map((item) => item));
  }, [adProducts, props]);

  return (
    <section className="sAd">
      <h2 className="sAd-title">محصولات مرتبط</h2>
      {toShow && status && status.status === "Success" && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={"auto"}
          className="sAd-list"
          navigation
          // direction="vertical"
          // direction="horizontal"
          direction={props.direction}
        >
          {toShow.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                id={item.id}
                className="sAd-list-slide"
              >
                <Link to={`/products/${item.id}`} key={item.id}>
                  <div className="sAd-list-item" key={item.id}>
                    <img
                      className="sAd-list-item-image"
                      src={item.imageLink}
                      alt={item.title}
                    />
                    <h3 className="sAd-list-item-title">{item.title}</h3>
                    <div className="sAd-list-item-down">
                      <div className="sAd-list-item-offPersent">
                        <span>{item.price.offPersent}%</span>
                      </div>
                      <span className="sAd-list-item-price">
                        {item.price.value}
                      </span>
                      <TomanIcon />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
};

export default SAd;
