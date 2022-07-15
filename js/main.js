import { getData } from './api.js';
import { showPost } from './show-post.js';
import { showErrorPage } from './error-page.js';
import { showUploadForm } from './show-upload-form.js';
import { showPostPreviews } from './show-post-previews.js';

getData(
  'https://26.javascript.pages.academy/kekstagram/data',
  (posts) => {
    showPostPreviews(posts);
    showPost(posts);
  },
  (error) => showErrorPage(error)
);

showUploadForm();
