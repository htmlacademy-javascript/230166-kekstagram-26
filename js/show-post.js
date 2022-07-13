import { createPost } from './create-post.js';
import { getPost } from './get-post.js';
import { openModal } from './open-modal.js';
import { closeModal } from './close-modal.js';

function showPostModal(posts) {
  const pictures = document.querySelector('.pictures');
  const bigPictureElement = document.querySelector('.big-picture');
  const pictureCencelBtn = bigPictureElement.querySelector('#picture-cancel');

  function onClickPictures(e) {
    const element = e.target.closest('.picture');

    if (element) {
      const postId = +element.dataset.postId;
      const post = getPost(posts, postId);

      createPost(post);
      openModal(bigPictureElement);
      closeModal(bigPictureElement, pictureCencelBtn);
    }

    e.stopImmediatePropagation() ;
  }

  pictures.addEventListener('click', onClickPictures);
}

export { showPostModal };

