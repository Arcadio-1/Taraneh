import { getClient } from "../helper";

async function handler(req, res) {
  try {
    const orderBody = JSON.parse(req.body);
    const { userId, orders, isInsert } = orderBody;

    const client = await getClient("helper-data");
    if (!client) {
      throw new Error("field in get client");
    }
    let request;
    const db = client.db();
    if (req.method === "POST") {
      if (isInsert) {
        console.log(orders);
        request = await db.collection("orders").insertOne({
          _id: userId,
          orders: [orders],
        });
        console.log(request);
      }
      if (!isInsert) {
        // console.log(orderBody.cartItems);
        request = await db
          .collection("orders")
          .findOneAndUpdate(
            { _id: userId },
            { $set: { orders: orderBody.cartItems } }
          );
      }
    }
    if (req.method === "PUT") {
      request = await db
        .collection("orders")
        .updateOne({ _id: userId }, { $push: { orders: orders } });
    }
    if (req.method === "DELETE") {
      request = await db.collection("orders").findOneAndDelete({ _id: userId });
    }

    if (!request) {
      throw new Error("insert faild");
    }
    res.status(201).json({ message: "success", request: request });
  } catch (error) {
    res.status(404).json({ message: error.message, request: null });
  }
}

export default handler;
