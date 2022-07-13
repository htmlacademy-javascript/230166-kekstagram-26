function loadMore(length, cb) {
  function onLoadMoreClick(e) {
    const target = e.target;

    if (target.classList.contains('j-load-more-btn')) {
      e.preventDefault();
      let index = 0;

      if (index <= length) {
        cb();
        index++;
      }

      target.classList.add('hidden');
      index = 0;
      document.removeEventListener('click', onLoadMoreClick);
    }
  }

  document.addEventListener('click', onLoadMoreClick);
}

export { loadMore };
