import { useSession } from "next-auth/react";
import React from "react";
import Account from "../../Auth/Account";
import TotalCard from "../Components/TotalCard/totalCard";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import Setup from "../Components/Setup/Setup";
import BuyerData from "./Components/buyerData";
import BoxContent from "./Components/BoxContent";
import { useSelector } from "react-redux";
import Empty from "../Components/Empty/Empty";
const Shiping = () => {
  const { data, status } = useSession();
  const cartItemsData = useSelector((state) => state.getData.cartItemsData);
  // console.log(data.user.email);

  if (cartItemsData.length === 0) {
    return (
      <section>
        <Empty />
      </section>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="shipingAuth">
        <Account currentPage={"/shiping"} />
      </div>
    );
  }
  if (status === "authenticated") {
    return (
      <div className="shiping">
        <Breadcrumbs
          links={[{ link: "shiping", title: "زمان و نحوه ارسال" }]}
        />
        <Setup selected={"shiping"} />
        <div className="shiping-buyerDataAndTotalCard">
          <BuyerData />
          <div className="shiping-totalCard">
            <TotalCard actionType={"cuntinue"} />
          </div>
        </div>
        <BoxContent />
      </div>
    );
  }
};

export default Shiping;
