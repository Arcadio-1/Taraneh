import { getPost } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    const slug = req.query.slug;
    try {
      const post = await getPost(slug);
      if (!post || post.status === "error") {
        throw new Error(post.message || "خطا در دریافت اطلاعات");
      }
      res.status(202).json({
        status: "success",
        message: "اطلاعات پست دریافت شد",
        post: post.post,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message || "خطا در دریافت اطلاعات پست",
        post: null,
      });
    }
  }
}

export default handler;
