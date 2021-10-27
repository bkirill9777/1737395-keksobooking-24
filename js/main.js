import {OFFERS_AMOUNT} from './variables.js';
import {createOffer} from './object.js';
// Создания массива из 10 сгенерированных JS-объектов
const similarOffers = Array.from({length: OFFERS_AMOUNT}, createOffer);
window.console.log(similarOffers);
