import { getClient } from "../helper";

const handler = async (req, res) => {
  try {
    const orderBody = JSON.parse(req.body);
    const { userId, orders } = orderBody;
    const client = await getClient("helper-data");
    if (!client) {
      throw new Error("can't get client");
    }
    const db = client.db();
    let request;
    if (req.method === "POST") {
      request = await db.collection("orders").insertOne({
        _id: userId,
        orders: orders,
      });
    }
    if (req.method === "PUT") {
      request = await db
        .collection("orders")
        .findOneAndUpdate({ _id: userId }, { $set: { orders: orders } });
    }
    if (!request) {
      throw new Error("can't send Request");
    }
    res
      .status(201)
      .json({ status: "success", message: "request is sented to server" });
  } catch (error) {
    res
      .status(404)
      .json({ status: "error", message: error.message, response: null });
  }
};
export default handler;
