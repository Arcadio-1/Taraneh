import { getClient } from "../../../util/functions/getClient";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const id = req.query.slug;
      // console.log(id);
      const client = await getClient("helper-data");
      if (!client) {
        throw new Error("خطا در اتصال به سرور");
      }

      const db = client.db();
      const request = await db.collection("orders").findOne({ _id: id });
      // console.log(request);
      if (!request) {
        throw new Error("سبد خرید مورد نظر یافت نشد");
      }
      res.status(202).json({
        status: "success",
        message: "لیست محصولات با موفقیت دریافت شد",
        orderList: request,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message || "بروز خطا در دریافت لیست سبد خرید",
        orderList: request,
      });
    }
  }
}

export default handler;
