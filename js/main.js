import { getData } from './api.js';
import { showPost } from './show-post.js';
import { showErrorPage } from './show-error-page.js';
import { uploadPostForm } from './upload-post-form.js';
import { filterPosts } from './filter-posts.js';

getData(
  'https://26.javascript.pages.academy/kekstagram/data',
  (posts) => {
    filterPosts(posts);
    showPost(posts);
  },
  (error) => showErrorPage(error)
);

uploadPostForm();
