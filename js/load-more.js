let index = 0;

function loadMore(length, cb) {
  function onLoadMoreClick(e) {
    const target = e.target;
    if (target.classList.contains('j-load-more-btn')) {
      e.preventDefault();


      if (index <= length) {
        cb();
        index++;
        console.log(index);
      }

      target.classList.add('hidden');
      document.removeEventListener('click', onLoadMoreClick);
    }
  }

  document.addEventListener('click', onLoadMoreClick);
}

export { loadMore };
