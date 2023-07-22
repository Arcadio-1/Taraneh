import React, { useEffect } from "react";

const DMain = () => {
  useEffect(() => {
    const getList = async () => {
      const orders = await fetch(`/api/shop/data/getOrderList`, {
        method: "GET",
      });
      const data = await orders.json();
      console.log(data);
    };
    getList();
  });
  return <div>Main</div>;
};

export default DMain;
