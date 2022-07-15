function addEffects() {
  const sliderElement = document.querySelector('.effect-level__slider');
  const valueElement = document.querySelector('.effect-level__value');
  const effectsElement = document.querySelector('.effects');
  const previewImageElement = document.querySelector('.img-upload__preview img');

  if( sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }

  previewImageElement.style.filter = 'none';
  sliderElement.setAttribute('disabled', true);

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1
    },
    start: 0,
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

  effectsElement.addEventListener('change', (e) => {
    const target = e.target;
    let value = 0;

    switch(target.id) {
      case 'effect-none':
        sliderElement.noUiSlider.set(0);
        previewImageElement.style.filter = 'none';
        sliderElement.setAttribute('disabled', true);
        break;
      case 'effect-chrome':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1
          },
          start: 1,
          step: 0.1
        });
        sliderElement.noUiSlider.on('update', () => {
          value = sliderElement.noUiSlider.get();
          valueElement.value = value;
          previewImageElement.style.filter = `grayscale(${value})`;
        });
        sliderElement.removeAttribute('disabled');
        break;
      case 'effect-sepia':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1
          },
          start: 1,
          step: 0.1
        });
        sliderElement.noUiSlider.on('update', () => {
          value = sliderElement.noUiSlider.get();
          valueElement.value = value;
          previewImageElement.style.filter = `sepia(${value})`;
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
          value = sliderElement.noUiSlider.get();
          valueElement.value = value;
          previewImageElement.style.filter = `invert(${value}%)`;
        });
        sliderElement.removeAttribute('disabled');
        break;
      case 'effect-phobos':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3
          },
          start: 3,
          step: 0.1
        });
        sliderElement.noUiSlider.on('update', () => {
          value = sliderElement.noUiSlider.get();
          valueElement.value = value;
          previewImageElement.style.filter = `blur(${value}px)`;
        });
        sliderElement.removeAttribute('disabled');
        break;
      case 'effect-heat':
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3
          },
          start: 3,
          step: 0.1
        });
        sliderElement.noUiSlider.on('update', () => {
          value = sliderElement.noUiSlider.get();
          valueElement.value = value;
          previewImageElement.style.filter = `brightness(${value})`;
        });
        sliderElement.removeAttribute('disabled');
        break;
    }
  });
}

export { addEffects };
