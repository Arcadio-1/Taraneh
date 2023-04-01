import React from "react";
import Link from "next/link";
import Image from "next/image";

const BFooterSocialIcons = () => {
  return (
    <div className="BFooter-socilMediaIcons">
      <h2 className="BFooter-socilMediaIcons-title">
        کافه ترانه را در شبکه های اجتمائی دنبال کنید
      </h2>
      <ul className="BFooter-socilMediaIcons-list">
        <li className="BFooter-socilMediaIcons-list-item">
          <Link href={`facebook.com`}>
            <Image
              className="BFooter-socilMediaIcons-list-item-svg"
              src={"/image/icon/socialMedia/faceBook.svg"}
              width={40}
              height={40}
              alt={"facebook"}
            />
            {/* <img
              className="BFooter-socilMediaIcons-list-item-svg"
              src="/image/icon/socialMedia/faceBook.svg"
              alt="faceBook"
            /> */}
          </Link>
        </li>
        <li className="BFooter-socilMediaIcons-list-item">
          <Link href={`facebook.com`}>
            <Image
              className="BFooter-socilMediaIcons-list-item-svg"
              src={"/image/icon/socialMedia/linkedin.svg"}
              width={40}
              height={40}
              alt={"facebook"}
            />
            {/* <img
              className="BFooter-socilMediaIcons-list-item-svg"
              src="/image/icon/socialMedia/linkedin.svg"
              alt="faceBook"
            /> */}
          </Link>
        </li>
        <li className="BFooter-socilMediaIcons-list-item">
          <Link href={`facebook.com`}>
            <Image
              className="BFooter-socilMediaIcons-list-item-svg"
              src={"/image/icon/socialMedia/instagram.svg"}
              width={40}
              height={40}
              alt={"facebook"}
            />
            {/* <img
              className="BFooter-socilMediaIcons-list-item-svg"
              src="/image/icon/socialMedia/instagram.svg"
              alt="faceBook"
            /> */}
          </Link>
        </li>
        <li className="BFooter-socilMediaIcons-list-item">
          <Link href={`facebook.com`}>
            <Image
              className="BFooter-socilMediaIcons-list-item-svg"
              src={"/image/icon/socialMedia/whatsapp.svg"}
              width={40}
              height={40}
              alt={"facebook"}
            />
            {/* <img
              className="BFooter-socilMediaIcons-list-item-svg"
              src="/image/icon/socialMedia/whatsapp.svg"
              alt="faceBook"
            /> */}
          </Link>
        </li>
        <li className="BFooter-socilMediaIcons-list-item">
          <Link href={`facebook.com`}>
            <Image
              className="BFooter-socilMediaIcons-list-item-svg"
              src={"/image/icon/socialMedia/twitter.svg"}
              width={40}
              height={40}
              alt={"facebook"}
            />
            {/* <img
              className="BFooter-socilMediaIcons-list-item-svg"
              src="/image/icon/socialMedia/twitter.svg"
              alt="faceBook"
            /> */}
          </Link>
        </li>
        <li className="BFooter-socilMediaIcons-list-item">
          <Link href={`facebook.com`}>
            <Image
              className="BFooter-socilMediaIcons-list-item-svg"
              src={"/image/icon/socialMedia/telegram.svg"}
              width={40}
              height={40}
              alt={"facebook"}
            />
            {/* <img
              className="BFooter-socilMediaIcons-list-item-svg"
              src="/image/icon/socialMedia/telegram.svg"
              alt="faceBook"
            /> */}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BFooterSocialIcons;
