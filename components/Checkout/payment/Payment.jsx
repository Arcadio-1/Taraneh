import React from "react";
import TotalCard from "../Components/TotalCard/totalCard";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import Setup from "../Components/Setup/Setup";
import Coupon from "./Components/coupon";
import PaymentMethod from "./Components/PaymentMethod";
import { useSelector } from "react-redux";
import Empty from "../Components/Empty/Empty";
import { useSession } from "next-auth/react";
import Account from "../../Auth/Account";

const Payment = () => {
  const cartItemsData = useSelector((state) => state.getData);
  const { data, status } = useSession();
  if (cartItemsData.length === 0) {
    return <Empty />;
  }
  if (status === "unauthenticated") {
    return <Account />;
  }
  if (status === "authenticated") {
    return (
      <div className="payment">
        <Breadcrumbs links={[{ link: "payment", title: "پرداخت" }]} />
        <Setup selected={"payment"} />
        <div className="payment-container">
          <div className="payment-content">
            <PaymentMethod />
            <Coupon />
          </div>
          <div className="payment-card">
            <TotalCard actionType={"pay"} />
          </div>
        </div>
      </div>
    );
  }
};

export default Payment;
