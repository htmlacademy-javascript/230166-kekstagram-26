import { closeModal } from './close-modal.js';
import { createComments } from './create-comments.js';

function createPost(post) {
  const body = document.querySelector('body');
  const bigPicture = document.querySelector('.big-picture');
  const image = bigPicture.querySelector('.big-picture__img img');
  const caption = bigPicture.querySelector('.social__caption');
  const likes = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const commentsList = bigPicture.querySelector('.social__comments');
  const pictureCencel = bigPicture.querySelector('#picture-cancel');

  closeModal(bigPicture, pictureCencel);

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  image.src = post.src;
  image.alt = post.alt;
  likes.textContent = post.likesCount;
  commentsCount.textContent = post.comments.length;
  caption.textContent = post.caption;

  createComments(post.comments, commentsList);
}

export { createPost };
