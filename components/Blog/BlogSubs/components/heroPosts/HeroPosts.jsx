import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HeroPosts = () => {
  const [heroPosts, setHeroPosts] = useState([]);
  const posts = useSelector((state) => state.blogGetData.blogPosts);
  const status = useSelector((state) => state.blogUi.blogPostsStatus);

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
        status.status === "success" &&
        heroPosts.map((item, index) => {
          return (
            <article
              className={`heroPosts-item heroPosts-item-${index}`}
              key={item.id}
            >
              <Link href={`/blog/${item.sub}/${item.id}/${item.title}`}>
                <Image
                  className="heroPosts-item-image"
                  src={item.imageUrl}
                  alt={item.title}
                  width={100}
                  height={100}
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
