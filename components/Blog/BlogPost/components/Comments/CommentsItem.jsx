import React from "react";
import UserIcon from "../../../../ui/Icons/UserIcon";
import ReplayIcon from "../../../../ui/Icons/ReplayIcon";
import DateOfPostNum from "../../../ui/DateOfPostNum";
import LikeAndDislike from "../../../ui/LikeAndDislike";
const CommentsItem = (props) => {
  const { fullname, date, text, like, dislike } = props.item;
  const nestedComments = (props.item.children || []).map((comment) => {
    return <CommentsItem key={comment.id} item={comment} type="child" />;
  });
  return (
    <div className="padd-2">
      <div className="blogPost-comment-container-body-list-item">
        <div className="blogPost-comment-container-body-list-item-profilePic">
          <UserIcon />
        </div>
        <div className="blogPost-comment-container-body-list-item-body">
          <div className="blogPost-comment-container-body-list-item-head">
            <p className="blogPost-comment-container-body-list-item-name">
              {fullname}
            </p>
            <DateOfPostNum postDate={date} />
            {/* <p>ReplayedTo {replayedTo}</p>
            <p>id {id}</p> */}
          </div>

          <p className="blogPost-comment-container-body-list-item-text">
            {text}
          </p>
          <div className="blogPost-comment-container-body-list-item-down">
            <div className="blogPost-comment-container-body-list-item-likeDislike">
              <LikeAndDislike like={like} dislike={dislike} />
            </div>
            <div className="blogPost-comment-container-body-list-item-replay">
              <ReplayIcon />
              <p className="blogPost-comment-container-body-list-item-replay-title">
                پاسخ دادن
              </p>
            </div>
          </div>
        </div>
      </div>
      {nestedComments}
      <div className="line"></div>
    </div>
  );
};

export default CommentsItem;
