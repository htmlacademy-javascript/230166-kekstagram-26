import { createPostPreviews } from './create-post-previews.js';
import { showPostModal } from './show-post.js';
import { showUploadPostModal } from './show-upload-post-modal.js';
import { setUploadPostForm } from './upload-post-form.js';
import { getData } from './api.js';
import { showPageError } from './utils.js';

import './nouislider.js';

getData(
  'https://26.javascript.pages.academy/kekstagram/data',
  (data) => {
    createPostPreviews(data);
    showPostModal(data);
  },
  (error) => showPageError(error)
);

showUploadPostModal();
setUploadPostForm();
