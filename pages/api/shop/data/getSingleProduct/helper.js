import { getClient } from "../../../util/functions/getClient";

export const getProduct = async (id) => {
  try {
    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const request = await db.collection("allProducts").findOne({ id: id });
    client.close();
    if (!request) {
      throw new Error("محصول مورد نظر یافت نشد");
    }
    return JSON.stringify({
      status: "success",
      message: "محصول مورد نظر دریافت شد",
      product: request,
    });
  } catch (error) {
    client.close();
    return JSON.stringify({
      status: "error",
      message: error.message || "خطا در دریافت محصول",
      product: null,
    });
  }
};
