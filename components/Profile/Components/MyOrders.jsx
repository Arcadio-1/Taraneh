import Image from "next/image";
import React from "react";

const MyOrders = () => {
  return (
    <div className="myOrders">
      <h2 className="title">سفارش های من</h2>
      <ul className="list">
        <li className="item">
          <Image
            src={"/image/ui/profile/status-processing.svg"}
            height={50}
            width={50}
            alt={"سفارشات تحویل شده"}
          />
          <div className="content">
            <p className="data">0 سفارش</p>
            <p className="status">جاری</p>
          </div>
        </li>
        <li className="item">
          <Image
            src={"/image/ui/profile/status-delivered.svg"}
            height={50}
            width={50}
            alt={"سفارشات تحویل شده"}
          />
          <div className="content">
            <p className="data">0 سفارش</p>
            <p className="status">تحویل شده</p>
          </div>
        </li>
        <li className="item">
          <Image
            src={"/image/ui/profile/status-returned.svg"}
            height={50}
            width={50}
            alt={"سفارشات تحویل شده"}
          />
          <div className="content">
            <p className="data">0 سفارش</p>
            <p className="status">مرجوع شده</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MyOrders;
