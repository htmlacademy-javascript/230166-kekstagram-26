import { showSuccessAlert } from './show-success-alert.js';
import { showErrorAlert } from './show-error-alert.js';
import { addImageScaling, removeImageScaling } from './image-scaling.js';
import { addImageFiltres, removeImageFiltres } from './image-filtres.js';
import { sendData } from './api.js';
import { closeModal } from './show-modal.js';
import { validateUploadForm } from './validate-upload-form.js';

const formElement = document.querySelector('#upload-select-image');
const uploadPostModal = formElement.querySelector('.img-upload__overlay');
const uploadCencelElement = formElement.querySelector('#upload-cancel');
const hashtagsElement = formElement.querySelector('[name=hashtags]');
const descriptionElement = formElement.querySelector('[name=description]');
const submitElement = formElement.querySelector('#upload-submit');

function uploadForm() {
  function onFieldFocus() {
    uploadCencelElement.disabled = true;
  }

  function onFieldBlur() {
    uploadCencelElement.disabled = false;
  }

  function onSubmitUploadPostForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    submitElement.disabled = true;

    sendData(
      'https://26.javascript.pages.academy/kekstagram',
      () => {
        closeModal(uploadPostModal);
        showSuccessAlert();
        submitElement.disabled = false;
        resetUploadForm();
      },
      () => {
        closeModal(uploadPostModal);
        showErrorAlert();
        submitElement.disabled = false;
      },
      formData
    );
  }

  hashtagsElement.addEventListener('focus', onFieldFocus);
  hashtagsElement.addEventListener('blur', onFieldBlur);
  descriptionElement.addEventListener('focus', onFieldFocus);
  descriptionElement.addEventListener('blur', onFieldBlur);
  formElement.addEventListener('submit', onSubmitUploadPostForm);

  addImageScaling();
  addImageFiltres();
  validateUploadForm();
}

function resetUploadForm() {
  removeImageFiltres();
  removeImageScaling();
  formElement.reset();
}

export { uploadForm };
