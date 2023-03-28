import Link from "next/link";
import React from "react";
import Amount from "../../../ProductDetails/components/Body/Components/Content/OrderForm/Components/Amount";

const Actions = () => {
  return (
    <div className="actions">
      <Amount clearList={true} />
      <Link href={"/checkout/shiping"}>
        <button className="continueBtn">ادامه</button>
      </Link>
    </div>
  );
};

export default Actions;
