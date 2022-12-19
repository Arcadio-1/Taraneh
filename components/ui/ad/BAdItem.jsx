import Image from "next/image";
import React from "react";
import TomanIcon from "../Icons/tomanIcon";
import Link from "next/link";

const BAdItem = (props) => {
  const { id, title, imageLink, statistics, taste, price } = props.item;
  return (
    <div className="bAd-list-item">
      <Link href={`/products/${id}`}>
        <h3 className="bAd-list-item-title">{title}</h3>
        <div className="bAd-list-item-down">
          <Image src={imageLink} width={300} height={200} alt={title} />
          <div className="bAd-list-item-details">
            <div className="bAd-list-item-details-line">
              <div className="bAd-list-item-details-line-item">
                <span className="bAd-list-item-details-line-item-name">
                  کافئین :
                </span>
                <span className="bAd-list-item-details-line-item-from">10</span>
                <span className="bAd-list-item-details-line-item-space">/</span>
                <span className="bAd-list-item-details-line-item-is">
                  {taste.caffeine}
                </span>
              </div>
              <div className="bAd-list-item-details-line-item">
                <span className="bAd-list-item-details-line-item-name">
                  رست :
                </span>
                <span className="bAd-list-item-details-line-item-from">10</span>
                <span className="bAd-list-item-details-line-item-space">/</span>
                <span className="bAd-list-item-details-line-item-is">
                  {taste.perfume}
                </span>
              </div>
            </div>
            <div className="bAd-list-item-details-line">
              <div className="bAd-list-item-details-line-item">
                <span className="bAd-list-item-details-line-item-name">
                  ترشی :
                </span>
                <span className="bAd-list-item-details-line-item-from">10</span>
                <span className="bAd-list-item-details-line-item-space">/</span>
                <span className="bAd-list-item-details-line-item-is">
                  {taste.pickle}
                </span>
              </div>
              <div className="bAd-list-item-details-line-item">
                <span className="bAd-list-item-details-line-item-name">
                  تلخی :
                </span>
                <span className="bAd-list-item-details-line-item-from">10</span>
                <span className="bAd-list-item-details-line-item-space">/</span>
                <span className="bAd-list-item-details-line-item-is">
                  {taste.bitter}
                </span>
              </div>
            </div>
          </div>
          <div className="bAd-list-item-offAndPrice">
            <div className="bAd-list-item-off">
              <span className="bAd-list-item-off-text">تخفیف</span>
              <span className="bAd-list-item-off-num">{price.offPersent}%</span>
            </div>
            <div className="bAd-list-item-price">
              <span className="bAd-list-item-price-value">{price.value}</span>
              <TomanIcon />
            </div>
          </div>
          <div className="bAd-list-item-desc">
            <span className="bAd-list-item-desc-text">
              <span className="bAd-list-item-desc-text-persent">91% </span>(
              {statistics.like}) نفر از خریدارن, این کالا را پیشنهاد کرده اند
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BAdItem;
