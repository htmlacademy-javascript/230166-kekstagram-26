const showNote = (status) => {
  const bodyElement = document.querySelector('body');
  const note = document.createElement('div');

  note.classList.add('page-error');
  note.textContent = `${status}. Всё пропало (`;
  bodyElement.append(note);
};

export { showNote };
