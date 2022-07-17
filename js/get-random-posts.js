import { getRandomSet } from './utils.js';

const getRandomPosts = (posts, size) => {
  const arr = getRandomSet(0, posts.length - 1, size);
  const randomPosts = [];

  arr.forEach((index) => {
    randomPosts.push(posts[index]);
  });

  return randomPosts;
};

export { getRandomPosts };
