function uploadComments(comments) {
  const commentsLoader = document.querySelector('.comments-loader');

  if (comments.length <= 5) {
    commentsLoader.classList.add('hidden');
  }

}

export { uploadComments };
