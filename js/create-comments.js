function createComments(comments, list) {
  list.innerHTML = '';

  comments.forEach((comment) => {
    const item = document.createElement('li');
    const image = document.createElement('img');
    const text = document.createElement('p');

    item.classList.add('social__comment');

    image.classList.add('social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    image.width = 35;
    image.height = 35;

    text.classList.add('social__text');
    text.textContent = comment.text;

    item.append(image);
    item.append(text);

    list.append(item);
  });
}

export { createComments };
