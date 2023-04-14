import { getClient } from "../../../helper";

async function handler(req, res) {
  if (req.method === "GET") {
    const client = await getClient("helper-data");
    const db = client.db();
    const request = await db.collection("states").find().toArray();
    res.status(200).json({ status: "success", states: request });
  }
}

export default handler;
