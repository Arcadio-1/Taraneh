import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { offPriceCalculator, priceFormat } from "../../../../lib/utilFunctions";
import Amount from "../../../ProductDetails/components/Body/Components/Content/OrderForm/Components/Amount";
import CloseIcon from "../../../ui/Icons/CloseIcon";
import GrindIcon from "../../../ui/Icons/GrindIcon";
import TomanIcon from "../../../ui/Icons/tomanIcon";
import WeightIcon from "../../../ui/Icons/weight";

const Item = ({ item }) => {
  const [totalOffPrice, setTotalOffPrice] = useState(0);
  const price = offPriceCalculator(item.price.value, item.price.offPersent);
  useEffect(() => {
    setTotalOffPrice((prev) => {
      return (prev = item.price.value * item.amount - price * item.amount);
    });
  }, [price, item]);
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
  return (
    <tr className="item w-full">
      <td>
        <div className="mr-auto flex">
          <Link href={`/product/${item.ProductId}`}>
            <Image
              src={item.imageLink}
              alt={item.title}
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="hidden max-md:inline whitespace-nowrap text-xl pb-5 text-right  ">
          <Link href={`/product/${item.ProductId}`}>
            <p>{item.title}</p>
          </Link>
        </div>
        <div className=" mt-2 flex-col hidden items-start max-sm:flex">
          <div className="flex">
            <label className="flex">
              <GrindIcon />
              وزن:
            </label>
            <span>{item.weight} گرم</span>
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
      </td>
      <td className="text-lg max-md:hidden">
        <Link href={`/product/${item.ProductId}`}>
          <p>{item.title}</p>
        </Link>
      </td>
      <td className="text-xl max-sm:hidden">
        <p>
          {priceFormat(price)}
          <TomanIcon />
        </p>
      </td>
      <td className="max-sm:hidden">
        <div className="flex flex-col">
          <div className="flex">
            <label className="flex">
              <GrindIcon />
              وزن:
            </label>
            <span>{item.weight} گرم</span>
          </div>
          <div className="flex">
            <label className="flex">
              <WeightIcon />
              درجه آسیاب:
            </label>
            <span>{grindHandler(+item.grind)}</span>
          </div>
        </div>
      </td>
      <td className="max-sm:hidden">
        <Amount selectedItem={item._id} />
      </td>
      <td>
        {totalOffPrice > 0 && (
          <p className="fnNum text-xl text-red-600">
            {priceFormat(totalOffPrice)}
            <TomanIcon />
          </p>
        )}
      </td>
      <td>
        <p className="fnNum text-xl">
          {priceFormat(item.amount * price)}
          <TomanIcon />
        </p>
      </td>
      <td className="">
        <div className="hidden max-sm:inline mb-5">
          <Amount selectedItem={item._id} />
        </div>
        <button className="max-sm:hidden">
          <CloseIcon />
        </button>
      </td>
    </tr>
  );
};

export default Item;
