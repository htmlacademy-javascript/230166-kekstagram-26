import { openModal, closeModal } from './modal.js';
import { uploadForm, resetUploadForm } from './upload-form.js';

const FILE_TYPES = ['png', 'jpg', 'jpeg', 'gif'];
const formElement = document.querySelector('#upload-select-image');
const uploadFileElement = formElement.querySelector('#upload-file');
const modalElement = formElement.querySelector('.img-upload__overlay');
const cencelElement = formElement.querySelector('#upload-cancel');
const previewImageElement = formElement.querySelector('.img-upload__preview img');

function onUploadFileChange() {
  const file = uploadFileElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((ext) => fileName.endsWith(ext));

  if (matches) {
    previewImageElement.src = URL.createObjectURL(file);
    uploadForm();
    openModal(modalElement);
    closeModal(modalElement, cencelElement, resetUploadForm);
  }
}

function showUploadForm() {
  uploadFileElement.addEventListener('change', onUploadFileChange);
}

export { showUploadForm };
