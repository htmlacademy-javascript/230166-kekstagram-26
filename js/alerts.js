import { isEscapeKey } from './utils.js';

const bodyElement = document.querySelector('body');

const showSuccessAlert = () => {
  const templateFragment = document.querySelector('#success').content;
  const template = templateFragment.querySelector('.success');
  const element = template.cloneNode(true);
  const cencelElement = element.querySelector('.success__button');

  const close = () => {
    element.remove();
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
  };

  function onEscKeydown(e) {
    if (isEscapeKey(e)) {
      e.preventDefault();
      close();
    }
  }

  const onCencelClick = () => {
    close();
  };

  const onBodyClick = (e) => {
    if (!e.target.classList.contains('success__inner')) {
      close();
    }
  };

  bodyElement.append(element);
  bodyElement.classList.add('modal-open');
  cencelElement.addEventListener('click', onCencelClick);
  bodyElement.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorAlert = () => {
  const templateFragment = document.querySelector('#error').content;
  const template = templateFragment.querySelector('.error');
  const element = template.cloneNode(true);
  const cencelElement = element.querySelector('.error__button');

  const close = () => {
    element.remove();
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeydown);
  };

  function onEscKeydown (e) {
    if (isEscapeKey(e)) {
      e.preventDefault();
      close();
    }
  }

  const onCencelClick = () => {
    close();
  };

  const onBodyClick = (e) => {
    if (!e.target.classList.contains('success__inner')) {
      close();
    }
  };

  bodyElement.append(element);
  bodyElement.classList.add('modal-open');
  cencelElement.addEventListener('click', onCencelClick);
  bodyElement.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onEscKeydown);
};

export { showSuccessAlert, showErrorAlert };
