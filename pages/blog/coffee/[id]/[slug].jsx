import React from "react";
import Post from "../../../../components/Blog/BlogPost/Post";
import { getComment } from "../../../api/blog/data/getComment/helper";
import { getPost } from "../../../api/blog/data/getPost/helper";

const Title = (props) => {
  console.log(props);
  return <Post blogPost={props.post.post} comments={props.comment.comment} />;
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  const post = await getPost(id);
  const comment = await getComment(id);
  return { props: { post, comment } };
}

export default Title;
