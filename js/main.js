function randomNumber(min, max) {
  if (min >= max) {
    console.error('Значение ' + max + ' должно быть больше')
   return;
  }
  return Math.random() * (max - min) + min;
}


function getRandomIntInclusive(min, max) {
  return ((Math.random() * (max - min)) + min).toFixed(5); //Максимум и минимум включаются, округление до 5 знаков
}
// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
