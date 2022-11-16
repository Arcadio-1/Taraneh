import Image from "next/image";
import React from "react";
import MailIcon from "../../../ui/Icons/MailIcon";
const Subscribe = () => {
  return (
    <div className="footer-subscribe">
      <div className="footer-subscribe-container">
        <div className="footer-subscribe-content">
          <p className="footer-subscribe-content-onTitle">
            %20 درصد تخفیف در خرید اول
          </p>
          <h2 className="footer-subscribe-content-title">
            به خبر نامه ما بپیوندید و دریافت کنید...
          </h2>
          <p className="footer-subscribe-content-message">
            همین حالا ایمیل خود را وارد کنید تا از تخفیف ها و محصولات جدید ما
            مطلع شوید
          </p>
          <div className="footer-subscribe-content-form">
            <label htmlFor="yourEmail">
              <MailIcon />
            </label>
            <input
              className="footer-subscribe-content-form-input"
              type="email"
              id="yourEmail"
              placeholder="آدرس ایمیل شما"
            />
            <button className="footer-subscribe-content-form-submit">
              عضویت
            </button>
          </div>
        </div>
        <div className="footer-subscribe-image">
          <Image
            src={"/image/footer/subscribeHero.png"}
            width={400}
            height={220}
            alt="دریافت تخفیف"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
