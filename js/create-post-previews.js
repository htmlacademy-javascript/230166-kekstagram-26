function createPostPreviews(posts) {
  const pictures = document.querySelector('.pictures');
  const templateFragment = document.querySelector('#picture').content;
  const template = templateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  posts.forEach((post) => {
    const element = template.cloneNode(true);
    element.dataset.postId = post.id;
    element.querySelector('.picture__img').src = post.url;
    element.querySelector('.picture__comments').textContent = post.comments.length;
    element.querySelector('.picture__likes').textContent = post.likes;

    fragment.appendChild(element);
  });

  pictures.appendChild(fragment);
}

export { createPostPreviews };

