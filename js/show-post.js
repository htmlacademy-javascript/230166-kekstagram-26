import { createPost } from './create-post.js';
import { openModal, closeModal } from './show-modal.js';

function showPost(posts) {
  const picturesElement = document.querySelector('.pictures');
  const modalElement = document.querySelector('.big-picture');
  const cencelElement = modalElement.querySelector('#picture-cancel');

  function onClickPictures(e) {
    const target = e.target.closest('.picture');

    if (target) {
      const postId = +target.dataset.postId;
      const post = posts.filter((el) => el.id === postId)[0];

      createPost(post);
      openModal(modalElement);
      closeModal(modalElement, cencelElement);
    }

    e.stopImmediatePropagation() ;
  }

  picturesElement.addEventListener('click', onClickPictures);
}

export { showPost };

