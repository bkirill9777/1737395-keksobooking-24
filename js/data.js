import {getRandomNumber, getRandomLocation, getRandomArray} from './utils.js';
// Генерируем данные для массивов
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

const createOffer = () => {
  let avatarValue = getRandomNumber(1, 10);
  if (avatarValue < 10) {
    avatarValue = `0${  avatarValue}`;
  }
  const locationLat = getRandomLocation (35.65000, 35.70000);
  const locationLng = getRandomLocation (139.70000, 139.80000);
  return {
    author: {
      avatar: `img/avatars/user${avatarValue}.png`,
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
      features: getRandomArray(FEATURES),
      description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length-1)],
      photos: getRandomArray(PHOTOS),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

// Создания массива из 10 сгенерированных JS-объектов
const similarOffers = Array.from({length: OFFERS_AMOUNT}, createOffer);
// window.console.log(similarOffers);
// console.log(similarOffers);
export {similarOffers};
