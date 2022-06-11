function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

getRandomPositiveInteger(2, 2);

const checkLength = function (string, len = 10) {
  return string.length <= len;
};

checkLength('string');
