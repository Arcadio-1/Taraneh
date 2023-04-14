import { getProducts } from "../data/getAllProducts/helper";

export const getPaths = async () => {
  try {
    const getProductsReq = await getProducts();
    if (!getProductsReq || getProductsReq.status === "error") {
      throw new Error(getProductsReq.message || "خطا در اتصال به سرور");
    }
    const { products } = getProductsReq;
    const paths = products.map((item) => {
      return { id: item.id, title: item.title };
    });
    // console.log(paths);
    return JSON.stringify({
      status: "success",
      message: "successfuly",
      allPath: paths,
    });
  } catch (error) {
    return { status: "error", message: error, paths };
  }
};
