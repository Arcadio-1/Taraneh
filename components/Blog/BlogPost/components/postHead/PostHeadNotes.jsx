import React from "react";
import IdeaIcon from "../../../../ui/Icons/IdeaIcon";
const PostHeadNotes = (props) => {
  return (
    <div className="blogPost-head-notes">
      <h3 className="blogPost-head-notes-title">نکات مهم</h3>
      <ul className="blogPost-head-notes-list">
        {props.notes.map((item, index) => {
          return (
            <li className="blogPost-head-notes-list-item" key={index}>
              <IdeaIcon />
              <p className="blogPost-head-notes-list-item-text">{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostHeadNotes;
