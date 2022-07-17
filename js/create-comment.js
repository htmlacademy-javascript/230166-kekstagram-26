const createComment = (comment, {itemClass, imageClass, textClass}) => {
  const item = document.createElement('li');
  const image = document.createElement('img');
  const text = document.createElement('p');

  item.classList.add(itemClass);
  image.classList.add(imageClass);
  image.src = comment.avatar;
  image.alt = comment.name;
  image.width = 35;
  image.height = 35;
  text.classList.add(textClass);
  text.textContent = comment.message;

  item.append(image);
  item.append(text);

  return item;
};

export { createComment };
