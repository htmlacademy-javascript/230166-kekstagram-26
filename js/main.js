const getRandomInterval = function (min, max) {
  return min >= 0 && max > min ? Math.floor(min + Math.random() * (max + 1 - min)) : null;
};

getRandomInterval(2, 2);

const checkLength = function (string, len = 10) {
  return string.length <= len;
};

checkLength('string');
