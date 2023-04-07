import React from "react";
import MainNewPost from "./MainNewPost";
import NewPostList from "./NewPostList/NewPostList";

const NewPosts = () => {
  return (
    <section className="newPosts">
      <h1 className="newPosts-title">آخرین مطالب</h1>
      <div className="newPosts-container">
        <NewPostList />
        <MainNewPost />
      </div>
    </section>
  );
};

export default NewPosts;
