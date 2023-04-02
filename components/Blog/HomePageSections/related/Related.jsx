import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RelatedAd1158 from "../ad/RelatedAd1158";
import RelatedLists from "./RelatedList";

const Related = () => {
  const posts = useSelector((state) => state.blogGetData.blogPosts);
  const status = useSelector((state) => state.blogUi.blogPostsStatus);
  const size = useSelector((state) => state.ui.windowWidth);

  const [buyCoffeePosts, setBuyCoffeePosts] = useState([]);
  const [makingDrinkPosts, setMakingDrinkPosts] = useState([]);
  const [drinkMakingToolsPosts, setDrinkMakingToolsPosts] = useState([]);

  useEffect(() => {
    setBuyCoffeePosts((prev) => {
      return (prev = posts.filter(
        (item) => item.cat === "related-buyingCoffee"
      ));
    });
    setMakingDrinkPosts((prev) => {
      return (prev = posts.filter(
        (item) => item.cat === "related-makingDrink"
      ));
    });
    setDrinkMakingToolsPosts((prev) => {
      return (prev = posts.filter(
        (item) => item.cat === "related-drinkMakingTools"
      ));
    });
  }, [posts]);

  return (
    <section className="related">
      {status && status.status === "success" && (
        <div className="related-container">
          <div className="related-list">
            <h1 className="related-list-title">آموزش های مرتبط با خرید قهوه</h1>
            <RelatedLists list={buyCoffeePosts} />
            <Link href={`blog/coffee`} className="related-list-moreBtn">
              مشاهده مطالب بیشتر
            </Link>
          </div>
          <div className="related-list">
            <h1 className="related-list-title">روش های تهیه نوشیدنی با قهوه</h1>
            <RelatedLists list={makingDrinkPosts} />
            <Link href={`blog/drink`} className="related-list-moreBtn">
              مشاهده مطالب بیشتر
            </Link>
          </div>
          <div className="related-list">
            <h1 className="related-list-title">
              آموزش تعمیر و خرید ابزار تهیه قهوه
            </h1>
            <RelatedLists list={drinkMakingToolsPosts} />
            <Link href={`blog/tools`} className="related-list-moreBtn">
              مشاهده مطالب بیشتر
            </Link>
          </div>
          {size > 720 && <RelatedAd1158 />}
        </div>
      )}
    </section>
  );
};

export default Related;
