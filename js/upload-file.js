import { closeModal } from './close-modal.js';
import { openModal } from './open-modal.js';

const body = document.querySelector('body');
const uploadFileField = document.querySelector('#upload-file');
const modal = document.querySelector('.img-upload__overlay');
const uploadCencel = document.querySelector('#upload-cancel');

closeModal(modal, uploadCencel);

const onUploadFile = (e) => {
  openModal(modal);
};

function uploadFile() {
  uploadFileField.addEventListener('change', onUploadFile);
}

export { uploadFile };


