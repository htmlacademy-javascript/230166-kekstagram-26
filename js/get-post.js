const getPost = (posts, id) => posts.filter((post) => post.id === id)[0];

export { getPost };
