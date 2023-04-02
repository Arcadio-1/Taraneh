import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Post from "../../../components/BLOG/BlogPost/Post";
import {
  getAdProducts,
  getBlogPosts,
} from "../../../Store/Data/getData/getDataActions";
const PostPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPosts());
    dispatch(getAdProducts());
  });
  return (
    <div>
      <Post />
    </div>
  );
};

export default PostPage;
