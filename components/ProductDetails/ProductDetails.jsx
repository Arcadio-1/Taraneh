import React from "react";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import SubCard from "./components/SubCard/SubCard";
const ProductDetails = (props) => {
  const { comments, product } = props;
  const {
    packaging,
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
  } = product;

  const address = [
    { id: 3, title: category, link: `/pruducts/${categoryAddress}` },
    { id: 4, title: title, link: `/product/${id}/${title}` },
  ];

  return (
    <div className="productDetails">
      <div className="productDetails-breadcrumbs">
        <Breadcrumbs links={address} />
      </div>
      <div className="productDetails-mainCard">
        <Header
          brandEn={brandEn}
          brandFn={brandFn}
          title={title}
          statistics={statistics}
          id={id}
        />
        <Body
          id={id}
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
          packaging={packaging}
        />
      </div>
      <SubCard product={product} comments={comments} />
    </div>
  );
};

export default ProductDetails;
