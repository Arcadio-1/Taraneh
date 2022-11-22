import { getClient } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { serverName, collectionName } = req.body;
      const client = await getClient("products");
      if (!client) {
        throw new Error("عدم توانایی اتصال به سرور");
      }
      const db = client.db();
      const result = await db.collection("allProducts").find().toArray();
      if (!result) {
        throw new Error("دسترسی به اطلاعات ممکن نیست");
      }
      res.status(200).json({ status: "success", data: result });
    } catch (error) {
      res.status(201).json({ status: "error", message: error.message });
    }
  }
  return;
}
export default handler;
