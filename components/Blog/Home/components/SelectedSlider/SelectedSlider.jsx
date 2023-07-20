import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../../ui/LoadingSpiner/loadingSpiner";
import Link from "next/link";
import Image from "next/image";

const SelectedSlider = () => {
  const Posts = useSelector((state) => state.blogGetData.blogPosts);
  const [selectedposts, setselectedPosts] = useState([]);
  const status = useSelector((state) => state.blogUi.blogPostsStatus);

  useEffect(() => {
    if (Posts) {
      setselectedPosts((prev) => {
        return (prev = Posts.filter((item) => item.cat === "selected"));
      });
    }
  }, [Posts]);

  return (
    <section className="selectedPostsSlider">
      <div className="selectedPostsSlider-container">
        <h1 className="selectedPostsSlider-title">مطالب منتخب</h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={"auto"}
          className="selectedPostsSlider-swiper"
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
                  key={link.id}
                  id={link.id}
                  className="selectedPostsSlider-swiper-slide"
                >
                  <Link href={`/blog/${link.sub}/${link.id}/${link.title}`}>
                    <div className="selectedPostsSlider-swiper-post">
                      <Image
                        className="selectedPostsSlider-swiper-post-img"
                        src={link.imageUrl}
                        alt={link.title}
                        width={200}
                        height={200}
                      />
                      <h3 className="selectedPostsSlider-swiper-post-title">
                        {link.title}
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default SelectedSlider;
