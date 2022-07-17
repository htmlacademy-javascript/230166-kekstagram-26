const isEscapeKey = (e) => e.key === 'Escape';

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const splitIntoGroups = (items, size) => {
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
  isEscapeKey,
  splitIntoGroups,
  getRandomSet,
  debounce,
};
