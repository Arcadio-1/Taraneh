import React from "react";
import UserIcon from "../../../../ui/Icons/UserIcon";
import MailIcon from "../../../../ui/Icons/MailIcon";
import TextIcon from "../../../../ui/Icons/TextIcon";
import SecurityIcon from "../../../../ui/Icons/SecurityIcon";
const CommentForm = () => {
  return (
    <div className="blogPost-comment-formContainer">
      <form className="blogPost-comment-form">
        <div className="blogPost-comment-form-nameAndEmail">
          <div className="blogPost-comment-form-name">
            <UserIcon />
            <input placeholder="نام شما" title="نام شما" type="text" />
          </div>
          <div className="blogPost-comment-form-email">
            <MailIcon />
            <input placeholder="ایمیل شما" title="ایمیل شما" type="text" />
          </div>
        </div>
        <div className="blogPost-comment-form-textarea">
          <TextIcon />
          <textarea placeholder="سوال یا دیدگاه شما" />
        </div>
        <div className="blogPost-comment-form-securityAndBtn">
          <div className="blogPost-comment-form-security">
            <SecurityIcon />
            <input type="text" placeholder="سوال امنیتی" title="سوال امنیتی" />
            <p className="blogPost-comment-form-security-question">?=2+2</p>
          </div>
          <button className="blogPost-comment-form-submitBtn">ارسال</button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
