import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DateOfPost from "../../ui/DateOfPost";
import WriterOfPost from "../../ui/WriterOfPost";
const PostListItem = (props) => {
  const subBlog = useSelector((state) => state.ui.blogSub);
  return (
    <article className="postList-postsList-item">
      <Link to={`/blog/${subBlog}/${props.item.id}`}>
        <img
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
