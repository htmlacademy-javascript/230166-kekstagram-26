const getPopularPosts = (posts) => {
  const popularPosts = posts.slice().sort((prev, next) => prev.comments.length <= next.comments.length);
  return popularPosts;
};

export { getPopularPosts };
