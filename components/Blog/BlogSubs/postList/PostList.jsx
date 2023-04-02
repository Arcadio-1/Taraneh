import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubHeader from "../header/SubHeader";
import FilterPostList from "./FilterPostList";
import Pagination from "./Pagination";
import PostListItem from "./PostListItem";
import SortPostList from "./SortPostList";
import SubSelectedPosts from "../selectedPostSlider/SubSelectedPosts";
// import { useSelector } from "react-redux";

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
const PostList = (props) => {
  const [post, setPost] = useState();
  const [status, setstatus] = useState();
  useEffect(() => {
    const getdata = async () => {
      setstatus({ status: "loading", message: "Loading..." });
      try {
        const request = await fetch(
          `/json/Blog/categorised/${props.category}Posts.json`
        );
        const response = await request.json();
        if (!request.ok) {
          throw new Error(
            response.error.message ||
              "somthing went Wrong in geting categorised posts"
          );
        }
        const posts = [];
        for (const key in response) {
          posts.push({ ...response[key] });
        }
        // console.log(posts);
        setPost((prev) => {
          return (prev = posts);
        });
        setstatus({ status: "success", message: "successfuly..." });
      } catch (error) {
        setstatus({ status: "error", message: error });
      }
    };
    getdata();
  }, [props.category]);

  const location = useLocation();
  const urlParam = new URLSearchParams(location.search);
  const pageNum = urlParam.get("page");
  const sortType = urlParam.get("sort");
  const filterType = urlParam.get("type");
  let pagenatedPosts;
  if (post) {
    const filterdPosts = filtring(post, filterType);
    const sortedPosts = sorting(filterdPosts, sortType);
    pagenatedPosts = pagenation(sortedPosts);

    // console.log(pagenatedPosts.pagenatedPost);
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
              status &&
              status.status === "success" &&
              prodPerPage.map((item) => {
                return (
                  <PostListItem
                    key={item.id}
                    item={item}
                    cat={props.category}
                  />
                );
              })}
          </div>
        </div>
        <div className="postList-pagination">
          {post && status && status.status === "success" && (
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
