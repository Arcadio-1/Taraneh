import React, { useEffect } from "react";
import FreeShoping from "./components/freeShoping";
import List from "./components/list";
import Actions from "./components/actions";
import { useSelector } from "react-redux";
import Empty from "../Components/Empty/Empty";
import Setup from "../Components/Setup/Setup";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
const Cart = () => {
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  useEffect(() => {
    console.log(cartItemsData);
  }, [cartItemsData]);
  return (
    <div className="cart">
      <Breadcrumbs links={[{ link: "cart", title: "سبد خرید" }]} />
      {cartItemsData.length === 0 && (
        <section>
          <Empty />
        </section>
      )}
      {cartItemsData.length > 0 && (
        <section>
          <Setup selected={"cart"} />
          <FreeShoping />
          <List />
          <Actions />
        </section>
      )}
    </div>
  );
};

export default Cart;
