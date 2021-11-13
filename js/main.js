import {renderCard} from './card.js';
import {createOffer} from './data.js';
import {toggleState} from './form.js';

const OFFERS_AMOUNT = 10;
// Создания массива из 10 сгенерированных JS-объектов
const similarOffers = Array.from({length: OFFERS_AMOUNT}, createOffer);
window.console.log(similarOffers);
// console.log(similarOffers);
toggleState();

const mapCanvas = document.querySelector('.map__canvas');
mapCanvas.appendChild(renderCard(similarOffers[1]));

