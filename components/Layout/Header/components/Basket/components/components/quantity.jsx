// import PlusIcon from "../../../ui/Icons/PlusIcon";
// import Minus from "../../../ui/Icons/Minus";
// import Trash from "../../../ui/Icons/Trash";
import PlusIcon from "../../../../../../ui/Icons/PlusIcon";
import Minus from "../../../../../../ui/Icons/Minus";
import TrashIcon from "../../../../../../ui/Icons/TrashIcon";
import { useState } from "react";
// import useCart from "../../../../Hook/use-cart";
const Quantity = (props) => {
  // const { manageOrder } = useCart()
  const [quant, setQuant] = useState(props.amount);
  // const quantHandler = (flag) => {
  //   if (flag === "incrise") {
  //     setQuant((prev) => {
  //       return prev + 1;
  //     });
  //     manageOrder({ type: "quantIncrease" });
  //   }
  //   if (flag === "decrise") {
  //     setQuant((prev) => {
  //       return prev - 1;
  //     });
  //     manageOrder({ type: "quantDecrease" });
  //   }
  // };
  return (
    <div className="CartModal-list-item-colom1-quant">
      <div className="CartModal-list-item-colom1-quant-quantBox">
        <button
          className="CartModal-list-item-colom1-quant-quantBox-plusBtn"
          // onClick={(e) => {
          //   e.preventDefault();
          //   quantHandler("incrise");
          // }}
        >
          <PlusIcon />
        </button>
        <div className="CartModal-list-item-colom1-quant-quantBox-number">
          <span>{props.item.amount}</span>
          {props.availableToOrder === props.item.amount && (
            <span className="CartModal-list-item-colom1-quant-quantBox-number-max">
              حداکثر
            </span>
          )}
        </div>
        <button
          className="CartModal-list-item-colom1-quant-quantBox-minusBtn"
          // onClick={(e) => {
          //   e.preventDefault();
          //   quantHandler("decrise");
          // }}
        >
          {props.item.amount > 1 ? <Minus /> : <TrashIcon />}
        </button>
      </div>
    </div>
  );
};
export default Quantity;
