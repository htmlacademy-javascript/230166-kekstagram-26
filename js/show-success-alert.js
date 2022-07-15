function showSuccessAlert() {
  const bodyElement = document.querySelector('body');
  const templateFragment = document.querySelector('#success').content;
  const template = templateFragment.querySelector('.success');
  const element = template.cloneNode(true);
  const cencelElement = element.querySelector('.success__button');

  bodyElement.append(element);

  function onCencelBtnClick() {
    element.remove();
  }

  cencelElement.addEventListener('click', onCencelBtnClick);
}

export { showSuccessAlert };
