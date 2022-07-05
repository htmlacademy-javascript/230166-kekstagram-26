import { closeModal } from './close-modal.js';

const body = document.querySelector('body');
const uploadFileField = document.querySelector('#upload-file');
const modal = document.querySelector('.img-upload__overlay');
const uploadCencel = document.querySelector('#upload-cancel');

closeModal(modal, uploadCencel);

const onUploadFile = (e) => {
  // e.preventDefault();

  body.classList.add('modal-open');
  modal.classList.remove('hidden');
};





