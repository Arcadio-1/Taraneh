import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BHero from "./HomePageSections/Hero/BHero";
import NewPosts from "./HomePageSections/newPosts/NewPosts";
import RandomPosts from "./HomePageSections/randomPosts/RandomPosts";
import Related from "./HomePageSections/related/Related";
import SelectedSlider from "./HomePageSections/SelectedSlider/SelectedSlider";
import HomePageLoading from "./LoadingSkelton/homePage/HomePageLoading1678";
import {
  getAdProducts,
  getBlogPosts,
} from "../../store/Blog/getData/BlogGetDataAction";
const BlogIndex = () => {
  const dispatch = useDispatch();
  const getAllBlogPostsStatus = useSelector(
    (state) => state.blogUi.blogPostsStatus
  );

  useEffect(() => {
    dispatch(getBlogPosts());
    dispatch(getAdProducts());
  }, [dispatch]);
  return (
    <Fragment>
      {getAllBlogPostsStatus.status === "success" && (
        <Fragment>
          <BHero />
          <SelectedSlider />
          <NewPosts />
          <RandomPosts />
          <Related />
        </Fragment>
      )}
      {getAllBlogPostsStatus.status === "loading" && <HomePageLoading />}
    </Fragment>
  );
};
export default BlogIndex;
