import React from "react";
import BAd from "../../ui/ad/BAd";
import SAd from "../../ui/ad/SAd";

const SideAd = ({ products }) => {
  const adProducts = products.filter((product) => product.isAd === true);
  // console.log(adProducts);
  return (
    <div className="sideAd">
      {/* <BAd products={adProducts} direction={"horizontal"} /> */}
      <SAd products={adProducts} direction={"horizontal"} from={0} to={3} />
    </div>
  );
};

export default SideAd;
