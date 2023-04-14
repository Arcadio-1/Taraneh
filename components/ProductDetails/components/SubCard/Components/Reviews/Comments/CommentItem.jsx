import Image from "next/image";
import React, { useEffect } from "react";
import StarIcon from "../../../../../../ui/Icons/StarIcon";
const CommentItem = ({
  comment,
  comments,
  setReplyTo,
  replyTo,
  onTextFocus,
}) => {
  const setReplyToHandler = (item) => {
    onTextFocus();
    setReplyTo((prev) => {
      return (prev = item);
    });
  };

  const nestedComments = (comments || []).map((item) => {
    if (item.parent && item.parent.id === comment.id) {
      return (
        <CommentItem
          key={item.id}
          comment={item}
          type="child"
          comments={comments}
          setReplyTo={setReplyTo}
          replyTo={replyTo}
          onTextFocus={onTextFocus}
        />
      );
    }
  });
  return (
    <div className=" reviwe-item-container border-r-2 border-gray-100">
      <div className="reviwe-item flex gap-5 mr-2 ">
        <div
          className={`reviwe-item-profile ${
            replyTo && replyTo.id === comment.id
              ? "pr-2  border-r-4 border-red-800"
              : ""
          } `}
        >
          <Image
            src={"/image/ui/nika.jpg"}
            alt={"nika"}
            width={60}
            height={60}
          />
        </div>
        <div className="reviwe-item-content flex flex-col items-start justify-start gap-3">
          <div className="">
            <div className="flex">
              <StarIcon isOn={comment.rate >= 1} />
              <StarIcon isOn={comment.rate >= 2} />
              <StarIcon isOn={comment.rate >= 3} />
              <StarIcon isOn={comment.rate >= 4} />
              <StarIcon isOn={comment.rate === 5} />
            </div>
          </div>
          <div className="">
            <p>
              <span className="text-xl">{comment.fullname} - </span>
              <span className="text-gray-400">
                {new Date(comment.date).toLocaleDateString("fa-IR")}
              </span>
            </p>
          </div>
          <div className="">
            <p className="text-lg">{comment.text}</p>
          </div>
          <button
            onClick={setReplyToHandler.bind(null, comment)}
            className="bg-cyan-600 text-white py-1 px-10 rounded-xl text-lg"
          >
            پاسخ
          </button>
        </div>
      </div>
      {nestedComments && (
        <div className="reviwe-item-childContainer">
          <div className="reviwe-item-child">{nestedComments}</div>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
