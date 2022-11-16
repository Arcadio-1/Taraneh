import React from "react";
import EmailIcon from "../../../ui/Icons/footerIcons/EmailIcon";
import LocationIcon from "../../../ui/Icons/footerIcons/LocationIcon";
import PhoneIcon from "../../../ui/Icons/footerIcons/PhoneIcon";
const Contact = () => {
  return (
    <div className="footer-contact">
      <div className="footer-contact-items">
        <div className="footer-contact-items-item">
          <LocationIcon />
          <span>بلوار ارشاد - مهندس(پیام) - پلاک 12</span>
        </div>
        <div className="footer-contact-items-item">
          <EmailIcon />
          <span>cafetarane@gmail.com</span>
        </div>
        <div className="footer-contact-items-item">
          <PhoneIcon />
          <div>
            <span>021-315015-8</span>
            <span>021-317582</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
