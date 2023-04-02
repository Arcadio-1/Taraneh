import React, { useEffect } from "react";
import SubHeader from "../../../components/BLOG/BlogSubs/header/SubHeader";
import { Fragment } from "react";
import HeroPosts from "../../../components/BLOG/BlogSubs/heroPosts/HeroPosts";
import { useDispatch, useSelector } from "react-redux";
import {
  getAdProducts,
  getBlogPosts,
} from "../../../Store/Data/getData/getDataActions";
import SubSelectedPosts from "../../../components/BLOG/BlogSubs/selectedPostSlider/SubSelectedPosts";
import LastPosts from "../../../components/BLOG/BlogSubs/lastPosts/LastPosts";
import HotOfWeek from "../../../components/BLOG/BlogSubs/hotOfThisWeek/HotOfWeek";
import BAd from "../../../components/BLOG/BlogSubs/ad/BAd";
import SAd from "../../../components/BLOG/BlogSubs/ad/SAd";
const Drink = () => {
  // const size = useSelector((state) => state.ui.size);
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
          <HotOfWeek />
          <BAd rom={0} to={4} direction={"vertical"} />
          <SAd from={0} to={4} direction={"vertical"} />
        </div>
      </div>
    </Fragment>
  );
};

export default Drink;
