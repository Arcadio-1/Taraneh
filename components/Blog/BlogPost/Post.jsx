import React, { Fragment, useEffect, useState } from "react";
import HotOfWeek from "../BlogSubs/hotOfThisWeek/HotOfWeek";
import PostHead from "./components/postHead/PostHead";
import PostData from "./components/postData/PostData";
import Comments from "./components/Comments/Comments";
import SubSelectedPosts from "../BlogSubs/selectedPostSlider/SubSelectedPosts";
import TopAddres from "./components/TopAddres";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Post = () => {
  const params = useParams();
  const { postId } = params;
  const subCat = useSelector((state) => state.ui.blogSub);
  const [status, setStatus] = useState();
  const [blogPost, setBlogPost] = useState(null);
  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setStatus({ status: "loading", message: "Loading" });
        const request = await fetch(
          `/json/Blog/categorised/${subCat}Posts.json`
        );
        const response = await request.json();
        if (!request.ok) {
          throw new Error(
            response.error || "something went Wrong in geting Posts"
          );
        }
        const postList = [];
        for (const key in response) {
          postList.push({ ...response[key] });
        }
        const post = postList.filter((item) => item.id === postId);
        setBlogPost(...post);
        setStatus({ status: "success", message: "Successfully" });
      } catch (error) {
        setStatus({ status: "error", message: error });
      }
    };
    if (subCat) {
      getAllPosts();
    }
  }, [subCat, postId]);
  return (
    <Fragment>
      {blogPost && status && status.status === "success" && (
        <section className="blogPost">
          <TopAddres post={blogPost} />
          <PostHead post={blogPost} />
          <div className="blogPost-body">
            <div className="blogPost-body-main">
              <PostData post={blogPost} />
              <Comments id={blogPost.id} />
            </div>
            <aside className="blogPost-body-aside">
              <HotOfWeek from={0} to={12} showBAd={true} />
              {/* <HotOfWeek from={6} to={12} /> */}
            </aside>
          </div>
          <SubSelectedPosts />
        </section>
      )}
    </Fragment>
  );
};

export default Post;
