function showErrorAlert() {
  const bodyElement = document.querySelector('body');
  const templateFragment = document.querySelector('#error').content;
  const template = templateFragment.querySelector('.error');
  const element = template.cloneNode(true);
  const cencelBtnElement = element.querySelector('.error__button');

  bodyElement.append(element);

  function onCencelBtnClick() {
    element.remove();
  }

  cencelBtnElement.addEventListener('click', onCencelBtnClick);
}

export { showErrorAlert };
