import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SAd from "../../../BlogSubs/ad/SAd";
import SubSelectedPosts from "../../../BlogSubs/selectedPostSlider/SubSelectedPosts";
import LikeAndDislike from "../LikeAndDislike";
import Sharing from "../Sharing";

const PostData = (props) => {
  const { desc, imageUrl, title, tags, liked, disLike } = props.post;
  // const size = useSelector((state) => state.ui.size);
  return (
    <div className="blogPost-body-main-container">
      <div className="blogPost-body-detials">
        <p>{desc.substr(0, 500)}</p>
        <p>{desc.substr(0, 400)}</p>
        <p>{desc.substr(0, 500)}</p>
        <p>{desc.substr(0, 300)}</p>
        <img src={imageUrl} alt={title} />
        <p>{desc.substr(0, 500)}</p>
        <p>{desc.substr(0, 400)}</p>
        <p>{desc.substr(0, 600)}</p>
        <p>{desc.substr(0, 300)}</p>
        <img src={imageUrl} alt={title} />
        <p>{desc.substr(0, 500)}</p>
        <p>{desc.substr(0, 300)}</p>
        <p>{desc.substr(0, 400)}</p>
      </div>
      <div className="blogPost-body-down">
        <SAd />

        <div className="blogPost-body-down-tagsAndLike">
          <div className="blogPost-body-down-tags">
            <h2 className="blogPost-body-down-tags-title">برچسب ها:</h2>
            <ul className="blogPost-body-down-tags-list">
              {tags.map((item) => {
                return (
                  <li key={item} className="blogPost-body-down-tags-list-item">
                    <Link to={"#"}>#{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <LikeAndDislike like={liked} dislike={disLike} />
        </div>
        <Sharing />
        <SubSelectedPosts />
      </div>
    </div>
  );
};

export default PostData;
