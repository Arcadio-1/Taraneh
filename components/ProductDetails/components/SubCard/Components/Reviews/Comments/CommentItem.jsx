import Image from "next/image";
import React from "react";
import StarIcon from "../../../../../../ui/Icons/StarIcon";
const CommentItem = ({ comment }) => {
  const nestedComments = (comment.children || []).map((item) => {
    return <CommentItem key={item.id} comment={item} type="child" />;
  });
  return (
    <div className="">
      <div className="reviwe-item flex gap-5">
        <div className="reviwe-item-profile">
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
          <button className="bg-cyan-600 text-white py-1 px-10 rounded-xl text-lg">
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
