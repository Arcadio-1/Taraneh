import { Fragment } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../../../../ui/LoadingSpiner/loadingSpiner";
import CartItem from "./cartItem";

const CartList = () => {
  const getItemsStatus = useSelector(
    (state) => state.ui.getCartItemsDataStatus
  );
  const localStorageCartItems = useSelector(
    (state) => state.getData.cartItemsData
  );
  // useEffect(() => {
  //   console.log(localStorageCartItems);
  //   console.log(getItemsStatus);
  // }, [localStorageCartItems, getItemsStatus]);
  return (
    <Fragment>
      {/* <h5 className="CartModal-list-title">لیستت سفارشات</h5> */}
      {getItemsStatus.status === "success" &&
        localStorageCartItems.map((item, index) => {
          {
            {
              return <CartItem key={item.id} item={item} />;
            }
          }
        })}
      {getItemsStatus.status !== "success" && <LoadingSpinner />}
    </Fragment>
  );
};
export default CartList;
