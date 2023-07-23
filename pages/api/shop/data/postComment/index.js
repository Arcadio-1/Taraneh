import { getClient } from "../../../util/functions/getClient";

// import { getClient } from "../../../util/functions/getClient";
async function handler(req, res) {
  try {
    const commentBody = JSON.parse(req.body);
    const { _id, comment } = commentBody;
    console.log(commentBody);
    console.log(req.method);
    console.log(_id);
    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    let request;
    const db = client.db();

    if (req.method === "POST") {
      request = await db.collection("comments-2").insertOne({
        _id: _id,
        comments: [comment],
      });
      client.close();
      if (!request) {
        throw new Error("خطا در ارسال کامنت");
      }
      res.status(201).json({
        status: "success",
        message: "کامنت شما با موفقیت ارسال شد",
        response: request,
      });
    }

    if (req.method === "PUT") {
      request = await db
        .collection("comments-2")
        .updateOne({ _id: _id }, { $push: { comments: comment } });
      client.close();
      if (!request) {
        throw new Error("خطا در ارسال کامنت");
      }
      res.status(201).json({
        status: "success",
        message: "کامنت شما با موفقیت ارسال شد",
        response: request,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message || "خطا در ارسال کامنت شما برای این محصول",
      response: null,
    });
  }
}

export default handler;
