import React, { Fragment, useEffect, useState } from "react";
import SubHeader from "../BlogSubs/components/header/SubHeader";
import FilterPostList from "./components/FilterPostList";
import Pagination from "./components/Pagination";
import PostListItem from "./components/PostListItem";
import SortPostList from "./components/SortPostList";
import SubSelectedPosts from "../BlogSubs/components/selectedPostSlider/SubSelectedPosts";
import { useRouter } from "next/router";

const filtring = (posts, filterType) => {
  if (!filterType || filterType === "all") {
    return posts;
  }
  if (filterType) {
    const filterd = posts.filter((item) => item.postType === filterType);
    return filterd;
  }
};
const sorting = (posts, sortType) => {
  let tempPosts = [...posts];
  switch (sortType) {
    case "1":
      return tempPosts.sort((postA, postB) => {
        return postA.date < postB.date ? 1 : -1;
      });
    case "2":
      return tempPosts.sort((postA, postB) => {
        return postA.views < postB.views ? 1 : -1;
      });
    case "3":
      return tempPosts.sort((postA, postB) => {
        return postA.liked < postB.liked ? 1 : -1;
      });
    default:
      return tempPosts.sort((postA, postB) => {
        return postA.date < postB.date ? 1 : -1;
      });
  }
};
const pagenation = (posts) => {
  const postPerPage = 12;
  const numberOfPages = Math.ceil(posts.length / postPerPage);
  const pagenatedPost = Array.from({ length: numberOfPages }, (_, index) => {
    let start = index * postPerPage;
    return posts.slice(start, start + postPerPage);
  });
  return { pagenatedPost, numberOfPages };
};
const PostForPage = (posts, pageNum) => {
  if (!pageNum) {
    return posts[0];
  }
  if (pageNum) {
    return posts[pageNum - 1];
  }
};
const PostList = () => {
  const [post, setPost] = useState();
  const [status, setstatus] = useState({
    status: null,
    title: null,
    message: null,
  });
  useEffect(() => {
    const getdata = async () => {
      setstatus({
        status: "loading",
        title: "در حال دریافت",
        message: "در حال دریافت لیست مطالب",
      });
      try {
        const request = await fetch("/api/blog/data/getAllPostLong", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!request.ok) {
          throw new Error(response.error.message || "خطا در دریافت لیست مطالب");
        }
        const response = await request.json();
        if (response.status !== "success") {
          throw new Error("خطا در دریافت اطلاعات لیست مطالب");
        }
        const temPosts = [];
        for (const key in response.data) {
          temPosts.push({ ...response.data[key] });
        }
        setPost((prev) => {
          return (prev = temPosts);
        });
        setstatus({
          status: "success",
          title: "با موفقیت دریافت شد",
          message: "لیست مطالب با موفقیت دریافت شد",
        });
      } catch (error) {
        setstatus({
          status: "error",
          title: "در حال دریافت",
          message: error.message,
        });
      }
    };
    getdata();
  }, []);

  const router = useRouter();
  const pageNum = router.query.page;
  const sortType = router.query.sort;
  const filterType = router.query.type;
  let pagenatedPosts;
  if (post) {
    const filterdPosts = filtring(post, filterType);
    const sortedPosts = sorting(filterdPosts, sortType);
    pagenatedPosts = pagenation(sortedPosts);
  }
  let prodPerPage = [];
  if (pagenatedPosts && pagenatedPosts.pagenatedPost.length > 0) {
    prodPerPage = PostForPage(pagenatedPosts.pagenatedPost, pageNum);
  }
  return (
    <Fragment>
      <SubHeader />
      <section className="postList">
        <div className="postList-filterAndSort">
          <SortPostList filterType={filterType} />
          <FilterPostList sortType={sortType} />
        </div>
        <div className="postList-postsList">
          <h3 className="postList-postsList-title">لیست مطالب</h3>
          <div className="postList-postsList-container">
            {post &&
              status.status === "success" &&
              prodPerPage.map((item) => {
                return <PostListItem key={item._id} item={item} />;
              })}
          </div>
        </div>
        <div className="postList-pagination">
          {post && status.status === "success" && (
            <Pagination
              filterType={filterType}
              sortType={sortType}
              propsPageNum={pageNum}
              numberOfPages={pagenatedPosts.numberOfPages}
            />
          )}
        </div>
      </section>
      <SubSelectedPosts />
    </Fragment>
  );
};

export default PostList;
