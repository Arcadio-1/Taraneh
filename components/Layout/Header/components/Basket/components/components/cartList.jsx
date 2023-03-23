import { Fragment } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../../../../ui/LoadingSpiner/loadingSpiner";
import CartItem from "./cartItem";

const CartList = () => {
  const getItemsStatus = useSelector((state) => state.ui.getCartListDataStatus);
  const localStorageCartItems = useSelector(
    (state) => state.getData.cartItemsData
  );
  return (
    <Fragment>
      {getItemsStatus.status === "success" &&
        localStorageCartItems.map((item, index) => {
          {
            {
              return <CartItem key={item._id} item={item} />;
            }
          }
        })}
      {getItemsStatus.status !== "success" && <LoadingSpinner />}
    </Fragment>
  );
};
export default CartList;
