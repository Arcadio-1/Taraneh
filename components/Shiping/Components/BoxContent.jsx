import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import GrindIcon from "../../ui/Icons/GrindIcon";
import WeightIcon from "../../ui/Icons/weight";

const BoxContent = () => {
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  const grindHandler = (grind) => {
    switch (grind) {
      case 1:
        return "بدون آسیاب";
      case 2:
        return "بسیار درشت";
      case 3:
        return "درشت";
      case 4:
        return "متوسط رو به درشت";
      case 5:
        return "متوسط";
      case 6:
        return "نسبتا ریز";
      case 7:
        return "ریز";
      case 8:
        return "بسیار ریز";
      default:
        return "";
    }
  };
  console.log(cartItemsData);
  return (
    <div className="shiping-boxContent">
      <h2 className="title">محتوا مرسوله</h2>
      <div className="container">
        <ul className="list">
          {cartItemsData.map((item) => {
            return (
              <li className="item" key={item._id}>
                <Image
                  src={item.imageLink}
                  width={100}
                  height={100}
                  alt={item.title}
                />
                <div className=" mt-2 flex-col items-center max-sm:flex">
                  <div className="flex items-center gap-2">
                    <label className="flex items-center">
                      <GrindIcon />
                      وزن:
                    </label>
                    <span className="fnNum">{item.weight} گرم</span>
                  </div>
                  <div className="flex">
                    <label className="flex whitespace-nowrap">
                      <WeightIcon />
                      درجه آسیاب:
                    </label>
                    <span className="whitespace-nowrap">
                      {grindHandler(+item.grind)}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BoxContent;
