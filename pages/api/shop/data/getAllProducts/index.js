import { getProducts } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const request = await getProducts();
      const response = JSON.parse(request);
      if (!response || response.status === "error") {
        throw new Error(
          response.message || "خطا در دریافت لیست محصولات رخ داده است"
        );
      }

      res.status(202).json({
        status: "success",
        message: "لیست محصولات با موفقیت دریافت شد",
        products: response.products,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message || "بروز خطا در دریافت محصولات",
        products: null,
      });
    }
  }
}

export default handler;
