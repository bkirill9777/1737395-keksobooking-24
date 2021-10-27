import {createOffer} from './data.js';
const OFFERS_AMOUNT = 10;
// Создания массива из 10 сгенерированных JS-объектов
const similarOffers = Array.from({length: OFFERS_AMOUNT}, createOffer);
window.console.log(similarOffers);
