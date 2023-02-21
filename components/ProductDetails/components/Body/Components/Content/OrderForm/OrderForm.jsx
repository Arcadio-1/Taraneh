import React, { useEffect, useReducer, useState } from "react";
import Price from "./Components/Price";
import Amount from "./Components/Amount";
import Grind from "./Components/Grind";
import Weight from "./Components/Weight";
import { useSession } from "next-auth/react";
import { getLocalStoageCartItems } from "../../../../../../../store/ManageData/GetData/GetDataAction";
import { useDispatch, useSelector } from "react-redux";
import { addProductToLocalStorageCart } from "../../../../../../../lib/utilFunctions";

const OrderForm = (props) => {
  const { status, packaging, price, id } = props;
  const { status: login } = useSession();

  const { value: availableWeights, availableGrind } = packaging;

  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.sendData.product);
  const localstorageCartItems = useSelector((state) => state.getData.cartItems);

  const [haveIt, setHaveIt] = useState(false);
  const [weightAlert, setWeightAlert] = useState(false);
  const [grindAlert, setGrindAlert] = useState(false);

  const { grind, weight, amount } = orderData;
  const selectedItem = `${id}${grind}${weight}`;

  useEffect(() => {
    console.log(orderData);
  }, [orderData]);

  useEffect(() => {
    dispatch(getLocalStoageCartItems());
  }, [dispatch]);

  useEffect(() => {
    if (grind && weight) {
      if (login === "unauthenticated") {
        if (localstorageCartItems && localstorageCartItems.length === 0) {
          setHaveIt(false);
        }
        if (localstorageCartItems && localstorageCartItems.length > 0) {
          setHaveIt(false);
          localstorageCartItems.map((item) => {
            if (item.id === selectedItem) {
              return setHaveIt(true);
            }
          });
        }
      }
    }
  }, [grind, weight, selectedItem, localstorageCartItems, login]);

  const AddToCardHandler = () => {
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
