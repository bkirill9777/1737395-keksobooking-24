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
const OFFERS_AMOUNT = 10;
// Генерируем данные для массивов
const createOffer = () => {
  const locationLat = getRandomLocation (35.65000, 35.70000);
  const locationLng = getRandomLocation (139.70000, 139.80000);
  return { author: {
    avatar: `img/avatars/user${getRandomNumber(1, 10)}.png`,
  },
  offer: {
    title: TITLES[getRandomNumber(0, TITLES.length-1)],
    address: `${locationLat}, ${locationLng}`,
    price: getRandomNumber(1000, 50000),
    type: TYPE[getRandomNumber(0, TYPE.length-1)],
    rooms: getRandomNumber(1, 5),
    guests: getRandomNumber(0, 6),
    chekin: CHEKIN[getRandomNumber(0, CHEKIN.length-1)],
    chekout: CHECKOUT[getRandomNumber(0, CHECKOUT.length-1)],
    features: FEATURES[getRandomNumber(0, FEATURES.length-1)],
    description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length-1)],
    photos: PHOTOS[getRandomNumber(0, PHOTOS.length-1)],
  },
  location: {
    lat: locationLat,
    lng: locationLng,
  },
  };
};
// Функция для создания массива из 10 сгенерированных JS-объектов
const similarOffers = Array.from({length: OFFERS_AMOUNT}, createOffer);
console.log(similarOffers);
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

//Функция добовляющая перед однозначными числами 0
