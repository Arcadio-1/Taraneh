import { useSession } from "next-auth/react";
import React from "react";
import Account from "../Auth/Account";
import TotalCard from "./Components/totalCard";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import Setup from "../ui/Setup/Setup";
import BuyerData from "./Components/buyerData";
import BoxContent from "./Components/BoxContent";
const Shiping = () => {
  const { data, status } = useSession();
  // console.log(data.user.email);

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
          <TotalCard />
        </div>
        <div className="shiping-boxContentContainer">
          <BoxContent />
        </div>
      </div>
    );
  }
};

export default Shiping;
