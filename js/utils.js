function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkLength (string, len = 10) {
  return string.length <= len;
}

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function chunkArray(array, chunkSize) {
  const result = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const isEscapeKey = (e) => e.key === 'Escape';

function showPageError(status) {
  const bodyElement = document.querySelector('body');
  const note = document.createElement('div');
  note.classList.add('page-error');
  note.textContent = `${status}. Всё пропало (`;
  bodyElement.innerHTML = '';
  bodyElement.append(note);
}

export { getRandomPositiveInteger, checkLength, getRandomArrayElement, isEscapeKey, chunkArray, showPageError };
