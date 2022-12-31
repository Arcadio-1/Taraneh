import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import TomanIcon from "../ui/Icons/tomanIcon";
import PlusIcon from "../ui/Icons/PlusIcon";
import Minus from "../ui/Icons/Minus";
import LikeIcon from "../ui/Icons/LikeIcon";
import CompareIcon from "../ui/Icons/CompareIcon";
import TickIcon from "../ui/Icons/TickIcon";
import ShareIcon from "../ui/Icons/ShareIcon";
import FacebookIcon from "../ui/Icons/socialMediaIcons/FacebookIcon";
import InstagramIcon from "../ui/Icons/socialMediaIcons/InstagramIcon";
import LinkedInIcon from "../ui/Icons/socialMediaIcons/LinkedInIcon";
import TelegramIcon from "../ui/Icons/socialMediaIcons/TelegramIcon";
import WhatsappIcon from "../ui/Icons/socialMediaIcons/WhatsappIcon";
import TwitterIcon from "../ui/Icons/socialMediaIcons/TwitterIcon";
import DeliveryIcon from "../ui/Icons/DeliveryIcon";
import MoneyIcon from "../ui/Icons/footerIcons/MoneyIcon";
import GuaranteeIcon from "../ui/Icons/GuaranteeIcon";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
const ProductDetails = (props) => {
  const {
    category,
    categoryAddress,
    title,
    id,
    brandFn,
    brandEn,
    statistics,
    imageLink,
    price,
    sell,
    imgList,
    status,
    description,
    producingCountry,
    packingCountry,
    coffeeType,
    taste,
    tags,
  } = props.product;
  console.log(statistics);
  ///////////breadcrumbs
  const address = [
    { id: 3, title: category, link: `/pruducts/${categoryAddress}` },
    { id: 4, title: title, link: `/product/${id}/${title}` },
  ];

  //////amount

  return (
    <div className="productDetails">
      <div className="productDetails-breadcrumbs">
        <Breadcrumbs links={address} />
      </div>
      <div className="productDetails-card">
        <Header
          brandEn={brandEn}
          brandFn={brandFn}
          title={title}
          statistics={statistics}
          id={id}
        />
        <Body
          title={title}
          offPersent={price.offPersent}
          mainImage={imageLink}
          subImages={imgList}
          sell={sell}
          price={price}
          status={status}
          description={description}
          producingCountry={producingCountry}
          packingCountry={packingCountry}
          taste={taste}
          tags={tags}
          coffeeType={coffeeType}
          category={category}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
