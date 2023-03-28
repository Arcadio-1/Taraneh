import { getClient } from "../helper";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const reqBody = JSON.parse(req.body);
      const { userId, orders } = reqBody;

      const client = await getClient("helper-data");
      if (!client) {
        throw new Error("خطا در اتصال");
      }
      const db = client.db();
      const request = await db
        .collection("orders")
        .findOneAndUpdate({ _id: userId }, { $set: { orders: orders } });
      if (!request) {
        throw new Error("faild in send request");
      }
      res.status(201).json({
        status: "success",
        message: "تغیر تعداد با موفقیت انجام شد",
        response: request,
      });
    }
  } catch (error) {
    res
      .status(404)
      .json({ status: "", message: error.message, response: null });
  }
}

export default handler;
