import { closeModal } from './close-modal.js';
import { createComments } from './create-comments.js';
import { loadMore } from './load-more.js';

function createPost(post) {
  const bigPicture = document.querySelector('.big-picture');
  const image = bigPicture.querySelector('.big-picture__img img');
  const caption = bigPicture.querySelector('.social__caption');
  const likes = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const commentsList = bigPicture.querySelector('.social__comments');
  const pictureCencel = bigPicture.querySelector('#picture-cancel');

  image.src = post.src;
  image.alt = post.alt;
  likes.textContent = post.likesCount;
  commentsCount.textContent = post.comments.length;
  caption.textContent = post.caption;

  loadMore(post.comments);
  // createComments(post.comments, commentsList);
  closeModal(bigPicture, pictureCencel);
}

export { createPost };
