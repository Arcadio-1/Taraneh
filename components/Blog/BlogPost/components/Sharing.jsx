import React from "react";
import { Link } from "react-router-dom";
import ShareIcon from "../../../ui/Icons/ShareIcon";
import FaceBookIcon from "../../../ui/Icons/socialMediaIcons/FaceBookIcon";
import InstagramIcon from "../../../ui/Icons/socialMediaIcons/InstagramIcon";
import LinkedInIcon from "../../../ui/Icons/socialMediaIcons/LinkedInIcon";
import TelegramIcon from "../../../ui/Icons/socialMediaIcons/TelegramIcon";
import TwitterIcon from "../../../ui/Icons/socialMediaIcons/TwitterIcon";
import WhatsappIcon from "../../../ui/Icons/socialMediaIcons/WhatsappIcon";
const Sharing = () => {
  return (
    <div className="blogPost-head-sharing">
      <div className="blogPost-head-sharing-label">
        <ShareIcon />
        <h3 className="blogPost-head-sharing-title">به اشتراک گذاری:</h3>
      </div>
      <ul className="blogPost-head-sharing-list">
        <li className="blogPost-head-sharing-list-item">
          <Link to={`//www.facebook.com`}>
            <FaceBookIcon />
          </Link>
        </li>
        <li className="blogPost-head-sharing-list-item">
          <Link to={`//www.facebook.com`}>
            <LinkedInIcon />
          </Link>
        </li>
        <li className="blogPost-head-sharing-list-item">
          <Link to={`//www.facebook.com`}>
            <InstagramIcon />
          </Link>
        </li>
        <li className="blogPost-head-sharing-list-item">
          <Link to={`//www.facebook.com`}>
            <WhatsappIcon />
          </Link>
        </li>
        <li className="blogPost-head-sharing-list-item">
          <Link to={`//www.facebook.com`}>
            <TwitterIcon />
          </Link>
        </li>
        <li className="blogPost-head-sharing-list-item">
          <Link to={`//www.facebook.com`}>
            <TelegramIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sharing;
