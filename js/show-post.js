import { createPost } from './create-post.js';
import { openModal, closeModal } from './modal.js';

const picturesElement = document.querySelector('.pictures');
const modalElement = document.querySelector('.big-picture');
const cencelElement = modalElement.querySelector('#picture-cancel');

const showPost = (posts) => {
  const onClickPictures = (e) => {
    const target = e.target.closest('.picture');

    if (target) {
      const postId = +target.dataset.postId;
      const post = posts.filter((el) => el.id === postId)[0];

      createPost(post);
      openModal(modalElement);
      closeModal(modalElement, cencelElement);
    }

    e.stopImmediatePropagation();
  };

  picturesElement.addEventListener('click', onClickPictures);
};

export { showPost };

