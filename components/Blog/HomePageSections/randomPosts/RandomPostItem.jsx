import React from "react";
import WriterOfPost from "../../ui/WriterOfPost";
import DateOfPost from "../../ui/DateOfPost";
import Link from "next/link";
import Image from "next/image";

const RandomPostItem = (props) => {
  return (
    <article className="randomPosts-list-item">
      <Link href={props.item.id}>
        <div className="randomPosts-list-item-image">
          <Image
            src={props.item.imageUrl}
            alt={props.item.title}
            width={200}
            height={200}
          />
        </div>
        <div className="randomPosts-list-item-data">
          <h1 className="randomPosts-list-item-title">{props.item.title}</h1>
          <p className="randomPosts-list-item-desc">
            {props.item.desc.substr(0, 250)}...
          </p>
          <div className="randomPosts-list-item-info">
            <WriterOfPost postWriter={props.item.writer} />
            <DateOfPost postDate={props.item.date} />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RandomPostItem;
