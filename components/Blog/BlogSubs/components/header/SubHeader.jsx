import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const SubHeader = () => {
  const blogSub = useSelector((state) => state.blogUi.blogSub);

  return (
    <section className="subHeader">
      <div className="subHeader-container">
        {blogSub === "coffee" && (
          <Image
            className="subHeader-img"
            src="/image/subHeders/coffee.png"
            alt="coffee"
            width={300}
            height={300}
          />
        )}
        {blogSub === "drink" && (
          <Image
            className="subHeader-img"
            src="/image/subHeders/drinks.png"
            alt="drinks"
            width={300}
            height={300}
          />
        )}
        {blogSub === "news" && (
          <Image
            className="subHeader-img"
            src="/image/subHeders/news.png"
            alt="news"
            width={300}
            height={300}
          />
        )}
        {blogSub === "tools" && (
          <Image
            className="subHeader-img"
            src="/image/subHeders/tools.png"
            alt="tools"
            width={300}
            height={300}
          />
        )}
      </div>
    </section>
  );
};

export default SubHeader;
