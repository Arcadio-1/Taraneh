import { getComment } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const slug = req.query.slug;
      const comments = await getComment(slug);
      if (!comments || comments.status === "error") {
        throw new Error(comments.message || "خطا در دریافت کامنت ها");
      }
      res.status(202).json({
        status: "success",
        message: "کامنت ها با موفقیت دریافت شد",
        comments: comments.comment,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message || "خطا در دریافت کامنت  ها",
      });
    }
  }
}
export default handler;
