import { MongoClient } from "mongodb";

export const getClient = async (databaseName) => {
  try {
    const client = await MongoClient.connect(
      `${process.env.REACT_APP_MONGODB}${databaseName}?retryWrites=true&w=majority`
    );
    return client;
  } catch (error) {
    throw new Error("خطا در برقراری ارتباط");
  }
};

export const fetchProducts = async () => {
  try {
    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const allProducts = await db.collection("allProducts").find().toArray();
    client.close();
    if (!allProducts) {
      throw new Error("خطا در اتصال");
    }
    return {
      status: "success",
      message: "successfuly",
      allProducts: allProducts,
    };
  } catch (error) {
    return { status: "error", message: error, allProducts: [] };
  }
};

const filtring = (posts, filterType) => {
  if (!filterType || filterType === "all") {
    return posts;
  }
  1;
  if (filterType) {
    const filterd = posts.filter((item) => item.postType === filterType);
    return filterd;
  }
};

const sorting = (posts, sortType) => {
  // console.log(sortType);
  let tempPosts = [...posts];
  switch (sortType) {
    case "Max-sell":
      return tempPosts.sort((postA, postB) => {
        return postA.statistics.soled < postB.statistics.soled ? 1 : -1;
      });
    case "Fav-rate":
      return tempPosts.sort((postA, postB) => {
        return postA.statistics.like < postB.statistics.like ? 1 : -1;
      });
    case "MaxToLow-price":
      // console.log("MaxToLow");
      return tempPosts.sort((postA, postB) => {
        return postA.price.value -
          (postA.price.offPersent / 100) * postA.price.value <
          postB.price.value - (postB.price.offPersent / 100) * postB.price.value
          ? 1
          : -1;
      });
    case "LowToMax-price":
      return tempPosts.sort((postA, postB) => {
        return postA.price.value -
          (postA.price.offPersent / 100) * postA.price.value >
          postB.price.value - (postB.price.offPersent / 100) * postB.price.value
          ? 1
          : -1;
      });
    case "Max-visited":
      return tempPosts.sort((postA, postB) => {
        return postA.statistics.views < postB.statistics.views ? 1 : -1;
      });
    case "Latest-Date":
      return tempPosts.sort((postA, postB) => {
        return postA.statistics.dateAdded < postB.statistics.dateAdded ? 1 : -1;
      });
    default:
      return tempPosts.sort((postA, postB) => {
        return postA.statistics.dateAdded < postB.statistics.dateAdded ? 1 : -1;
      });
  }
};

const pagenation = (posts, perPage) => {
  const postPerPage = perPage || 12;
  const numberOfPages = Math.ceil(posts.length / postPerPage);
  const pagenatedPosts = Array.from({ length: numberOfPages }, (_, index) => {
    let start = index * postPerPage;
    return posts.slice(start, start + postPerPage);
  });
  return { pagenatedPosts, numberOfPages };
};

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
    const productsReq = await fetchProducts();
    if (!productsReq || productsReq.status === "error") {
      throw new Error(productsReq.message || "خطا در اتصال به سرور");
    }
    const { allProducts } = productsReq;
    const filterdPosts = filtring(allProducts, filterType);
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
      products: prodPerPage,
      allProducts,
      numberOfPages,
    });
  } catch (error) {
    return { status: error.message };
  }
};

export const getPaths = async () => {
  try {
    const getProductsReq = await fetchProducts();
    if (!getProductsReq || getProductsReq.status === "error") {
      throw new Error(getProductsReq.message || "خطا در اتصال به سرور");
    }
    const { allProducts } = getProductsReq;
    const paths = allProducts.map((item) => {
      return { id: item.id };
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

export async function getSingleProduct(id) {
  try {
    const getProductReq = await fetchProducts();
    if (!getProductReq || getProductReq.status === "error") {
      throw new Error(getProductReq.message || "خطا در اتصال");
    }
    const product = getProductReq.allProducts.find((item) => item.id === id);
    // console.log(product);
    if (!product) {
      return {
        status: "notFuond",
        message: "product is not found",
        product: {},
      };
    }
    return JSON.stringify({
      status: "success",
      message: "successfuly",
      product: product,
    });
  } catch (error) {
    return JSON.stringify({ status: "error", message: error, product: {} });
  }
}

const fetchComments = async (id) => {
  try {
    const client = await getClient("products");
    if (!client) {
      throw new Error(client.error || "عدم دسترسی به سرور");
    }
    const db = client.db();
    const comments = await db.collection("comments").findOne({ id: id });
    if (!comments) {
      return { status: "notfound", message: "کامنت یافت نشد", comments: null };
    }
    // console.log(comments);
    return { status: "success", message: "کامنت یافت شد", comments: comments };
  } catch (error) {
    return {
      status: "error",
      message: error || "خطا در دریافت اطلاعات",
      comments: null,
    };
  }
};

export const getComments = async (id) => {
  const comments = await fetchComments(id);
  console.log(comments);
  return JSON.stringify({
    status: comments.status,
    message: comments.message,
    comments: comments.comments,
  });
};
