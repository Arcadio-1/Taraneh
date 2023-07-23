import { getClient } from "../../../util/functions/getClient";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await getClient("helper-data");
      try {
        const id = req.query.slug;
        if (!client) {
          throw new Error("خطا در اتصال به سرور");
        }

        const db = client.db();
        const request = await db.collection("orders").findOne({ _id: id });
        client.close();
        console.log(request);
        if (!request) {
          return res.status(202).json({
            status: "success",
            message: "لیست محصولات با موفقیت دریافت شد",
            orderList: [],
          });
          // throw new Error("سبد خرید مورد نظر یافت نشد");
        }
        return res.status(202).json({
          status: "success",
          message: "لیست محصولات با موفقیت دریافت شد",
          orderList: request,
        });
      } catch (error) {
        client.close();
        return res.status(404).json({
          status: "error",
          message: " serverبروز خطا در دریافت لیست سبد خرید",
          orderList: [],
        });
      }
    } catch (error) {
      return res.status(404).json({
        status: "error",
        message:
          error.message || " serverبروز خطا در اتصال به سرور لیست سبد خرید",
        orderList: [],
      });
    }
  }
}

export default handler;
