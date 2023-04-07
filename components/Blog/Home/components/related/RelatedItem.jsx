import WriterOfPost from "../../../ui/WriterOfPost";
import DateOfPost from "../../../ui/DateOfPost";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const RelatedItem = (props) => {
  const { id, title, desc, writer, date, imageUrl, sub } = props.item;
  return (
    <article className="related-list-item">
      <Link
        href={`blog/${sub}/${id}/${title}`}
        className="related-list-item-container"
      >
        <div className="related-list-item-image">
          <Image src={imageUrl} alt={title} width={200} height={200} />
        </div>
        <div className="related-list-item-data">
          <h2 className="related-list-item-data-title">{title}</h2>
          <p className="related-list-item-data-desc">
            {desc.substr(0, 200)}...
          </p>
          <div className="related-list-item-data-down">
            <div className="related-list-item-data-info">
              <WriterOfPost postWriter={writer} />
              <DateOfPost postDate={date} />
            </div>
            {/* <span className="related-list-item-data-readMore">
              ادامه مطلب...
            </span> */}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RelatedItem;
