// eslint-disable-next-line no-unused-vars
function getRandomNumber(min, max) {
  if (min >= max || min < 0 || max < 0) {
    return ('Задан неверный диапазон! Укажите другие числа');
  }
  return Math.random() * (max - min) + min;
}
// eslint-disable-next-line id-length
// eslint-disable-next-line no-unused-vars
function getRandomFloat (fmin, fmax, any) {
  if (fmin >= fmax || fmin < 0 || fmax < 0) {
    return ('Задан неверный диапазон! Укажите другие числа');
  }
  return ((Math.random() * (fmax - fmin)) + fmin).toFixed(any);   //Максимум и минимум включаются, округление до any знаков
}
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
