import { isEscapeKey } from './utils.js';

const bodyElement = document.querySelector('body');

const openModal = (modalElement) => {
  modalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
};

const closeModal = (modalElement, btnElement) => {
  const close = () => {
    modalElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
  };

  function onEscKeydown(e) {
    if (isEscapeKey(e)) {
      e.preventDefault();
      close();
    }
  }

  const onCloseModal = (e) => {
    e.preventDefault();
    close();
  };

  if (btnElement) {
    btnElement.addEventListener('click', onCloseModal);
    document.addEventListener('keydown', onEscKeydown);
  } else {
    close();
  }
};

export { openModal, closeModal };
