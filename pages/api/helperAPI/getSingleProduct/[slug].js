import { getSingleProduct } from "../../helper";

async function handler(req, res) {
  if (req.method === "GET") {
    const slug = req.query.slug;
    try {
      const productJson = await getSingleProduct(slug);
      if (!productJson) {
        throw new Error("product is not found");
      }
      const product = JSON.parse(productJson);
      //   console.log(product.product);
      res.status(202).json({ status: "success", product: product.product });
    } catch (error) {
      res.status(404).json({ status: error, product: null });
    }
  }
}
export default handler;
