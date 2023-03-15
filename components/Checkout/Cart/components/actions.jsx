import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { getOrederList } from "../../../../store/ManageData/GetData/GetDataAction";

const Actions = () => {
  const { data, status } = useSession();
  const dispatch = useDispatch();
  const clearListHandler = async () => {
    const request = await fetch("/api/helperAPI/addOrder", {
      method: "DELETE",
      body: JSON.stringify({
        userId: data.user.email._id,
      }),
    });
    const response = await request.json();
    dispatch(getOrederList(data.user.email._id));
    console.log(response);
  };
  return (
    <div className="actions">
      <button className="clearBtn" onClick={clearListHandler}>
        پاکسازی لیست
      </button>
      <Link href={"/checkout/shiping"}>
        <button className="continueBtn">ادامه</button>
      </Link>
    </div>
  );
};

export default Actions;
