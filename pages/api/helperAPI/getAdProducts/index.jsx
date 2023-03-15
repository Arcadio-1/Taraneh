import { getAdProducts } from "../../helper";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const productsJson = await getAdProducts();
      if (!productsJson) {
        throw new Error("product is not found");
      }
      const products = JSON.parse(productsJson);
      //   console.log(products);
      res.status(202).json({ status: "success", products: products.products });
    } catch (error) {
      res.status(404).json({ status: error, products: null });
    }
  }
}
export default handler;
