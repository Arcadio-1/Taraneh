import { getComments } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const id = req.query.slug;
      const request = await getComments(id);
      const response = JSON.parse(request);
      if (!response || response.status === "error") {
        throw new Error("کامنت یافت نشد");
      }
      res.status(202).json({
        status: "success",
        message: "لیست کامن ها با موفقیت دریافت شد",
        comments: response.comments,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message || "کامنت برای این محصول یافت نشد",
        comments: null,
      });
    }
  }
}

export default handler;
