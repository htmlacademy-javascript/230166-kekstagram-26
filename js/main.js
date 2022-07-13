import { getData } from './api.js';
import { createPostPreviews } from './create-post-previews.js';
import { showPost } from './show-post.js';
import { showPageError } from './utils.js';
import { uploadPostForm } from './upload-post-form.js';
// import './nouislider.js';

getData(
  'https://26.javascript.pages.academy/kekstagram/data',
  (data) => {
    createPostPreviews(data);
    showPost(data);
  },
  (error) => showPageError(error)
);

uploadPostForm();
