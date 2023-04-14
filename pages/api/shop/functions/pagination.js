export const pagenation = (posts, perPage) => {
  const postPerPage = perPage || 12;
  const numberOfPages = Math.ceil(posts.length / postPerPage);
  const pagenatedPosts = Array.from({ length: numberOfPages }, (_, index) => {
    let start = index * postPerPage;
    return posts.slice(start, start + postPerPage);
  });
  return { pagenatedPosts, numberOfPages };
};
