import { getClient } from "../../functions/getClient";

async function handler(req, res) {
  if (req.method === "GET") {
    const stateId = req.query.stateId;
    const client = await getClient("helper-data");
    const db = client.db();
    const result = await db
      .collection("cities")
      .find({ state: stateId })
      .toArray();
    client.close();
    res.status(200).json({ status: "success", cities: result });
  }
}
export default handler;
