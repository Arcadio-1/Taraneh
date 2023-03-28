import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../../../../ui/LoadingSpiner/loadingSpiner";
import CartItem from "./cartItem";

const CartList = () => {
  const cartListDataStatus = useSelector(
    (state) => state.ui.cartListDataStatus
  );
  // useEffect(() => {
  //   console.log(cartListDataStatus);
  // }, [cartListDataStatus]);

  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  return (
    <Fragment>
      {cartListDataStatus.status === "loading" ? (
        <div className="w-full h-36 border">
          <LoadingSpinner text={"در حال دریافت لیست سفارشات"} />
        </div>
      ) : (
        cartItemsData.map((item, index) => {
          {
            {
              return <CartItem key={item._id} item={item} />;
            }
          }
        })
      )}
    </Fragment>
  );
};
export default CartList;
