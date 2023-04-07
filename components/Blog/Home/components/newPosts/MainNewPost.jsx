import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DateOfPost from "../../../ui/DateOfPost";
import WriterOfPost from "../../../ui/WriterOfPost";
import Link from "next/link";

const MainNewPost = () => {
  const posts = useSelector((state) => state.blogGetData.blogPosts);
  const status = useSelector((state) => state.blogUi.blogPostsStatus);
  const [lastPost, setLastPost] = useState();

  useEffect(() => {
    setLastPost((prev) => {
      let newMain = [];
      newMain = posts.filter((item) => item.cat === "new-main-post");
      return (prev = newMain[0]);
    });
  }, [posts]);

  return (
    <div className="newPosts-main">
      {lastPost && status.status === "success" && (
        <div className="newPosts-main-container">
          <div className="newPosts-main-image">
            <Link
              href={`blog/${lastPost.sub}/${lastPost.id}/${lastPost.title}`}
            >
              <Image
                src={lastPost.imageUrl}
                alt={lastPost.title}
                width={300}
                height={300}
              />
            </Link>
          </div>
          <div className="newPosts-main-dateAndWriter">
            <DateOfPost postDate={lastPost.date} />
            <WriterOfPost postWriter={lastPost.writer} />
          </div>
          <h1 className="newPosts-main-title">{lastPost.title}</h1>
          <p className="newPosts-main-description">{lastPost.desc}</p>
          <Link href={`blog/${lastPost.sub}/${lastPost.id}`}>
            <p className="newPosts-main-raedMore">بیشر بخوانید</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainNewPost;
