import { getClient } from "../helper";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await getClient("helper-data");

    const db = client.db();
    const result = await db.collection("categoryNavLinks").find().toArray();
    res.status(200).json({ status: "success", data: result });
  }
}

export default handler;
