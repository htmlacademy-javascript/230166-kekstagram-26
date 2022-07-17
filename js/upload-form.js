import { sendData } from './api.js';
import { addImageScaling, removeImageScaling } from './image-scaling.js';
import { addImageFiltres, removeImageFiltres } from './image-filtres.js';
import { addUploadFormValidation, resetUploadFormValidation } from './upload-form-validation.js';
import { showSuccessAlert, showErrorAlert } from './alerts.js';
import { isEscapeKey } from './utils.js';

const formElement = document.querySelector('#upload-select-image');
const modalElement = formElement.querySelector('.img-upload__overlay');
const cencelElement = formElement.querySelector('#upload-cancel');
const hashtagsElement = formElement.querySelector('[name=hashtags]');
const defaultFilterElement = formElement.querySelector('.effects__radio[value="none"]');
const descriptionElement = formElement.querySelector('[name=description]');
const submitElement = formElement.querySelector('#upload-submit');
const bodyElement = document.querySelector('body');

const closeModal = () => {
  modalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  resetUploadForm();
};

function onEscKeydown(e) {
  if (isEscapeKey(e)) {
    e.preventDefault();
    closeModal();
  }
}

const onCloseModal = (e) => {
  e.preventDefault();
  closeModal();
};

const onFocusField = () => {
  document.removeEventListener('keydown', onEscKeydown);
};

const onBlurField = () => {
  document.addEventListener('keydown', onEscKeydown);
};

const onSubmitUploadForm = (e) => {
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
};

const uploadForm = () => {
  hashtagsElement.addEventListener('focus', onFocusField);
  hashtagsElement.addEventListener('blur', onBlurField);
  descriptionElement.addEventListener('focus', onFocusField);
  descriptionElement.addEventListener('blur', onBlurField);
  formElement.addEventListener('submit', onSubmitUploadForm);
  cencelElement.addEventListener('click', onCloseModal);
  document.addEventListener('keydown', onEscKeydown);

  addImageScaling();
  addImageFiltres();
  addUploadFormValidation();
};

function resetUploadForm() {
  removeImageFiltres();
  removeImageScaling();
  resetUploadFormValidation();
  hashtagsElement.value = '';
  descriptionElement.value = '';
  defaultFilterElement.checked = true;
  formElement.removeEventListener('click', onSubmitUploadForm);
}

export { uploadForm, resetUploadForm };
