import { getCategoryNavLinks, getDashboardNavLinks } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const request = await getDashboardNavLinks();
      const response = await JSON.parse(request);
      if (!response || response.status === "error") {
        throw new Error(
          response.message || "خطا در بارگزاری اطلاعات لیست ابزار"
        );
      }
      res.status(202).json({
        status: "success",
        message: "لیست ابزار با موفقیت دریافت شد",
        links: response.links,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message || "خطا در دریافت لیست ابزار",
        list: null,
      });
    }
  }
}

export default handler;
