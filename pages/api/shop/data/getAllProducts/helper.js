import { getClient } from "../../../util/functions/getClient";

export const getProducts = async () => {
  try {
    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    try {
      const db = client.db();
      const request = await db.collection("allProducts").find().toArray();
      client.close();
      if (!request) {
        throw new Error("خطا در دریافت لیست محصولات");
      }
      return JSON.stringify({
        status: "success",
        message: "لیست محصولات با موفقیت دریافت شد",
        products: request,
      });
    } catch (error) {
      return JSON.stringify({
        status: "error",
        message: error.message || "بروز خطا در دریافت لیست محصولات",
        products: null,
      });
    }
  } catch (error) {
    return JSON.stringify({
      status: "error",
      message: error.message || "خطا در اتصال به سرور",
      products: null,
    });
  }
};
