const sliderElement = document.querySelector('.j-nouislider');
const sliderField = document.querySelector('.j-nouislider-field');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100
  },
  start: 50,
  step: 25,
  connect: 'lower'
});

sliderElement.noUiSlider.on('update', (...rest) => {
  sliderField.value = sliderElement.noUiSlider.get();
});
