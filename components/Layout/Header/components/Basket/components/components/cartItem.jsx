import GrindIcon from "../../../../../../ui/Icons/GrindIcon";
import TomanIcon from "../../../../../../ui/Icons/tomanIcon";
import WeightIcon from "../../../../../../ui/Icons/weight";
import Link from "next/link";
import {
  offPriceCalculator,
  priceFormat,
} from "../../../../../../../lib/utilFunctions";
import Image from "next/image";
import Amount from "../../../../../../ProductDetails/components/Body/Components/Content/OrderForm/Components/Amount";

const CartItem = ({ item }) => {
  const { title, imageLink, price, grind, weight, ProductId } = item;
  const { value, offPersent } = price;
  const offPrice = offPriceCalculator(value, offPersent);

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
    <div className="CartModal-list-item">
      <div className="CartModal-list-item-colom1">
        <div className="CartModal-list-item-colom1-image">
          <Link href={`/product/${ProductId}`}>
            <Image src={imageLink} alt={title} height={20} width={20} />
          </Link>
        </div>
        <div className="CartModal-list-item-colom1-sellType">
          {offPersent > 0 && <span>%{offPersent}-</span>}
        </div>
        <Amount selectedItem={item._id} />
      </div>
      <div className="CartModal-list-item-colom2">
        <p className="CartModal-list-item-colom2-title">{title}</p>
        <ul className="CartModal-list-item-colom2-specificationlist">
          <li className="CartModal-list-item-colom2-specificationlist-weight">
            <label>
              <GrindIcon />
              وزن:
            </label>
            <span>{weight} گرم</span>
          </li>
          <li className="CartModal-list-item-colom2-specificationlist-grind">
            <label>
              <WeightIcon />
              درجه آسیاب:
            </label>
            <span>{grindHandler(+grind)}</span>
          </li>
        </ul>
        <div className="flex justify-evenly">
          {offPersent > 0 && (
            <div className="CartModal-list-item-colom2-discount">
              <span className="CartModal-list-item-colom2-discount-price">
                {priceFormat(value - offPrice)}
              </span>
              <span className="CartModal-list-item-colom2-discount-text">
                تخفیف
              </span>
            </div>
          )}
          <div className="CartModal-list-item-colom2-priceAndRemove">
            <p className="CartModal-list-item-colom2-priceAndRemove-price">
              {priceFormat(offPrice)} <TomanIcon />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
