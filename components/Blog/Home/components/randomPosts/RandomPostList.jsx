import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RandomAd1158 from "../ad/RandomAd1158";
import RandomPostItem from "./RandomPostItem";
const RandomPostList = () => {
  const posts = useSelector((state) => state.blogGetData.blogPosts);
  const status = useSelector((state) => state.blogUi.blogPostsStatus);
  const size = useSelector((state) => state.ui.windowWidth);
  const [randomPosts, setRandomPosts] = useState([]);

  useEffect(() => {
    setRandomPosts((Prev) => {
      return (Prev = posts.filter((item) => item.cat === "random"));
    });
  }, [posts]);

  return (
    <div className="randomPosts-list">
      {status && status.status === "success" && (
        <div className="randomPosts-list-container">
          {randomPosts.map((item) => (
            <RandomPostItem key={item.id} item={item} />
          ))}
          {size < 720 && <RandomAd1158 />}
        </div>
      )}
    </div>
  );
};

export default RandomPostList;
