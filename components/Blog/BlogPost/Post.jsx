import React, { Fragment } from "react";
import HotOfWeek from "../BlogSubs/components/hotOfThisWeek/HotOfWeek";
import PostHead from "./components/postHead/PostHead";
import PostData from "./components/postData/PostData";
import SubSelectedPosts from "../BlogSubs/components/selectedPostSlider/SubSelectedPosts";
import TopAddres from "./components/TopAddres";
import Comments from "./components/Comments/Comments";

const Post = ({ blogPost, comments }) => {
  return (
    <Fragment>
      <section className="blogPost">
        <TopAddres title={blogPost.title} id={blogPost._id} />
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
    </Fragment>
  );
};

export default Post;
