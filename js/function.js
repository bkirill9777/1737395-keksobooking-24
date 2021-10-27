// Основная функция генерации случайных чисел
function getRandomNumber(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
// Основная функция нахождения числа с плавающей точкой
function getRandomLocation(min, max, digits = 5) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
// Функции которые исключают дубликаты
const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

function getRandomArray(arrayData) {
  const counter = getRandomNumber(1, arrayData.length);
  const array = [];

  for (let index = 0; index < counter; index++) {
    const el = getRandomArrayElement(arrayData);
    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

export {getRandomNumber, getRandomLocation, getRandomArray};
