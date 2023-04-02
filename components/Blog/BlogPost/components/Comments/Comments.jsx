import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsContainer from "./CommentsContainer";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    const getComments = async () => {
      try {
        setStatus({ status: "loading", message: "Loading..." });
        const request = await fetch("/json/Blog/comments.json");
        const response = await request.json();
        if (!request.ok) {
          throw new Error(
            response.error || "somthing Went Wrong in Getting Comments"
          );
        }
        //becuse of internet filtring i can't use firebase server
        const allComments = [];
        for (const key in response) {
          if (key === props.id) {
            allComments.push(...response[key]);
          }
        }
        setComments([...allComments]);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [props]);
  return (
    <div className="blogPost-comment">
      <h3 className="blogPost-comment-title">دیدگاه و سوالات شما</h3>
      <CommentForm />
      <CommentsContainer comments={comments} />
    </div>
  );
};

export default Comments;
