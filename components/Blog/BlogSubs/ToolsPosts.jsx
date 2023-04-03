import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../../../components/BLOG/BlogSubs/postList/PostList";
import {
  getAdProducts,
  getBlogPosts,
} from "../../../Store/Data/getData/getDataActions";
const CoffeePosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPosts());
    dispatch(getAdProducts());
  });
  return (
    <Fragment>
      <PostList category={"tools"} />
    </Fragment>
  );
};

export default CoffeePosts;