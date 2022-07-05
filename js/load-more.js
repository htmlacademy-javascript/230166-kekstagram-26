import { chunkArray } from './utils.js';

function loadMore(items) {
  const btn = document.querySelector('.comments-loader');

  if (items.length <= 5) {
    btn.classList.add('hidden');

    return;
  }

  const chunkItems = chunkArray(items, 5);
  console.log(chunkItems);

  function onCommentsLoaderClick(e) {
    e.preventDefault();


  }

  btn.addEventListener('click', onCommentsLoaderClick);

}


export { loadMore };
