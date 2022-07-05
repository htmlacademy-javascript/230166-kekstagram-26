import { createPost } from './create-post.js';
import { getPost } from './get-post.js';
import { openModal } from './open-modal.js';

function showPost(posts) {
  const pictures = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');

  pictures.addEventListener('click', (e) => {
    e.preventDefault();
    const element = e.target.closest('.picture');

    if (element) {
      const postId = +element.dataset.postId;
      const post = getPost(posts, postId);
      // console.log(post);

      createPost(post);
      openModal(bigPicture);
    }
  }, true);
}

export { showPost };

