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

const isEscapeKey = (e) => e.key === 'Escape';

export { getRandomPositiveInteger, checkLength, getRandomArrayElement, isEscapeKey };
