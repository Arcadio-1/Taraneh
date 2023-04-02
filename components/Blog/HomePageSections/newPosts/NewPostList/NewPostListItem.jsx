import Image from "next/image";
import Link from "next/link";
import React from "react";
import DateOfPost from "../../../ui/DateOfPost";
import WriterOfPost from "../../../ui/WriterOfPost";

const NewPostListItem = (props) => {
  const { id, title, date, writer, imageUrl } = props.item;
  return (
    <Link href={id} className="newPosts-list-item">
      <div className="newPosts-list-item-image">
        <Image src={imageUrl} alt={title} width={200} height={200} />
      </div>
      <div className="newPosts-list-item-data">
        <h2 className="newPosts-list-item-data-title">{title}</h2>
        <div className="newPosts-list-item-data-dateAndWriter">
          <DateOfPost postDate={date} />
          <WriterOfPost postWriter={writer} />
        </div>
      </div>
    </Link>
  );
};

export default NewPostListItem;
