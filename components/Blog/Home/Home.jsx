import { Fragment } from "react";
import { useSelector } from "react-redux";
import BHero from "./components/Hero/BHero";
import NewPosts from "./components/newPosts/NewPosts";
import RandomPosts from "./components/randomPosts/RandomPosts";
import Related from "./components/related/Related";
import SelectedSlider from "./components/SelectedSlider/SelectedSlider";
import HomePageLoading from "./LoadingSkelton/HomePageLoading1678";
const BlogIndex = () => {
  const getAllBlogPostsStatus = useSelector(
    (state) => state.blogUi.blogPostsStatus
  );

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
