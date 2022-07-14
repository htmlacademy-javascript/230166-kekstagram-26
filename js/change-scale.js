function changeScale() {
  const scaleFieldElement = document.querySelector('.scale__control--value');
  const scaleSmallerElement = document.querySelector('.scale__control--smaller');
  const scaleBiggerElement = document.querySelector('.scale__control--bigger');
  const previewImageElement = document.querySelector('.img-upload__preview img');

  scaleSmallerElement.addEventListener('click', (e) => {
    e.preventDefault();
    const value = parseInt(scaleFieldElement.value, 10);
    scaleBiggerElement.disabled = false;

    if (value !== 25) {
      scaleFieldElement.value = `${value - 25}%`;
      previewImageElement.style.transform = `scale(${scaleFieldElement.value})`;
    } else {
      e.currentTarget.disabled = true;
    }
  });

  scaleBiggerElement.addEventListener('click', (e) => {
    e.preventDefault();
    const value = parseInt(scaleFieldElement.value, 10);
    scaleSmallerElement.disabled = false;

    if (value !== 100) {
      scaleFieldElement.value = `${value + 25}%`;
      previewImageElement.style.transform = `scale(${scaleFieldElement.value})`;
    } else {
      e.currentTarget.disabled = true;
    }
  });
}

export { changeScale };
