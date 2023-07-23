import { getClient } from "../../../util/functions/getClient";

const handler = async (req, res) => {
  try {
    const orderBody = JSON.parse(req.body);
    const { userId, orders } = orderBody;
    const client = await getClient("helper-data");
    if (!client) {
      throw new Error("(همگام سازی)خطا در اتصال به سرور");
    }
    const db = client.db();
    let request;
    if (req.method === "POST") {
      request = await db.collection("orders").insertOne({
        _id: userId,
        orders: orders,
      });
      client.close();
      if (!request) {
        throw new Error("(همگام سازی)خطا در ساخت لیست خرید");
      }
      res.status(201).json({
        status: "success",
        message: "(همگام سازی)لیست خرید ساخته شد",
        response: request,
      });
    }
    if (req.method === "PUT") {
      request = await db
        .collection("orders")
        .findOneAndUpdate({ _id: userId }, { $set: { orders: orders } });
      client.close();
      if (!request) {
        throw new Error("(همگام سازی)خطا در افزودن سفارشات به لیست خرید");
      }
      res.status(201).json({
        status: "success",
        message: "(همگام سازی)سفارشات به لیست خرید اضافه شد",
        response: request,
      });
    }
  } catch (error) {
    res
      .status(404)
      .json({ status: "error", message: error.message, response: null });
  }
};
export default handler;
