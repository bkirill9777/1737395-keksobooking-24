/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const TITLES = ['Выбор квартир', 'Большая светлая квартира', 'Маленькая уютная квартира', 'Квартира в спальном районе'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHEKIN = ['12.00', '13.00', '14.00'];
const CHECKOUT = ['12.00', '13.00', '14.00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['С видом на парковую зону, тихое место и всегда чистый воздух', 'Высокие потолки', 'Просторные комнаты'];
const PHOTOS = [
  'http://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'http://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'http://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
// eslint-disable-next-line no-use-before-define
const lat = getRandomLocation (35.65000, 35.70000, digits = 5);
const lng = getRandomLocation (139.70000, 139.80000, digits = 5);

const OFFERS_AMOUNT = 10;
// Генерируем данные для массивов
const createOffer = () => ({
  author: {
    // eslint-disable-next-line no-use-before-define
    avatar: `img/avatars/user${0}${getRandomNumber(1, 10)}.png`,
  },
  offer: {
    // eslint-disable-next-line no-use-before-define
    title: TITLES[getRandomNumber(0, TITLES.length-1)],
    address: `${lat}, ${lng}`,
    // eslint-disable-next-line no-use-before-define
    price: getRandomNumber(1000, 50000),
    // eslint-disable-next-line no-use-before-define
    type: TYPE[getRandomNumber(0, TYPE.length-1)],
    // eslint-disable-next-line no-use-before-define
    rooms: getRandomNumber(1, 5),
    // eslint-disable-next-line no-use-before-define
    guests: getRandomNumber(0, 6),
    // eslint-disable-next-line no-use-before-define
    chekin: CHEKIN[getRandomNumber(0, CHEKIN.length-1)],
    // eslint-disable-next-line no-use-before-define
    chekout: CHECKOUT[getRandomNumber(0, CHECKOUT.length-1)],
    // eslint-disable-next-line no-use-before-define
    features: FEATURES[getRandomNumber(0, FEATURES.length-1)],
    // eslint-disable-next-line no-use-before-define
    description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length-1)],
    // eslint-disable-next-line no-use-before-define
    photos: PHOTOS[getRandomNumber(0, PHOTOS.length-1)],
  },
  location: {
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-use-before-define
    lat: getRandomLocation (35.65000, 35.70000, digits = 5),
    // eslint-disable-next-line no-undef
    // eslint-disable-next-line no-use-before-define
    lng: getRandomLocation (139.70000, 139.80000, digits = 5),
  },
});
// Функция для создания массива из 10 сгенерированных JS-объектов
const similarOffers = Array.from({length: OFFERS_AMOUNT}, createOffer);
// Основная функция генерации случайных чисел
function getRandomNumber(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
// основная функция нахождения числа с плавающей точкой
function getRandomLocation(a, b, digits = 5) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
