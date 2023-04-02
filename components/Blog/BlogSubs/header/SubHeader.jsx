import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const SubHeader = () => {
  const blogSub = useSelector((state) => state.ui.blogSub);
  // console.log(blogSub);
  return (
    <section className="subHeader">
      <div className="subHeader-container">
        {blogSub === "coffee" && (
          <Image
            className="subHeader-img"
            src="/image/subHeders/coffee.png"
            alt="coffee"
            width={50}
            height={50}
          />
        )}
        {blogSub === "drink" && (
          <Image
            className="subHeader-img"
            src="/image/subHeders/drinks.png"
            alt="drinks"
            width={50}
            height={50}
          />
        )}
        {blogSub === "news" && (
          <Image
            className="subHeader-img"
            src="/image/subHeders/news.png"
            alt="news"
            width={50}
            height={50}
          />
        )}
        {blogSub === "tools" && (
          <Image
            className="subHeader-img"
            src="/image/subHeders/tools.png"
            alt="tools"
            width={50}
            height={50}
          />
        )}
      </div>
    </section>
  );
};

export default SubHeader;
