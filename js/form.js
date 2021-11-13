const adForm = document.querySelector('.ad-form');
const fieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');

const toggleState = (isActive) => {
  adForm.classList.toggle('ad-form--disabled', isActive);
  mapFilters.classList.toggle('map__filters--disabled', isActive);
  fieldsets.forEach((item) => {
    item.disabled = isActive;
  });
};

export {toggleState};
