import { getClient } from "../../../util/functions/getClient";

export const getDashboardNavLinks = async () => {
  try {
    const client = await getClient("helper-data");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const request = await db
      .collection("dashboard-nav-links-2")
      .find()
      .toArray();
    // console.log(request);
    if (!request) {
      throw new Error("خطا در دریافت لیست ابزار");
    }
    return JSON.stringify({
      status: "success",
      message: "لیست ابزار با موفقیت دریافت شد",
      links: request,
    });
  } catch (error) {
    return JSON.stringify({
      status: "error",
      message: error.message || "خطا در دریافت لیست ابزار بندی ها",
      links: null,
    });
  }
};
