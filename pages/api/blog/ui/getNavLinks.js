import { getClient } from "../../util/functions/getClient";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await getClient("blog");
      if (!client) {
        throw new Error("عدم توانایی اتصال به سرور");
      }
      const db = client.db();
      const result = await db.collection("blogNavLinks").find().toArray();
      if (!result) {
        throw new Error("دسترسی به اطلاعات ممکن نیست");
      }
      res.status(200).json({
        status: "success",
        message: "اطلاعات با موفقیت دریافت شد",
        data: result,
      });
    } catch (error) {
      res.status(201).json({
        status: error.message,
        message: error.message,
        data: null,
      });
    }
  }
  return;
}
export default handler;
