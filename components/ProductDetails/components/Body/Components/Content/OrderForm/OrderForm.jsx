import React, { Fragment, useEffect, useState } from "react";
import Price from "./Components/Price";
import Amount from "./Components/Amount";
import Grind from "./Components/Grind";
import Weight from "./Components/Weight";
import { useSession } from "next-auth/react";
import { getOrederList } from "../../../../../../../store/ManageData/GetData/GetDataAction";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToLocalStorageCart,
  getLocalStorageCartItems,
} from "../../../../../../../lib/utilFunctions";
import { getDataSliceActions } from "../../../../../../../store/ManageData/GetData/GetDataSlice";
import useOrderDetails from "../../../../../../../Hook/UseOrderDetails";
import { uiAction } from "../../../../../../../store/ui/uiSlice";
import LoadingSpinner from "../../../../../../ui/LoadingSpiner/loadingSpiner";
import NotifCard from "../../../../../../ui/NotifCard";

const OrderForm = ({ price, id, availableWeights, availableGrind }) => {
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  const addOrderStatus = useSelector((state) => state.ui.addOrderStatus);
  const { data, status: login } = useSession();
  const dispatch = useDispatch();

  const {
    grind,
    grindAlert,
    weight,
    weightAlert,
    dispatch: dispatchOrderDetils,
  } = useOrderDetails();

  const [haveIt, setHaveIt] = useState(false);

  const selectedItem = `${id}${grind}${weight}`;

  // useEffect(() => {
  //   console.log(addOrderStatus);
  // }, [addOrderStatus]);

  useEffect(() => {
    if (grind && weight) {
      if (cartItemsData && cartItemsData.length === 0) {
        setHaveIt(false);
      }
      if (cartItemsData && cartItemsData.length > 0) {
        setHaveIt(false);
        cartItemsData.map((item) => {
          if (item._id === selectedItem) {
            return setHaveIt(true);
          }
        });
      }
    }
  }, [grind, weight, selectedItem, cartItemsData, login]);

  const AddToCardHandler = async () => {
    if (!weight) {
      dispatchOrderDetils({ type: "weightAlert" });
      return;
    }
    if (!grind) {
      dispatchOrderDetils({ type: "grindAlert" });
      return;
    }
    if (login === "unauthenticated") {
      addProductToLocalStorageCart(id, { grind, weight, amount: 1 });
      const localStorageCartList = getLocalStorageCartItems();
      dispatch(getDataSliceActions.setCardItems(localStorageCartList));
      setHaveIt(true);
    }
    if (login === "authenticated") {
      try {
        dispatch(
          uiAction.setAddOrderStatus({
            status: "loading",
            title: "در حال بررسی",
            message: "در حال افزودن محصول به لیسا سفارشات",
          })
        );
        const methodFlag =
          cartItemsData && cartItemsData.length > 0 ? "PUT" : "POST";
        const request = await fetch("/api/ordring", {
          method: methodFlag,
          body: JSON.stringify({
            isInsert: true,
            userId: data.user.email._id,
            orders: {
              _id: selectedItem,
              ProductId: id,
              amount: 1,
              weight: weight,
              grind: grind,
            },
          }),
        });
        if (!request) {
          throw new Error("خطا در ارسال درخواست به سرور");
        }
        const response = await request.json();
        if (response.status !== "success") {
          throw new Error("خطا در ثبت سفارش");
        }
        const userId = data.user.email._id;
        dispatch(getOrederList(userId));
        setHaveIt(true);
        dispatch(
          uiAction.setAddOrderStatus({
            status: "success",
            title: "با موفقیت ثبت شد",
            message: "محصول مورد نظر به لیست سفارشات افزوده شد",
          })
        );
      } catch (error) {
        dispatch(
          uiAction.setSideNotif({
            status: "error",
            title: "خطا در اتصال",
            message: error.message,
          })
        );
        dispatch(
          uiAction.setAddOrderStatus({
            status: "error",
            title: "خطا در اتصال",
            message: error.message,
          })
        );
        return;
      }
    }
  };

  return (
    <div className="productDetails-content-orderingForm">
      <NotifCard />
      <form className="productDetails-form">
        {availableWeights && (
          <Weight
            availableWeights={availableWeights}
            weightAlert={weightAlert}
            dispatchWeight={dispatchOrderDetils}
          />
        )}
        {availableGrind && (
          <Grind
            availableGrind={availableGrind}
            grindAlert={grindAlert}
            dispatchGrind={dispatchOrderDetils}
          />
        )}
        <div className="productDetails-form-sub">
          <Price price={price} />
          <div className="productDetails-form-sub-actions">
            {haveIt && <Amount selectedItem={selectedItem} />}
            {!haveIt && (
              <Fragment>
                {addOrderStatus.status === "loading" ? (
                  <div className="w-16 h-16">
                    <LoadingSpinner />
                  </div>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      AddToCardHandler();
                    }}
                    className="productDetails-form-submitBtn"
                  >
                    افزودن به سبد خرید
                  </button>
                )}
              </Fragment>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
