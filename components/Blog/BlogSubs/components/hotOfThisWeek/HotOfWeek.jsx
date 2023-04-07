import React, { Fragment, useEffect, useState } from "react";
import HotOfWeekItem from "./HotOfWeekItem";
import { useSelector } from "react-redux";
import SAd from "../ad/SAd";
import BAd from "../ad/BAd";

const HotOfWeek = (props) => {
  const posts = useSelector((state) => state.blogGetData.blogPosts);
  const blogSub = useSelector((state) => state.blogUi.blogSub);

  const status = useSelector((state) => state.blogUi.blogPostsStatus);
  const [hotOfWeek, setHotOfWeek] = useState();
  useEffect(() => {
    const allHotOfWeek = posts.filter((item) => item.cat === "hotOfWeek");
    setHotOfWeek((prev) => {
      return (prev = allHotOfWeek
        .slice(props.from, props.to)
        .map((item) => item));
    });
  }, [posts, props.from, props.to]);
  return (
    <section className="hotOfWeek">
      <h2 className="hotOfWeek-title">مطالب داغ هفته</h2>
      {hotOfWeek && status.status === "success" && (
        <div className="hotOfWeek-list">
          {hotOfWeek.map((item, index) => {
            return (
              <Fragment key={item.id}>
                {index > 3 && index % 4 === 0 && props.showBAd && (
                  <Fragment>
                    <BAd from={0} to={4} direction={"horizontal"} />
                    <BAd from={4} to={8} direction={"horizontal"} />
                  </Fragment>
                )}
                <HotOfWeekItem key={item.id} item={item} blogSub={blogSub} />
              </Fragment>
            );
          })}

          {props.showSAd && <SAd from={0} to={1} />}
          {props.showSAd && <SAd from={1} to={2} />}
        </div>
      )}
      <div></div>
    </section>
  );
};

export default HotOfWeek;
