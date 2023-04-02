import React from "react";
import { useSelector } from "react-redux";

const SubHeader = () => {
  const blogSub = useSelector((state) => state.ui.blogSub);
  // console.log(blogSub);
  return (
    <section className="subHeader">
      <div className="subHeader-container">
        {blogSub === "coffee" && (
          <img
            className="subHeader-img"
            src="/image/subHeders/coffee.png"
            alt=""
          />
        )}
        {blogSub === "drink" && (
          <img
            className="subHeader-img"
            src="/image/subHeders/drinks.png"
            alt=""
          />
        )}
        {blogSub === "news" && (
          <img
            className="subHeader-img"
            src="/image/subHeders/news.png"
            alt=""
          />
        )}
        {blogSub === "tools" && (
          <img
            className="subHeader-img"
            src="/image/subHeders/tools.png"
            alt=""
          />
        )}
      </div>
    </section>
  );
};

export default SubHeader;
