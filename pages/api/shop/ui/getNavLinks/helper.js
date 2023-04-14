import { getClient } from "../../../util/functions/getClient";

export const getCategoryNavLinks = async () => {
  try {
    const client = await getClient("helper-data");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const request = await db.collection("categoryNavLinks").find().toArray();
    if (!request) {
      throw new Error("خطا در دریافت لیست دسته بندی ها");
    }
    return JSON.stringify({
      status: "success",
      message: "لیست محصولات با موفقیت دریافت شد",
      links: request,
    });
  } catch (error) {
    return JSON.stringify({
      status: "error",
      message: error.message || "خطا در دریافت لیست دسته بندی ها",
      links: null,
    });
  }
};
