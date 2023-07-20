import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewPostListItem from "./NewPostListItem";

const NewPostList = () => {
  const posts = useSelector((state) => state.blogGetData.blogPosts);
  const status = useSelector((state) => state.blogUi.blogPostsStatus);

  const [newPost, setNewPost] = useState();

  useEffect(() => {
    if (posts) {
      setNewPost((prev) => {
        return (prev = posts.filter((item) => item.cat === "new-posts"));
      });
    }
  }, [posts]);
  return (
    <div className="newPosts-list">
      {newPost &&
        status.status === "success" &&
        newPost.map((item) => {
          return <NewPostListItem key={item.id} item={item} />;
        })}
    </div>
  );
};

export default NewPostList;
