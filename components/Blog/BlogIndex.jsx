import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BHero from "../../components/BLOG/HomePageSections/Hero/BHero";
import NewPosts from "../../components/BLOG/HomePageSections/newPosts/NewPosts";
import RandomPosts from "../../components/BLOG/HomePageSections/randomPosts/RandomPosts";
import Related from "../../components/BLOG/HomePageSections/related/Related";
import SelectedSlider from "../../components/BLOG/HomePageSections/SelectedSlider/SelectedSlider";
import HomePageLoading from "../../components/BLOG/LoadingSkelton/homePage/HomePageLoading1678";
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
