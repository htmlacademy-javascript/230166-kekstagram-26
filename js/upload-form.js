import { sendData } from './api.js';
import { addImageScaling, removeImageScaling } from './image-scaling.js';
import { addImageFiltres, removeImageFiltres } from './image-filtres.js';
import { addUploadFormValidation, resetUploadFormValidation } from './upload-form-validation.js';
import { showSuccessAlert } from './show-success-alert.js';
import { showErrorAlert } from './show-error-alert.js';
import { closeModal } from './show-modal.js';

const formElement = document.querySelector('#upload-select-image');
const modalElement = formElement.querySelector('.img-upload__overlay');
const cencelElement = formElement.querySelector('#upload-cancel');
const hashtagsElement = formElement.querySelector('[name=hashtags]');
const descriptionElement = formElement.querySelector('[name=description]');
const submitElement = formElement.querySelector('#upload-submit');

function onSubmitUploadForm(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  submitElement.disabled = true;

  sendData(
    'https://26.javascript.pages.academy/kekstagram',
    () => {
      closeModal(modalElement);
      showSuccessAlert();
      submitElement.disabled = false;
      resetUploadForm();
    },
    () => {
      closeModal(modalElement);
      showErrorAlert();
      submitElement.disabled = false;
    },
    formData
  );
}

function onFieldFocus() {
  cencelElement.disabled = true;
}

function onFieldBlur() {
  cencelElement.disabled = false;
}

function uploadForm() {
  hashtagsElement.addEventListener('focus', onFieldFocus);
  hashtagsElement.addEventListener('blur', onFieldBlur);
  descriptionElement.addEventListener('focus', onFieldFocus);
  descriptionElement.addEventListener('blur', onFieldBlur);
  formElement.addEventListener('submit', onSubmitUploadForm);

  addImageScaling();
  addImageFiltres();
  addUploadFormValidation();
}

function resetUploadForm() {
  removeImageFiltres();
  removeImageScaling();
  resetUploadFormValidation();
  hashtagsElement.value = '';
  descriptionElement.value = '';
  formElement.removeEventListener('click', onSubmitUploadForm);
}

export { uploadForm, resetUploadForm };
