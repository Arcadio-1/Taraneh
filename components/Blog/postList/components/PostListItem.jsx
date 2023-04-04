import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import DateOfPost from "../../ui/DateOfPost";
import WriterOfPost from "../../ui/WriterOfPost";
const PostListItem = (props) => {
  const { item } = props;
  const subBlog = useSelector((state) => state.blogUi.blogSub);
  return (
    <article className="postList-postsList-item">
      <Link href={`/blog/${subBlog}/${item._id}`}>
        <Image
          height={150}
          width={150}
          className="postList-postsList-item-image"
          src={item.imageUrl}
          alt={item.title}
        />
        <h3 className="postList-postsList-item-title">{item.title}</h3>
        <p className="postList-postsList-item-desc">
          {item.desc.substr(0, 180)}...
        </p>
        <div className="postList-postsList-item-dateAndWriter">
          <WriterOfPost postWriter={item.writer} />
          <DateOfPost postDate={item.date} />
        </div>
      </Link>
    </article>
  );
};

export default PostListItem;
