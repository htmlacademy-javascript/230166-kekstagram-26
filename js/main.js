import { getData } from './api.js';
import { showPost } from './show-post.js';
import { showNote } from './show-note.js';
import { showUploadForm } from './show-upload-form.js';
import { showPostPreviews } from './show-post-previews.js';

const uploadFile = document.querySelector('#upload-file');

uploadFile.disabled = true;

getData(
  'https://26.javascript.pages.academy/kekstagram/data',
  (posts) => {
    showPostPreviews(posts);
    uploadFile.disabled = false;
    showPost(posts);
  },
  (error) => showNote(error)
);

showUploadForm();
