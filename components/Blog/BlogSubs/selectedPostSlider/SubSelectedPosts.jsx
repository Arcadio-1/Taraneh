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
import LoadingSpinner from "../../../ui/LoadingSpiner/loadingSpiner";
import Link from "next/link";
import Image from "next/image";

const SubSelectedPosts = () => {
  const Posts = useSelector((state) => state.getData.blogPosts);
  const [selectedposts, setselectedPosts] = useState([]);
  const status = useSelector((state) => state.ui.getAllBlogPostsStatus);
  const subCat = useSelector((state) => state.ui.blogSub);
  useEffect(() => {
    setselectedPosts((prev) => {
      return (prev = Posts.filter((item) => item.cat === "selected"));
    });
  }, [Posts]);

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
            {!status ||
              (status.status === "Loading" && (
                <SwiperSlide>
                  <LoadingSpinner />
                </SwiperSlide>
              ))}
            {status &&
              status.status === "success" &&
              selectedposts.map((link) => {
                return (
                  <SwiperSlide
                    direction={"vertical"}
                    key={link.id}
                    id={link.id}
                    className="SubSelectedSlider-swiper-slide"
                  >
                    <Link href={`/blog/${subCat}/${link.id}`}>
                      <div className="SubSelectedSlider-swiper-post">
                        <Image
                          height={150}
                          width={150}
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
