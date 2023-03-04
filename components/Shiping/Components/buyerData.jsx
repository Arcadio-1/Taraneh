import { useSession } from "next-auth/react";
import React from "react";

const BuyerData = () => {
  const { data } = useSession();
  console.log(data.user.email);
  const { name, family, stateName, cityName, address, mobile, zipCode } =
    data.user.email;
  return (
    <div className="shiping-buyerData">
      <h2 className="title">مشخصات تحویل گیرنده سفارش</h2>
      <div className="content">
        <p className="fullname">
          <span>{name}</span>
          <span>{family}</span>
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>استان</th>
              <th>شهرستان</th>
              <th>آدرس</th>
              <th>کد پستی</th>
              <th>شماره تماس</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stateName}</td>
              <td>{cityName}</td>
              <td>{address}</td>
              <td>{zipCode}</td>
              <td className="fnNum ">{mobile}</td>
            </tr>
          </tbody>
        </table>
        <table className="mdTable">
          <tbody>
            <tr>
              <th>استان</th>
              <td>{stateName}</td>
            </tr>
            <tr>
              <th>شهرستان</th>
              <td>{cityName}</td>
            </tr>
            <tr>
              <th>آدرس</th>
              <td>{<td>{address}</td>}</td>
            </tr>
            <tr>
              <th>کدپستی</th>
              <td>{zipCode}</td>
            </tr>
            <tr>
              <th>شماره تماس</th>
              <td className="fnNum ">{mobile}</td>
            </tr>
            <tr>
              <th>استان</th>
              <td>{stateName}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerData;
