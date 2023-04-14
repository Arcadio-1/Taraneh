import { getAdProducts } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const request = await getAdProducts();
      const response = JSON.parse(request);
      if (!response || response.status === "error") {
        throw new Error(
          response.message || "خطا در دریافت لیست محصولات تبلیغاتی رخ داده است"
        );
      }
      res.status(202).json({
        status: "success",
        message: "لیست محصولات تبلیغاتی با موفقیت دریافت شد",
        adProducts: response.adProducts,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message || "بروز خطا در دریافت محصولات تبلیغاتی",
        adProducts: null,
      });
    }
  }
}

export default handler;
