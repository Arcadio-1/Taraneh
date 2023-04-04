import React, { Fragment, useEffect } from "react";
import SubHeader from "./components/header/SubHeader";
import HeroPosts from "./components/heroPosts/HeroPosts";
import SubSelectedPosts from "./components/selectedPostSlider/SubSelectedPosts";
import LastPosts from "./components/lastPosts/LastPosts";
import HotOfWeek from "./components/hotOfThisWeek/HotOfWeek";
import BAd from "./components/ad/BAd";
import SAd from "./components/ad/SAd";
import { useDispatch } from "react-redux";
import {
  getAdProducts,
  getBlogPosts,
} from "../../../store/Blog/getData/BlogGetDataAction";

const BlogSub = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogPosts());
    dispatch(getAdProducts());
  });
  return (
    <Fragment>
      <SubHeader />
      <HeroPosts />
      <SubSelectedPosts />
      <div className="PDrink-hotOfWeekAndAdContainer">
        <LastPosts />
        <div className="PDrink-hotOfWeekAndAdContainer-hotOfWeekAndAd">
          <HotOfWeek from={0} to={8} />
          <BAd from={0} to={4} direction={"vertical"} />
          <SAd from={0} to={4} direction={"vertical"} />
        </div>
      </div>
    </Fragment>
  );
};

export default BlogSub;
