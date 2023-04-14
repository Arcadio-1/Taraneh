import { getProducts } from "../data/getAllProducts/helper";

export const getPaths = async () => {
  try {
    const request = await getProducts();
    const response = await JSON.parse(request);
    if (!response || response.status === "error") {
      throw new Error(response.message || "خطا در اتصال به سرور");
    }
    const { products } = response;
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
    return { status: "error", message: error, allPath: null };
  }
};
