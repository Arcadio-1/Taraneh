import React, { useEffect, useReducer, useState } from "react";
import Price from "./Components/Price";
import Amount from "./Components/Amount";
import Grind from "./Components/Grind";
import Weight from "./Components/Weight";
import { useSession } from "next-auth/react";
import {
  getLocalStoageCartItems,
  getOrederList,
} from "../../../../../../../store/ManageData/GetData/GetDataAction";
import { useDispatch, useSelector } from "react-redux";
import { addProductToLocalStorageCart } from "../../../../../../../lib/utilFunctions";

const OrderForm = (props) => {
  const { status, packaging, price, id } = props;
  const { data, status: login } = useSession();

  const { value: availableWeights, availableGrind } = packaging;

  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.sendData.product);
  const localstorageCartItems = useSelector((state) => state.getData.cartItems);
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  const [haveIt, setHaveIt] = useState(false);
  const [weightAlert, setWeightAlert] = useState(false);
  const [grindAlert, setGrindAlert] = useState(false);

  const { grind, weight, amount } = orderData;
  const selectedItem = `${id}${grind}${weight}`;

  // useEffect(() => {
  //   console.log(orderData);
  // }, [orderData]);

  // useEffect(() => {
  //   dispatch(getLocalStoageCartItems());
  // }, [dispatch]);

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
      setWeightAlert((prev) => (prev = true));
      return;
    }
    if (!grind) {
      setGrindAlert(true);
      return;
    }
    setHaveIt(true);
    if (login === "unauthenticated") {
      addProductToLocalStorageCart(id, orderData);
      dispatch(getLocalStoageCartItems());
    }
    if (login === "authenticated") {
      // console.log(cartItemsData);
      const methodFlag =
        cartItemsData && cartItemsData.length > 0 ? "PUT" : "POST";
      console.log(selectedItem);
      const request = await fetch("/api/helperAPI/addOrder", {
        method: methodFlag,
        body: JSON.stringify({
          isInsert: true,
          userId: data.user.email._id,
          orders: { ...orderData, ProductId: id, _id: selectedItem },
        }),
      });
      const response = await request.json();
      console.log(response);
      const userId = data.user.email._id;
      dispatch(getOrederList(userId));
    }
  };

  return (
    <div className="productDetails-content-orderingForm">
      <form className="productDetails-form">
        {availableWeights && (
          <Weight
            availableWeights={availableWeights}
            weightAlert={weightAlert}
            setAlert={setWeightAlert}
          />
        )}
        {availableGrind && (
          <Grind
            availableGrind={availableGrind}
            grindAlert={grindAlert}
            setAlert={setGrindAlert}
          />
        )}
        <div className="productDetails-form-sub">
          <Price price={price} />
          <div className="productDetails-form-sub-actions">
            {haveIt && (
              <Amount
                selectedItem={selectedItem}
                status={status}
                amount={amount}
              />
            )}
            {!haveIt && (
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
