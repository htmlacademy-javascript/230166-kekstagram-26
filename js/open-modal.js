function openModal(modal) {
  const body = document.querySelector('body');

  modal.classList.remove('hidden');
  body.classList.add('modal-open');
}

export { openModal };
