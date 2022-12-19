import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../../ui/Icons/arrowsIcon";
const ShopHero = () => {
  return (
    <div className="shopHero">
      <div className="shopHero-content-container">
        <div className="shopHero-content">
          <p className="shopHero-content-p">
            فروش ویژه محصولات
            <strong className="shopHero-content-brand"> بن مانو </strong>
          </p>
          <p className="shopHero-content-p">
            تا <strong className="shopHero-content-persent">50%</strong> تخفیف
          </p>
        </div>
        <div className="shopHero-content-link">
          <Link href={"/products"}>مشاهده لیست محصولات</Link>
          <ArrowIcon arrowType="left" />
        </div>
      </div>

      <div className="shopHero-imageContainer">
        <Image
          src={"/image/ui/offBanner.png"}
          alt="فروش ویژه محصولات بن مانو"
          width={150}
          height={100}
        />
      </div>
    </div>
  );
};

export default ShopHero;
