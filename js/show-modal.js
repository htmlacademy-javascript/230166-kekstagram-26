import { isEscapeKey } from './utils.js';

function openModal(modalElement) {
  const bodyElement = document.querySelector('body');

  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
}

function closeModal(modalElement, btnElement = null) {
  const bodyElement = document.querySelector('body');

  function close() {
    modalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
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
