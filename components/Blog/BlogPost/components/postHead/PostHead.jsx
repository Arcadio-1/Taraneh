import React from "react";
import WriterOfPost from "../../../ui/WriterOfPost";
import PostHeadNotes from "./PostHeadNotes";
import PostHeadViews from "./PostHeadViews";
import LikeAndDislike from "../LikeAndDislike";
import Sharing from "../Sharing";
import DateOfPostNum from "../../../ui/DateOfPostNum";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

const PostHead = (props) => {
  const sub = useSelector((state) => state.blogUi.blogSub);
  const { title, writer, date, views, liked, disLike, notes, imageUrl, _id } =
    props.post;
  return (
    <div className="blogPost-head">
      <div className="blogPost-head-data">
        <div className="blogPost-head-title">
          <h1>{title}</h1>
        </div>
        <div className="blogPost-head-writerAndDate">
          <WriterOfPost postWriter={writer} />
          <DateOfPostNum postDate={date} />
        </div>
        <div className="blogPost-head-innerImage">
          <Link href={`/blog/${sub}/${_id}/${title}`}>
            <Image src={imageUrl} alt={title} width={200} height={200} />
          </Link>
        </div>
        <PostHeadNotes notes={notes} />
        <div className="blogPost-head-viewsAndLike">
          <PostHeadViews views={views} />
          <LikeAndDislike like={liked} dislike={disLike} />
        </div>
        <Sharing />
      </div>
      <div className="blogPost-head-imageContainer">
        <Link href={`/blog/${sub}/${_id}/${title}`}>
          <Image src={imageUrl} alt={title} width={200} height={200} />
        </Link>
      </div>
    </div>
  );
};

export default PostHead;
