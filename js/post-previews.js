function createPostPreviews(posts) {
  const pictures = document.querySelector('.pictures');
  const templateFragment = document.querySelector('#picture').content;
  const template = templateFragment.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < posts.length; i++) {
    const element = template.cloneNode(true);
    element.querySelector('.picture__img').setAttribute('src', posts[i].src);
    element.querySelector('.picture__comments').textContent = posts[i].comments.length;
    element.querySelector('.picture__likes').textContent = posts[i].likesCount;

    fragment.appendChild(element);
  }

  pictures.appendChild(fragment);
}

export { createPostPreviews };

