const valueElement = document.querySelector('.scale__control--value');
const smallerElement = document.querySelector('.scale__control--smaller');
const biggerElement = document.querySelector('.scale__control--bigger');
const previewImageElement = document.querySelector('.img-upload__preview img');

function onSmallerElementClick(e) {
  e.preventDefault();
  const value = parseInt(valueElement.value, 10);
  biggerElement.disabled = false;

  if (value !== 25) {
    valueElement.value = `${value - 25}%`;
    previewImageElement.style.transform = `scale(${valueElement.value})`;
  } else {
    e.currentTarget.disabled = true;
  }
}

function onBiggerElementClick(e) {
  e.preventDefault();
  const value = parseInt(valueElement.value, 10);
  smallerElement.disabled = false;

  if (value !== 100) {
    valueElement.value = `${value + 25}%`;
    previewImageElement.style.transform = `scale(${valueElement.value})`;
  } else {
    e.currentTarget.disabled = true;
  }
}

function addImageScaling() {
  smallerElement.addEventListener('click', onSmallerElementClick);
  biggerElement.addEventListener('click', onBiggerElementClick);
}

function removeImageScaling() {
  valueElement.value = '100%';
  smallerElement.removeEventListener('click', onSmallerElementClick);
  biggerElement.removeEventListener('click', onBiggerElementClick);
  previewImageElement.style.transform = 'none';
}

export { addImageScaling, removeImageScaling };
