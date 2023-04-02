import React from "react";
import WriterOfPost from "../../../ui/WriterOfPost";
import PostHeadNotes from "./PostHeadNotes";
import PostHeadViews from "./PostHeadViews";
import LikeAndDislike from "../LikeAndDislike";
import Sharing from "../Sharing";
import DateOfPostNum from "../../../ui/DateOfPostNum";
import { Link } from "react-router-dom";

const PostHead = (props) => {
  const { title, writer, date, views, liked, disLike, notes, imageUrl } =
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
          <Link to={"#"}>
            <img src={imageUrl} alt={title} />
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
        <Link to={"#"}>
          <img src={imageUrl} alt={title} />
        </Link>
      </div>
    </div>
  );
};

export default PostHead;
