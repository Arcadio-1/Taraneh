import { getClient } from "../helper";

async function handler(req, res) {
  try {
    const orderBody = JSON.parse(req.body);
    // console.log(orderBody);
    // console.log(req.method);
    const { userId, orders, isInsert } = orderBody;
    // console.log(orderBody);
    // const order = {
    //   _id: userId,
    //   orders: orders,
    // };

    const client = await getClient("helper-data");
    if (!client) {
      throw new Error("field in get client");
    }
    let request;
    const db = client.db();
    if (req.method === "POST") {
      if (isInsert) {
        console.log(orders);
        console.log(userId);
        request = await db.collection("orders").insertOne({
          _id: userId,
          orders: [orders],
        });
        console.log(request);
      }
      if (!isInsert) {
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
    res.status(204).json({ message: error.message, request: null });
  }
}

export default handler;
