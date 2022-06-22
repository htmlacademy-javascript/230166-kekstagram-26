import { isEscapeKey } from './utils.js';

const body = document.querySelector('body');
const modal = document.querySelector('.big-picture');
const closeBtn = document.querySelector('.big-picture__cancel');

function closeModal() {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

function onPopupEscKeydown(e) {
  if (isEscapeKey(e)) {
    e.preventDefault();
    closeModal();
  }
}

function onCloseModal(e) {
  e.preventDefault();
  closeModal();
}

closeBtn.addEventListener('click', onCloseModal);
document.addEventListener('keydown', onPopupEscKeydown);
