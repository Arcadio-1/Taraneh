import { getClient } from "../../functions/getClient";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { items, serverName, collectionName } = req.body;
  try {
    const client = await getClient(serverName);
    console.log(client);
    if (!client) {
      throw new Error("field at get client");
    }
    const db = client.db();
    const options = { ordered: true };
    const result = await db
      .collection(collectionName)
      .insertMany(items, options);
    client.close();
    if (!result) {
      throw new Error("insert faild");
    }
    res.status(200).json({ message: "success", result: result });
  } catch (error) {
    res.status(201).json({ message: error.message });
  }
}
export default handler;
