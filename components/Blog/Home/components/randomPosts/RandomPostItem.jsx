import React from "react";
import WriterOfPost from "../../../ui/WriterOfPost";
import DateOfPost from "../../../ui/DateOfPost";
import Link from "next/link";
import Image from "next/image";

const RandomPostItem = (props) => {
  const { title, id, sub, writer, date, imageUrl, desc } = props.item;
  return (
    <article className="randomPosts-list-item">
      <Link href={`blog/${sub}/${id}/${title}`}>
        <div className="randomPosts-list-item-image">
          <Image src={imageUrl} alt={title} width={200} height={200} />
        </div>
        <div className="randomPosts-list-item-data">
          <h1 className="randomPosts-list-item-title">{title}</h1>
          <p className="randomPosts-list-item-desc">{desc.substr(0, 250)}...</p>
          <div className="randomPosts-list-item-info">
            <WriterOfPost postWriter={writer} />
            <DateOfPost postDate={date} />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RandomPostItem;
