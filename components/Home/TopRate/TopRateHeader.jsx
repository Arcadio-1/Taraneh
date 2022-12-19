import Image from "next/image";
import React from "react";

const TopRateHeader = () => {
  return (
    <div className="topRate-slidHeader">
      <p className="topRate-slidHeader-title">محبوب ترین محصولات</p>

      <div className="topRate-slidHeader-image">
        <Image
          src={"/image/ui/toprateVector.png"}
          alt="محبوب ترین ها"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default TopRateHeader;
