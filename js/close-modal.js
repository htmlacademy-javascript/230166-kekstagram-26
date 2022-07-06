import { isEscapeKey } from './utils.js';

function closeModal(modal, btn, cb = null) {
  const body = document.querySelector('body');

  function close() {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);

    if (cb) {
      cb();
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

  btn.addEventListener('click', onCloseModal);
  document.addEventListener('keydown', onEscKeydown);
}

export { closeModal };
