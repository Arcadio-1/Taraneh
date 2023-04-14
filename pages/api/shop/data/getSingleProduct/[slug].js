import { getProduct } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    const slug = req.query.slug;
    try {
      const request = await getProduct(slug);
      const response = JSON.parse(request);
      if (!response || response.status === "error") {
        throw new Error("محصول مورد نظر یافت نشد");
      }
      res
        .status(202)
        .json({
          status: "success",
          message: "اطلاعات محصول مورد نظر دریافت شد",
          product: response.product,
        });
    } catch (error) {
      res
        .status(404)
        .json({ status: "error", message: error.message, product: null });
    }
  }
}
export default handler;
