import { getClient } from "../../../util/functions/getClient";

async function handler(req, res) {
  try {
    const orderBody = JSON.parse(req.body);
    const { userId, orders } = orderBody;

    const client = await getClient("helper-data");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    let request;
    const db = client.db();

    if (req.method === "POST") {
      request = await db.collection("orders").insertOne({
        _id: userId,
        orders: [orders],
      });
      client.close();
      if (!request) {
        throw new Error("خطا در افزودن محصول به سبد");
      }
      res.status(201).json({
        status: "success",
        message: "محصول مورد نظر به سبد اضافه شد",
        response: request,
      });
    }

    if (req.method === "PUT") {
      request = await db
        .collection("orders")
        .updateOne({ _id: userId }, { $push: { orders: orders } });
      client.close();
      if (!request) {
        throw new Error("خطا در افزودن محصول به سبد");
      }
      res.status(201).json({
        status: "success",
        message: "محصول مورد نظر به سبد اضافه شد",
        response: request,
      });
    }

    if (req.method === "DELETE") {
      request = await db.collection("orders").findOneAndDelete({ _id: userId });
      client.close();
      if (!request) {
        throw new Error("خطا در پاکسازی سبد");
      }
      res.status(201).json({
        status: "success",
        message: "سبد خرید پاکسازی شد",
        response: request,
      });
    }
  } catch (error) {
    res
      .status(404)
      .json({ status: "error", message: error.message, response: null });
  }
}

export default handler;
