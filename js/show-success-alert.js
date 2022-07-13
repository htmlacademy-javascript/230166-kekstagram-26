function showSuccessAlert() {
  const bodyElement = document.querySelector('body');
  const templateFragment = document.querySelector('#success').content;
  const template = templateFragment.querySelector('.success');
  const element = template.cloneNode(true);
  const cencelBtnElement = element.querySelector('.success__button');

  bodyElement.append(element);

  function onCencelBtnClick() {
    element.remove();
  }

  cencelBtnElement.addEventListener('click', onCencelBtnClick);
}

export { showSuccessAlert };
