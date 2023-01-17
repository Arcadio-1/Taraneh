import Image from "next/image";
import React from "react";

import TagsImage from "./Components/Image/TagsImage";
import MainImage from "./Components/Image/MainImage";
import SubImage from "./Components/Image/SubImage";
import Price from "./Components/Content/Price";
import Status from "./Components/Content/Status";
import ShortDescription from "./Components/Content/ShortDescription";
import OrderForm from "./Components/Content/OrderForm/OrderForm";
import Actions from "./Components/Content/Actions";
import CheckList from "./Components/Content/CheckList";
import Meta from "./Components/Content/Meta";
import Sharing from "./Components/Content/Sharing";
import Message from "./Components/Message/Message";
const Body = (props) => {
  const {
    price,
    mainImage,
    subImages,
    sell,
    title,
    status,
    description,
    producingCountry,
    packingCountry,
    coffeeType,
    tags,
    taste,
    category,
  } = props;

  return (
    <div className="productDetails-body">
      <div className="productDetails-image">
        <TagsImage offPersent={price.offPersent} sell={sell} />
        <MainImage subImages={subImages} mainImage={mainImage} title={title} />
        <SubImage title={title} subImages={subImages} />
      </div>
      <div className="productDetails-details">
        <div className="productDetails-content">
          <Price price={price} />
          <Status status={status} />
          <ShortDescription description={description} />
          <OrderForm />
          <Actions />
          <CheckList
            packingCountry={packingCountry}
            producingCountry={producingCountry}
            coffeeType={coffeeType}
            taste={taste}
          />
          <Meta tags={tags} category={category} />
          <Sharing />
        </div>
        <div className="productDetails-message">
          <Message />
        </div>
      </div>
    </div>
  );
};

export default Body;
