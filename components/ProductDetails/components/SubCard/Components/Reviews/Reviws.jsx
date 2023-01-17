import React, { useEffect, useState } from "react";
import CommentsList from "./Comments/CommentsList";
import Form from "./Form/Form";
const Reviws = ({ comments, title }) => {
  const [numberOfComments, setNumberOfComments] = useState(0);
  const commentsCounter = () => {};
  // useEffect(() => {
  //   const commentsCounters = () => {
  //     comments.map((item) => {
  //       // console.log(item);
  //       setNumberOfComments((prev) => {
  //         return prev + 1;
  //       });
  //     });
  //   };
  //   commentsCounters();
  // }, [comments]);
  return (
    <div className="subCard-reviwe p-2 flex flex-col gap-5">
      <p className="text-xl">
        <span>{numberOfComments}</span>
        <span> نظرات برای </span>
        <span className="font-bold"> {title} </span>
        <span>ثبت شده</span>
      </p>
      {comments && <CommentsList comments={comments} />}
      {!comments && (
        <div>
          <p className="text-xl text-center">اولین نظر را شما بدهید</p>
        </div>
      )}

      <div className="">
        <Form />
      </div>
    </div>
  );
};

export default Reviws;
