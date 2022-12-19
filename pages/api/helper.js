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

    const client = await getClient("products");
    if (!client) {
      throw new Error("خطا در اتصال به سرور");
    }
    const db = client.db();
    const allProducts = await db.collection("allProducts").find().toArray();
    if (!allProducts) {
      throw new Error("خطا در اتصال");
    }
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
