import { users } from './data.js';
import { getRandomPositiveInteger } from './utils.js';

const pictures = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content;
const template = templateFragment.querySelector('.picture');

const fragment = document.createDocumentFragment();

for (let i = 0; i < users.length; i++) {
  const element = template.cloneNode(true);
  element.querySelector('.picture__img').setAttribute('src', users[i].avatar);
  element.querySelector('.picture__comments').textContent = getRandomPositiveInteger(0, 10);
  element.querySelector('.picture__likes').textContent = getRandomPositiveInteger(15, 200);

  fragment.appendChild(element);
}

pictures.appendChild(fragment);


