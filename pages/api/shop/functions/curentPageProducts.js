// import { getProducts } from "../data/getAllProducts/helper";
import { filtring } from "../functions/filtring";
import { sorting } from "../functions/sorting";
import { pagenation } from "../functions/pagination";
import { getProducts } from "../data/getAllProducts/helper";
const PostForPage = (posts, pageNum) => {
  // console.log(posts[0]);
  if (!pageNum) {
    return posts[0];
  }
  if (pageNum) {
    return posts[pageNum - 1];
  }
};

export const curentPageProducts = async (querys) => {
  try {
    const { sort, perPage, page, filterType } = querys;
    const request = await getProducts();
    const response = await JSON.parse(request);
    if (!response || response.status === "error") {
      throw new Error(response.message || "خطا دردریافت لیست محصولات");
    }

    const { products } = response;
    const filterdPosts = filtring(products, filterType);
    const sortedPosts = sorting(filterdPosts, sort);
    const { pagenatedPosts, numberOfPages } = pagenation(sortedPosts, perPage);
    if (!pagenatedPosts || !numberOfPages) {
      throw new Error("خطا در صفحه بندی");
    }
    const prodPerPage = PostForPage(pagenatedPosts, page);
    // console.log(prodPerPage);
    if (!prodPerPage) {
      throw new Error("خطا در بارگزاری محصولات");
    }
    return JSON.stringify({
      status: "successful",
      message: "اطلاعات با موفقیت دریافت شد",
      pagenatedPosts: prodPerPage,
      products,
      numberOfPages,
    });
  } catch (error) {
    return { status: "error", message: error.message };
  }
};
