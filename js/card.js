import {similarOffers} from './data.js';

/*// из main.js перенес данные по генерации объектов
const OFFERS_AMOUNT = 10;
// Создания массива из 10 сгенерированных JS-объектов
const similarOffers = () => Array.from({length: OFFERS_AMOUNT}, createOffer);
*/
/*
const userOffers = document.querySelector('.card');
console.log(userOffers);
*/

const mapCanvas = document.querySelector('.map__canvas');
const offerCard = document.querySelector('#card')
  .content
  .querySelector('.popup');

const houseTypes = {
  palace: 'Дворец',
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  hotel: 'Отель',
};

// Функция когда, отсутствует описание. В этом случае соответствующий блок в карточке скрывается.
const hidesData = function (element, nameProperty, value) {

  if (value) {
    element[nameProperty] = value;
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
};

const renderCard = (card) => {
  const offerCloneCard = offerCard.cloneNode(true);

  hidesData(offerCloneCard.querySelector('.popup__title'), 'textContent', card.offer.title);
  hidesData(offerCloneCard.querySelector('.popup__text--address'), 'textContent', card.offer.address);
  hidesData(offerCloneCard.querySelector('.popup__text--price'), 'textContent', `${card.offer.price} ₽/ночь`);
  hidesData(offerCloneCard.querySelector('.popup__type'), 'textContent', houseTypes[card.offer.type]);
  hidesData(offerCloneCard.querySelector('.popup__text--capacity'),'textContent', `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`);
  hidesData(offerCloneCard.querySelector('.popup__text--time'), 'textContent', `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  hidesData(offerCloneCard.querySelector('.popup__description'), 'textContent', card.offer.description);
  hidesData(offerCloneCard.querySelector('.popup__avatar'), 'src', card.author.avatar);

  // Фотографии
  const photosListEl = offerCloneCard.querySelector('div.popup__photos');
  const photoEl = photosListEl.querySelector('img');
  photosListEl.innerHTML = ''; // Удаляем все элементы внутри popup__photos

  card.offer.photos.forEach((currentPhoto) => {
    const clone = photoEl.cloneNode();

    hidesData(clone, 'src', currentPhoto);
    photosListEl.appendChild(clone);
  });
  // Выведим все доступные удобства в объявлении

  return offerCloneCard;
};


mapCanvas.appendChild(renderCard(similarOffers[1]));
