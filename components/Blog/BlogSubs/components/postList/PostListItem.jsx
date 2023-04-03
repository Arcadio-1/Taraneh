import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import DateOfPost from "../../ui/DateOfPost";
import WriterOfPost from "../../ui/WriterOfPost";
const PostListItem = (props) => {
  const subBlog = useSelector((state) => state.ui.blogSub);
  return (
    <article className="postList-postsList-item">
      <Link href={`/blog/${subBlog}/${props.item.id}`}>
        <Image
          height={150}
          width={150}
          className="postList-postsList-item-image"
          src={props.item.imageUrl}
          alt={props.item.title}
        />
        <h3 className="postList-postsList-item-title">{props.item.title}</h3>
        <p className="postList-postsList-item-desc">
          {props.item.desc.substr(0, 180)}...
        </p>
        <div className="postList-postsList-item-dateAndWriter">
          <WriterOfPost postWriter={props.item.writer} />
          <DateOfPost postDate={props.item.date} />
        </div>
      </Link>
    </article>
  );
};

export default PostListItem;
