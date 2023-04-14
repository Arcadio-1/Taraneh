import { getClient } from "../../../util/functions/getClient";

export const getComments = async (id) => {
  try {
    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const request = await db.collection("comments-2").findOne({ _id: id });
    if (!request) {
      throw new Error("کامنت یافت نشد");
    }
    return JSON.stringify({
      status: "success",
      message: "لیست کامنت ها با موفقیت دریافت شد",
      comments: request,
    });
  } catch (error) {
    return JSON.stringify({
      status: "error",
      message: error.message || "خطا در دریافت لیست کامنت ها",
      comments: null,
    });
  }
};
