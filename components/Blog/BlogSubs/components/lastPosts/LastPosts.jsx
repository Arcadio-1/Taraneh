import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SAd from "../ad/SAd";
import BAd from "../ad/BAd";
import LastPostItem from "./LastPostItem";
import Link from "next/link";
import { useRouter } from "next/router";

const LastPosts = () => {
  const router = useRouter();
  const posts = useSelector((state) => state.blogGetData.blogPosts);
  const status = useSelector((state) => state.blogUi.blogPostsStatus);
  const [toShowG1, setToshowG1] = useState([]);
  const [toShowG2, setToshowG2] = useState([]);
  const [toShowG3, setToshowG3] = useState([]);
  const [toShowG4, setToshowG4] = useState([]);
  const [toShowG5, setToshowG5] = useState([]);

  useEffect(() => {
    console.log(posts);
    const allLastPosts = posts.filter((item) => item.cat === "sub-last-posts");
    setToshowG1(allLastPosts.slice(0, 3).map((item) => item));
    setToshowG2(allLastPosts.slice(3, 6).map((item) => item));
    setToshowG3(allLastPosts.slice(6, 9).map((item) => item));
    setToshowG4(allLastPosts.slice(9, 12).map((item) => item));
    setToshowG5(allLastPosts.slice(12, 15).map((item) => item));
  }, [posts]);
  return (
    <section className="subLastPosts">
      <h2 className="subLastPosts-title">آخرین مطالب</h2>
      <div className="subLastPosts-allList ">
        <div className="subLastPosts-list ">
          {toShowG1 &&
            status &&
            status.status === "success" &&
            toShowG1.map((item) => {
              return <LastPostItem key={item.id} item={item} />;
            })}
        </div>
        <div className="subLastPosts-list ">
          {toShowG2 &&
            status.status === "success" &&
            toShowG2.map((item) => {
              return <LastPostItem key={item.id} item={item} />;
            })}
        </div>
        <div className="subLastPosts-allList-ad ">
          <BAd from={0} to={1} />
        </div>
        <BAd from={0} to={2} />
        <div className="subLastPosts-list ">
          {toShowG3 &&
            status.status === "success" &&
            toShowG3.map((item) => {
              return <LastPostItem key={item.id} item={item} />;
            })}
        </div>
        <SAd from={0} to={5} />
        <div className="subLastPosts-list ">
          {toShowG4 &&
            status.status === "success" &&
            toShowG4.map((item) => {
              return <LastPostItem key={item.id} item={item} />;
            })}
        </div>
        <div className="subLastPosts-allList-ad ">
          <BAd from={1} to={2} />
        </div>
        <BAd from={2} to={4} />
        <div className="subLastPosts-list ">
          {toShowG5 &&
            status.status === "success" &&
            toShowG5.map((item) => {
              return <LastPostItem key={item.id} item={item} />;
            })}
        </div>
      </div>
      <Link
        href={`${router.pathname}/posts`}
        className="subLastPosts-seeMoreBtn"
      >
        مشاهده مطالب بیشتر
      </Link>
    </section>
  );
};

export default LastPosts;
