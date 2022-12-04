import React from "react";
import BasketIcon from "../../../ui/Icons/BasketIcon";
import { useSession } from "next-auth/react";
import Profile from "./Profile";
const Basket = () => {
  const { data: session, status } = useSession();

  return (
    <div className="header-basket">
      {status === "authenticated" && <Profile />}
      <div className="header-basket-container">
        <BasketIcon />
      </div>
    </div>
  );
};

export default Basket;
