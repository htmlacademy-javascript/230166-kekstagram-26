import { createPostPreviews } from './create-post-previews.js';
import { getRandomPosts } from './get-random-posts.js';
import { getPopularPosts } from './get-popular-posts.js';
import { debounce } from './utils.js';

const COUNT_RANDOM_POSTS = 10;
const RERENDER_DELAY = 500;
const filterElement = document.querySelector('.img-filters');
const filterBtnElements = filterElement.querySelectorAll('.img-filters__button');

const postsFilter = debounce((e, posts) => {
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
        filtredPosts = getRandomPosts(posts, COUNT_RANDOM_POSTS);
        createPostPreviews(filtredPosts);
        e.target.classList.add('img-filters__button--active');
        break;
      case 'filter-discussed':
        filtredPosts = getPopularPosts(posts);
        createPostPreviews(filtredPosts);
        e.target.classList.add('img-filters__button--active');
        break;
    }
  }
}, RERENDER_DELAY);

const showPostPreviews = (posts) => {
  filterElement.classList.remove('img-filters--inactive');
  createPostPreviews(posts);
  filterElement.addEventListener('click', (e) => postsFilter(e, posts));
};

export { showPostPreviews };
