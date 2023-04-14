import { getCategoryNavLinks } from "./helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const request = await getCategoryNavLinks();
      const response = await JSON.parse(request);
      if (!response || response.status === "error") {
        throw new Error(
          response.message || "خطا در بارگزاری اطلاعات دسته بندی ها"
        );
      }
      res.status(202).json({
        status: "success",
        message: "لیست دسته بندی محصولات با موفقیت دریافت شد",
        links: response.links,
      });
    } catch (error) {
      res.status(404).json({
        status: "error",
        message: error.message || "خطا در دریافت لیست محصولات",
        list: null,
      });
    }
  }
}

export default handler;
