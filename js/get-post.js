function getPost(posts, id) {
  return posts.filter((post) => post.id === id)[0];
}

export { getPost };
