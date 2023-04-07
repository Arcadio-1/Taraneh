import React from "react";
import Post from "../../../../components/Blog/BlogPost/Post";
import { getComment } from "../../../api/blog/data/getComment/helper";
import { getPost } from "../../../api/blog/data/getPost/helper";

const index = (props) => {
  // console.log(props.post);
  return <Post blogPost={props.post.post} comments={props.comment.comment} />;
};

export async function getServerSideProps(context) {
  console.log(context);
  // const { query } = context;
  const id = context.params.id;
  const post = await getPost(id);
  const comment = await getComment(id);
  // const request = await curentPageProducts(query);
  // const response = JSON.parse(request);
  return { props: { post, comment } };
}

export default index;
