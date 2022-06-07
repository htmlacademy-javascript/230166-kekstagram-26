// Получение случайного числа от min до max
const getRandomInterval = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  return null;
};

getRandomInterval(2, 2);

// Функция для проверки максимальной длины строки
const checkLength = (string, len) => {
  if (string.length <= len) {
    return true;
  }

  return false;
};

checkLength('string', 10);
