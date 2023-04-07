import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TomanIcon from "../../../../ui/Icons/tomanIcon";

const RandomAd1158 = () => {
  const [randomAdProducts, setRandomAdProducts] = useState();
  const adProducts = useSelector((state) => state.blogGetData.blogAdProducts);
  const status = useSelector((state) => state.blogUi.blogAdProductsStatus);

  useEffect(() => {
    setRandomAdProducts((prev) => {
      return (prev = adProducts.filter((item) => item.adCat === "random-post"));
    });
  }, [adProducts, status]);

  return (
    <section className="randomPostAd">
      <h2 className="randomPostAd-header">محصولات پیشنهادی</h2>
      {randomAdProducts && status.status === "success" && (
        <ul className="randomPostAd-list">
          {randomAdProducts.map((item) => {
            return (
              <li key={item.id} className="randomPostAd-list-item">
                <Link
                  href={`/product/${item.id}`}
                  className="randomPostAd-list-item-container"
                >
                  <Image
                    width={300}
                    height={300}
                    className="randomPostAd-list-item-image"
                    src={item.imageLink}
                    alt={item.title}
                  />

                  <h2 className="randomPostAd-list-item-title">{item.title}</h2>
                  <div className="randomPostAd-list-item-pricing">
                    <span className="randomPostAd-list-item-pricing-offPersent">
                      {item.price.offPersent}%
                    </span>
                    <div>
                      <span className="randomPostAd-list-item-pricing-price">
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
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default RandomAd1158;
