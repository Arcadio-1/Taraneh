import React from "react";
import DateOfPost from "../../ui/DateOfPost";
import WriterOfPost from "../../ui/WriterOfPost";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
const LastPostItem = (props) => {
  const subCat = useSelector((state) => state.ui.blogSub);
  return (
    <article className="subLastPosts-list-item">
      <Link href={`${subCat}/${props.item.id}`}>
        <Image
          height={150}
          width={150}
          className="subLastPosts-list-item-image"
          src={props.item.imageUrl}
          alt={props.item.title}
        />
        <h3 className="subLastPosts-list-item-title">{props.item.title}</h3>
        <p className="subLastPosts-list-item-desc">
          {props.item.desc.substr(0, 180)}...
        </p>
        <div className="subLastPosts-list-item-dateAndWriter">
          <WriterOfPost postWriter={props.item.writer} />
          <DateOfPost postDate={props.item.date} />
        </div>
      </Link>
    </article>
  );
};

export default LastPostItem;
