// eslint-disable-next-line no-unused-vars
function getRandomNumber(min, max) {
  if (fmin >= fmax || fmin < 0 || fmax < 0) {
    return ('Задан неверный диапазон! Укажите другие числа');
  }
  return Math.random() * (max - min) + min;
}


// eslint-disable-next-line id-length
function getRandomFloat (fmin, fmax, n) {
  if (fmin >= fmax || fmin < 0 || fmax < 0) {
    return ('Задан неверный диапазон! Укажите другие числа');
  }
  return ((Math.random() * (fmax - fmin)) + fmin).toFixed(n);   //Максимум и минимум включаются, округление до n знаков
}

// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
