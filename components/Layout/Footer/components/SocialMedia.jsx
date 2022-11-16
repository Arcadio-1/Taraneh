import Link from "next/link";
import React from "react";
import FacebookIcon from "../../../ui/Icons/socialMediaIcons/FaceBookIcon";
import InstagramIcon from "../../../ui/Icons/socialMediaIcons/InstagramIcon";
import LinkedInIcon from "../../../ui/Icons/socialMediaIcons/LinkedInIcon";
import TelegramIcon from "../../../ui/Icons/socialMediaIcons/TelegramIcon";
import TwitterIcon from "../../../ui/Icons/socialMediaIcons/TwitterIcon";
import WhatsappIcon from "../../../ui/Icons/socialMediaIcons/WhatsappIcon";
const SocialMedia = () => {
  return (
    <div className="footer-socialMedia">
      <h2 className="footer-socialMedia-title">
        کافه ترانه در شبکه های اجتمائی
      </h2>
      <div className="footer-socialMedia-icons">
        <Link href={"/"}>
          <FacebookIcon />
        </Link>
        <Link href={"/"}>
          <LinkedInIcon />
        </Link>
        <Link href={"/"}>
          <InstagramIcon />
        </Link>
        <Link href={"/"}>
          <TelegramIcon />
        </Link>
        <Link href={"/"}>
          <TwitterIcon />
        </Link>
        <Link href={"/"}>
          <WhatsappIcon />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
