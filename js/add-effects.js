function addEffects() {
  const sliderElement = document.querySelector('.effect-level__slider');
  const valueElement = document.querySelector('.effect-level__value');
  const effectsElement = document.querySelector('.effects');
  const previewElement = document.querySelector('.img-upload__preview img');

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.setAttribute('disabled', true);

  sliderElement.noUiSlider.on('update', () => {
    valueElement.value = sliderElement.noUiSlider.get();
  });

  effectsElement.addEventListener('change', (e) => {
    const target = e.target;

    switch(target.id) {
      case 'effect-none':
        sliderElement.noUiSlider.set(0);
        previewElement.style.filter = 'none';
        sliderElement.setAttribute('disabled', true);
        break;
      case 'effect-chrome':
        sliderElement.noUiSlider.set(100);
        sliderElement.noUiSlider.on('update', () => {
          previewElement.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
        });
        sliderElement.removeAttribute('disabled');
        break;
      case 'effect-sepia':
        sliderElement.noUiSlider.set(100);
        sliderElement.noUiSlider.on('update', () => {
          previewElement.style.filter = `sepia(${sliderElement.noUiSlider.get()})`;
        });
        sliderElement.removeAttribute('disabled');
        break;
      case 'effect-marvin':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100
          },
          start: 100,
          step: 1
        });
        sliderElement.noUiSlider.on('update', () => {
          previewElement.style.filter = `invert(${sliderElement.noUiSlider.get()}%)`;
        });
        sliderElement.removeAttribute('disabled');
        break;
      case 'effect-phobos':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3
          },
          start: 100,
          step: 0.1
        });
        sliderElement.noUiSlider.on('update', () => {
          previewElement.style.filter = `blur(${sliderElement.noUiSlider.get()}px)`;
        });
        sliderElement.removeAttribute('disabled');
        break;
      case 'effect-heat':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3
          },
          step: 0.1
        });
        sliderElement.noUiSlider.on('update', () => {
          previewElement.style.filter = `brightness(${sliderElement.noUiSlider.get()})`;
        });
        sliderElement.removeAttribute('disabled');
        break;
    }
  });
}

export { addEffects };
