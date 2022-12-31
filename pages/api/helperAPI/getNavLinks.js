import { getClient } from "../helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await getClient("helper-data");
      if (!client) {
        throw new Error("proplem in get Client");
      }
      const db = client.db();
      const result = await db.collection("categoryNavLinks").find().toArray();
      if (!result) {
        throw new Error("problem in get nav links");
      }
      res.status(200).json({ status: "success", data: result });
    } catch (error) {
      res.status(201).json({ status: "error", data: null });
    }
  }
}

export default handler;
