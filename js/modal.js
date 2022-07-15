import { isEscapeKey } from './utils.js';

const bodyElement = document.querySelector('body');

function openModal(modalElement) {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
}

function closeModal(modalElement, btnElement, callback = null) {
  function close() {
    modalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
    if (callback) {
      callback();
    }
  }

  function onEscKeydown(e) {
    if (isEscapeKey(e)) {
      e.preventDefault();
      close();
    }
  }

  function onCloseModal(e) {
    e.preventDefault();
    close();
  }

  if (btnElement) {
    btnElement.addEventListener('click', onCloseModal);
    document.addEventListener('keydown', onEscKeydown);
  } else {
    close();
  }
}

export { openModal, closeModal };
