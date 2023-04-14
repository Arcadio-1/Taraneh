export const filtring = (posts, filterType) => {
  if (!filterType || filterType === "all") {
    return posts;
  }
  1;
  if (filterType) {
    const filterd = posts.filter((item) => item.postType === filterType);
    return filterd;
  }
};
