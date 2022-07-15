import { showComments } from './show-comments.js';

const modalElement = document.querySelector('.big-picture');
const imageElement = modalElement.querySelector('.big-picture__img img');
const captionElement = modalElement.querySelector('.social__caption');
const likesCountElement = modalElement.querySelector('.likes-count');
const commentsCountElement = modalElement.querySelector('.comments-count');

function createPost(post) {
  imageElement.src = post.url;
  likesCountElement.textContent = post.likes;
  commentsCountElement.textContent = post.comments.length;
  captionElement.textContent = post.description;

  showComments(post.comments);
}

export { createPost };
