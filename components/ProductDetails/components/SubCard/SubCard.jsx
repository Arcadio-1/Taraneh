import React, { useState } from "react";
import Reviws from "./Components/Reviews/Reviws";
import Description from "./Components/Description/Description";
import Header from "./Components/Header/Header";
import Information from "./Components/Information/Informatin";
const SubCard = (props) => {
  const [tab, setTab] = useState("description");

  const changeTabHandler = (tabName) => {
    setTab((prev) => {
      return (prev = tabName);
    });
  };
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
  return (
    <div className="mt-3 bg-white p-4 rounded-lg ">
      <Header changeTabHandler={changeTabHandler} />
      {tab === "description" && <Description description={description} />}
      {tab === "infomation" && <Information productDetails={product} />}
      {tab === "reviwe" && <Reviws comments={comments} title={title} />}
    </div>
  );
};

export default SubCard;
