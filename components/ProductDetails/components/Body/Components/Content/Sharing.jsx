import React from "react";
import ShareIcon from "../../../../../ui/Icons/ShareIcon";
import FacebookIcon from "../../../../../ui/Icons/socialMediaIcons/FacebookIcon";
import InstagramIcon from "../../../../../ui/Icons/socialMediaIcons/InstagramIcon";
import LinkedInIcon from "../../../../../ui/Icons/socialMediaIcons/LinkedInIcon";
import TelegramIcon from "../../../../../ui/Icons/socialMediaIcons/TelegramIcon";
import WhatsappIcon from "../../../../../ui/Icons/socialMediaIcons/WhatsappIcon";
import TwitterIcon from "../../../../../ui/Icons/socialMediaIcons/TwitterIcon";
import Link from "next/link";

const Sharing = () => {
  return (
    <div className="productDetails-content-sharing">
      <div className="productDetails-content-sharing-label">
        <ShareIcon />
        <h3 className="productDetails-content-sharing-title">
          به اشتراک گذاری
        </h3>
      </div>
      <ul className="productDetails-content-sharing-list">
        <li className="productDetails-content-sharing-item">
          <Link href={`www.facebook.com`}>
            <FacebookIcon />
          </Link>
        </li>
        <li className="productDetails-content-sharing-item">
          <Link href={`www.facebook.com`}>
            <LinkedInIcon />
          </Link>
        </li>
        <li className="productDetails-content-sharing-item">
          <Link href={`www.facebook.com`}>
            <InstagramIcon />
          </Link>
        </li>
        <li className="productDetails-content-sharing-item">
          <Link href={`www.facebook.com`}>
            <WhatsappIcon />
          </Link>
        </li>
        <li className="productDetails-content-sharing-item">
          <Link href={`www.facebook.com`}>
            <TwitterIcon />
          </Link>
        </li>
        <li className="productDetails-content-sharing-item">
          <Link href={`www.facebook.com`}>
            <TelegramIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sharing;
