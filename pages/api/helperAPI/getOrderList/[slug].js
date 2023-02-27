import { fetchCartItems } from "../../helper";

async function handler(req, res) {
  if (req.method === "GET") {
    const slug = req.query.slug;
    try {
      // console.log(slug);
      const ordersJson = await fetchCartItems(slug);
      if (!ordersJson) {
        throw new Error("failed in geting Order List");
      }
      // console.log(ordersJson);
      // const orders = await ordersJson.json();
      res.status(202).json({ status: "success", orders: ordersJson.orders });
    } catch (error) {
      res.status(404).json({
        status: "errorrr",
        message: error || "خطا در دریافت لیست سفارشات",
        orders: null,
      });
    }
  }
}
export default handler;
