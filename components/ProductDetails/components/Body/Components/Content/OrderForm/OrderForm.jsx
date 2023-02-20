import React, { useEffect, useReducer, useState } from "react";
import Price from "./Components/Price";
import Amount from "./Components/Amount";
import Grind from "./Components/Grind";
import Weight from "./Components/Weight";
import { useSession } from "next-auth/react";
import { getLocalStoageCartItems } from "../../../../../../../store/ManageData/GetData/GetDataAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = { grind: 0, amount: 1, weight: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        grind: action.grind,
        amount: state.amount,
        weight: state.weight,
      };
    case "setGrind":
      return {
        grind: action.grind,
        amount: state.amount,
        weight: state.weight,
      };
    case "setAmount":
      return {
        grind: state.grind,
        amount: action.amount,
        weight: state.weight,
      };
    case "setWeight":
      return {
        grind: state.grind,
        amount: state.amount,
        weight: action.weight,
      };
    default:
      return {
        grind: 0,
        amount: 0,
        weight: 0,
      };
  }
};

const OrderForm = (props) => {
  const { status, packaging, price, id } = props;
  const { value: availableWeights, availableGrind } = packaging;
  const dispatch = useDispatch();

  const [orderState, dispatchOrder] = useReducer(reducer, initialState);
  const localstorageCartItems = useSelector((state) => state.getData.cartItems);
  const [haveIt, setHaveIt] = useState(false);

  const [weightAlert, setWeightAlert] = useState(false);
  const [grindAlert, setGrindAlert] = useState(false);

  const { status: login } = useSession();

  const { grind, weight, amount } = orderState;
  const selectedItem = `${id}${grind}${weight}`;

  useEffect(() => {
    dispatch(getLocalStoageCartItems());
  }, [dispatch]);

  useEffect(() => {
    // console.log("false");
    if (grind && weight) {
      if (login === "unauthenticated") {
        console.log(localstorageCartItems);
        if (localstorageCartItems && localstorageCartItems.length > 0) {
          console.log(localstorageCartItems);
          setHaveIt(false);
          localstorageCartItems.map((item) => {
            if (item.id === selectedItem) {
              // console.log("true");
              return setHaveIt(true);
            }
          });
        }
      }
    }
  }, [
    orderState,
    login,
    id,
    localstorageCartItems,
    weight,
    grind,
    selectedItem,
  ]);

  const AddToCardHandler = () => {
    const { grind, weight, amount } = orderState;
    if (!weight) {
      setWeightAlert((prev) => (prev = true));
      return;
    }
    if (!grind) {
      setGrindAlert(true);
      return;
    }
    const item = { [id]: id };
    setHaveIt(true);
    if (login === "unauthenticated") {
      // const jsonLocalItems = localStorage.getItem("cartItems");
      // const localItems = JSON.parse(jsonLocalItems) || {};

      const newItem = {
        [id + grind + weight]: {
          id: id + grind + weight,
          ProductId: id,
          amount: amount,
          grind: grind,
          weight: weight,
        },
        ...localstorageCartItems,
      };
      const jsonFile = JSON.stringify(newItem);

      // console.log(newItem);

      localStorage.setItem("cartItems", jsonFile);
      dispatch(getLocalStoageCartItems());
    }
  };
  return (
    <div className="productDetails-content-orderingForm">
      <form className="productDetails-form">
        {haveIt && <h3>we have this item in cart</h3>}
        {availableWeights && (
          <Weight
            availableWeights={availableWeights}
            weightAlert={weightAlert}
            onSetWeight={dispatchOrder}
            setAlert={setWeightAlert}
          />
        )}
        {availableGrind && (
          <Grind
            availableGrind={availableGrind}
            grindAlert={grindAlert}
            onSetGrind={dispatchOrder}
            setAlert={setGrindAlert}
          />
        )}
        <div className="productDetails-form-sub">
          <Price price={price} />
          <div className="productDetails-form-sub-actions">
            {haveIt && (
              <Amount
                cartItems={localstorageCartItems}
                selectedItem={selectedItem}
                status={status}
                onSetAmount={dispatchOrder}
                amount={orderState.amount}
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
