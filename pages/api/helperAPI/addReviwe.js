import { getProviders } from "next-auth/react";
import { getClient } from "../helper";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const { rate, text, anonimus, postId, parent } = req.body;
  try {
    const providers = await getProviders();
    const d = new Date();
    const date = d.getTime();
    const comment = {
      $set: {
        _id: postId,
        $push: {
          comments: [
            {
              date: date,
              rate: rate,
              text: text,
              parent: parent,
              like: 0,
              disloke: 0,
              // userId: providers.email.id,
            },
          ],
        },
      },
    };
    console.log(comment);
    const client = await getClient("products");
    if (!client) {
      throw new Error("field in get client");
    }
    const db = client.db();
    const request = await db
      .collection("comments-2")
      .findOneAndUpdate({ _id: postId }, comment);
    if (!request) {
      throw new Error("insert faild");
    }
    res.status(200).json({ message: "success", request: request });
  } catch (error) {
    res.status(201).json({ message: error.message });
  }
}
export default handler;
