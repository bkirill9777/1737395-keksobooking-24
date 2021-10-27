import {OFFERS_AMOUNT} from './variables';
import {createOffer} from './object';
// Создания массива из 10 сгенерированных JS-объектов
const similarOffers = Array.from({length: OFFERS_AMOUNT}, createOffer);
window.console.log(similarOffers);
