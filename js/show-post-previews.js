import { createPostPreviews } from './create-post-previews.js';
import { getRandomPosts } from './get-random-posts.js';
import { getPopularPosts } from './get-popular-posts.js';
import { debounce } from './utils.js';

function showPostPreviews(posts) {
  const COUNT_RANDOM_POSTS = 10;
  const RERENDER_DELAY = 500;
  const filterElement = document.querySelector('.img-filters');
  const filterBtnElements = filterElement.querySelectorAll('.img-filters__button');

  filterElement.classList.remove('img-filters--inactive');
  createPostPreviews(posts);

  filterElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('img-filters__button')) {
      const pictureElements = document.querySelectorAll('.pictures .picture');
      let filtredPosts = [];

      filterBtnElements.forEach((btn) => {
        btn.classList.remove('img-filters__button--active');
      });

      pictureElements.forEach((picture) => {
        picture.remove();
      });

      switch(e.target.id) {
        case 'filter-default':
          createPostPreviews(posts);
          e.target.classList.add('img-filters__button--active');
          break;
        case 'filter-random':
          debounce(
            () => {
              filtredPosts = getRandomPosts(posts, COUNT_RANDOM_POSTS);
              createPostPreviews(filtredPosts);
            },
            RERENDER_DELAY
          )();
          e.target.classList.add('img-filters__button--active');
          break;
        case 'filter-discussed':
          debounce(
            () => {
              filtredPosts = getPopularPosts(posts);
              createPostPreviews(filtredPosts);
            },
            RERENDER_DELAY
          )();
          e.target.classList.add('img-filters__button--active');
          break;
      }
    }
  });
}

export { showPostPreviews };
