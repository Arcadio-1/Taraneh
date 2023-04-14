export const sorting = (posts, sortType) => {
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
