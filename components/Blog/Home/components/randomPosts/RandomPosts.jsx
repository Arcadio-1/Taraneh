import React from "react";
import RandomAd1158 from "../ad/RandomAd1158";
import RandomPostList from "./RandomPostList";
import { useSelector } from "react-redux";
const RandomPosts = () => {
  const size = useSelector((state) => state.ui.windowWidth);
  return (
    <section className="randomPosts">
      <div className="randomPosts-container">
        <div>
          <h1 className="randomPosts-title">مطالب تصادفی</h1>
          <RandomPostList />
        </div>
        {size > 720 && <RandomAd1158 />}
      </div>
    </section>
  );
};

export default RandomPosts;
