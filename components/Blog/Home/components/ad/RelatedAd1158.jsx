import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import TomanIcon from "../../../../ui/Icons/tomanIcon";

const RelatedAd1158 = () => {
  const adProducts = useSelector((state) => state.blogGetData.blogAdProducts);
  const status = useSelector((state) => state.blogUi.blogAdProductsStatus);
  const size = useSelector((state) => state.ui.windowWidth);
  const [relatedAd, setRelateAd] = useState([]);
  useEffect(() => {
    setRelateAd((prev) => {
      return (prev = adProducts.filter(
        (item) => item.adCat === "related-post"
      ));
    });
  }, [adProducts]);
  return (
    <section className="relatedAd">
      <h2 className="relatedAd-title">محصولات پیشنهادی</h2>
      {status.status === "success" && relatedAd && (
        <ul className="relatedAd-list">
          {relatedAd.map((item, index) => {
            if (size > 720 && index === 5) {
              return null;
            }
            return (
              <li key={item.id} className="relatedAd-list-item">
                <Link
                  href={`/product/${item.id}`}
                  className="relatedAd-list-item-container"
                >
                  <h3 className="relatedAd-list-item-title">{item.title}</h3>
                  <Image
                    className="relatedAd-list-item-image"
                    src={item.imageLink}
                    alt={item.title}
                    width={200}
                    height={200}
                  />
                  <p className="relatedAd-list-item-desc">
                    {item.description.substr(0, 200)}...
                  </p>
                  <div className="relatedAd-list-item-pricing">
                    <span className="relatedAd-list-item-pricing-discount">
                      تخفیف
                    </span>
                    <span className="relatedAd-list-item-pricing-offPersent">
                      %{item.price.offPersent}
                    </span>
                    <span className="relatedAd-list-item-pricing-price">
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(
                        Math.ceil(
                          item.price.value -
                            (item.price.offPersent / 100) * item.price.value
                        )
                      )}
                    </span>
                    <TomanIcon />
                  </div>
                  <p className="relatedAd-list-item-sugges">
                    <span className="relatedAd-list-item-sugges-persent">
                      91%
                    </span>
                    <span className="relatedAd-list-item-sugges-pesons">
                      (920)
                    </span>
                    <span className="relatedAd-list-item-sugges-text">
                      نفر از خریدارن, این کالا را پیشنهاد کرده اند
                    </span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default RelatedAd1158;
