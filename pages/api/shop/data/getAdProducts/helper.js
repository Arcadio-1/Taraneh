import { getClient } from "../../../util/functions/getClient";

export const getAdProducts = async () => {
  try {
    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const request = await db
      .collection("allProducts")
      .find({ isAd: true })
      .toArray();
    client.close();
    if (!request) {
      throw new Error("خطا در دریافت لیست محصولات تبلیغاتی");
    }
    return JSON.stringify({
      status: "success",
      message: "لیست محصولات تبلیغاتی با موفقیت دریافت شد",
      adProducts: request,
    });
  } catch (error) {
    return JSON.stringify({
      status: "error",
      message: error.message || "بروز خطا در دریافت لیست محصولات تبلیغاتی",
      adProducts: null,
    });
  }
};
