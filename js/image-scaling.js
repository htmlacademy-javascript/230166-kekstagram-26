const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP_SCALE = 25;
const valueElement = document.querySelector('.scale__control--value');
const smallerElement = document.querySelector('.scale__control--smaller');
const biggerElement = document.querySelector('.scale__control--bigger');
const previewImageElement = document.querySelector('.img-upload__preview img');

const onSmallerElementClick = (e) => {
  e.preventDefault();
  const value = parseInt(valueElement.value, 10);
  biggerElement.disabled = false;

  if (value !== MIN_SCALE) {
    valueElement.value = `${value - STEP_SCALE}%`;
    previewImageElement.style.transform = `scale(${valueElement.value})`;
  } else {
    e.currentTarget.disabled = true;
  }
};

const onBiggerElementClick = (e) => {
  e.preventDefault();
  const value = parseInt(valueElement.value, 10);
  smallerElement.disabled = false;

  if (value !== MAX_SCALE) {
    valueElement.value = `${value + STEP_SCALE}%`;
    previewImageElement.style.transform = `scale(${valueElement.value})`;
  } else {
    e.currentTarget.disabled = true;
  }
};

const addImageScaling = () => {
  smallerElement.addEventListener('click', onSmallerElementClick);
  biggerElement.addEventListener('click', onBiggerElementClick);
};

const removeImageScaling = () => {
  valueElement.value = '100%';
  smallerElement.removeEventListener('click', onSmallerElementClick);
  biggerElement.removeEventListener('click', onBiggerElementClick);
  previewImageElement.style.transform = 'none';
};

export { addImageScaling, removeImageScaling };
