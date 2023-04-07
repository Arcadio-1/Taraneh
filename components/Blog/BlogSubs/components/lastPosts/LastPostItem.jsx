import React from "react";
import DateOfPost from "../../../ui/DateOfPost";
import WriterOfPost from "../../../ui/WriterOfPost";
import Link from "next/link";
import Image from "next/image";
const LastPostItem = (props) => {
  const { id, title, imageUrl, writer, date, sub, desc } = props.item;
  return (
    <article className="subLastPosts-list-item">
      <Link href={`${sub}/${id}/${title}`}>
        <Image
          height={150}
          width={150}
          className="subLastPosts-list-item-image"
          src={imageUrl}
          alt={title}
        />
        <h3 className="subLastPosts-list-item-title">{title}</h3>
        <p className="subLastPosts-list-item-desc">{desc.substr(0, 180)}...</p>
        <div className="subLastPosts-list-item-dateAndWriter">
          <WriterOfPost postWriter={writer} />
          <DateOfPost postDate={date} />
        </div>
      </Link>
    </article>
  );
};

export default LastPostItem;
