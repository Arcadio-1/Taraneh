import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../../ui/LoadingSpiner/loadingSpiner";
import Link from "next/link";
import Image from "next/image";

const SubSelectedPosts = () => {
  const posts = useSelector((state) => state.blogGetData.blogPosts);
  const status = useSelector((state) => state.blogUi.blogPostsStatus);
  const subCat = useSelector((state) => state.blogUi.blogSub);

  const [selectedposts, setselectedPosts] = useState([]);

  useEffect(() => {
    setselectedPosts((prev) => {
      return (prev = posts.filter((item) => item.cat === "selected"));
    });
  }, [posts]);

  return (
    <section className="SubSelectedSlider">
      <div className="SubSelectedSlider-container">
        <div className="SubSelectedSlider-container-swiper">
          <h2 className="SubSelectedSlider-title">مطالب منتخب</h2>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={"auto"}
            className="SubSelectedSlider-swiper"
            navigation
          >
            {status.status === "loading" && (
              <SwiperSlide>
                <LoadingSpinner />
              </SwiperSlide>
            )}
            {status.status === "success" &&
              selectedposts.map((link) => {
                return (
                  <SwiperSlide
                    direction={"vertical"}
                    key={link.id}
                    id={link.id}
                    className="SubSelectedSlider-swiper-slide"
                  >
                    <Link href={`/blog/${link.sub}/${link.id}`}>
                      <div className="SubSelectedSlider-swiper-post">
                        <Image
                          height={300}
                          width={300}
                          className="SubSelectedSlider-swiper-post-img"
                          src={link.imageUrl}
                          alt={link.title}
                        />
                        <h3 className="SubSelectedSlider-swiper-post-title">
                          {link.title}
                        </h3>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SubSelectedPosts;
