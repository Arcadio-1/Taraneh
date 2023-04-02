import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroPosts = () => {
  const [heroPosts, setHeroPosts] = useState([]);
  const posts = useSelector((state) => state.getData.blogPosts);
  const status = useSelector((state) => state.ui.getAllBlogPostsStatus);
  useEffect(() => {
    setHeroPosts((prev) => {
      return (prev = posts.filter((item) => {
        return item.cat === "blogSub-heroPosts";
      }));
    });
  }, [posts]);
  return (
    <section className="heroPosts">
      {heroPosts &&
        status &&
        status.status === "success" &&
        heroPosts.map((item, index) => {
          return (
            <article
              className={`heroPosts-item heroPosts-item-${index}`}
              key={item.id}
            >
              <Link to={`/drink/${item.id}`}>
                <img
                  className="heroPosts-item-image"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className="heroPosts-item-titleBg">
                  <h2 className="heroPosts-item-title">{item.title}</h2>
                </div>
              </Link>
            </article>
          );
        })}
    </section>
  );
};

export default HeroPosts;
