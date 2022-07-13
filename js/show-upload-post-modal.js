import { closeModal } from './close-modal.js';
import { openModal } from './open-modal.js';


function showUploadPostModal() {
  const imgUploadSection = document.querySelector('.j-img-upload');
  const UploadPostField = imgUploadSection.querySelector('.j-img-upload-field');
  const modal = imgUploadSection.querySelector('.j-img-upload-modal');
  const uploadCencelBtn = document.querySelector('#upload-cancel');

  const onUploadPost = () => openModal(modal);
  UploadPostField.addEventListener('change', onUploadPost);

  closeModal(modal, uploadCencelBtn);
}

export { showUploadPostModal };

