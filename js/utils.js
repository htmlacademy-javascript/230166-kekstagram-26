const isEscapeKey = (e) => e.key === 'Escape';

<<<<<<< Updated upstream
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
=======
const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
>>>>>>> Stashed changes
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

<<<<<<< Updated upstream
function checkLength (string, len = 10) {
  return string.length <= len;
}

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

function chunkArray(array, chunkSize) {
=======
const splitIntoGroups = (items, size) => {
>>>>>>> Stashed changes
  const result = [];

  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
};

const getRandomSet = (min, max, size) => {
  const items = new Set();

  while (items.size < size) {
    items.add(getRandomPositiveInteger(min, max));
  }

  return items;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
<<<<<<< Updated upstream
  getRandomPositiveInteger,
  checkLength,
  getRandomArrayElement,
  isEscapeKey, chunkArray,
=======
  isEscapeKey,
  splitIntoGroups,
>>>>>>> Stashed changes
  getRandomSet,
  debounce,
};
