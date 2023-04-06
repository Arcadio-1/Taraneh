import React, { Fragment, useEffect, useState } from "react";
import HotOfWeek from "../BlogSubs/components/hotOfThisWeek/HotOfWeek";
import PostHead from "./components/postHead/PostHead";
import PostData from "./components/postData/PostData";
import SubSelectedPosts from "../BlogSubs/components/selectedPostSlider/SubSelectedPosts";
import TopAddres from "./components/TopAddres";
import {
  getAdProducts,
  getBlogPosts,
} from "../../../store/Blog/getData/BlogGetDataAction";
import { useDispatch } from "react-redux";
import Comments from "./components/Comments/Comments";
const Post = ({ blogPost, comments }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPosts());
    dispatch(getAdProducts());
  });
  return (
    <Fragment>
      <section className="blogPost">
        <TopAddres post={blogPost} />
        <PostHead post={blogPost} />
        <div className="blogPost-body">
          <div className="blogPost-body-main">
            <PostData post={blogPost} />
            <Comments comments={comments} />
          </div>
          <aside className="blogPost-body-aside">
            <HotOfWeek from={0} to={12} showBAd={true} />
          </aside>
        </div>
        <SubSelectedPosts />
      </section>
      {/* )} */}
    </Fragment>
  );
};

export default Post;
