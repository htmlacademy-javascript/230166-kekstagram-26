function createPost(post) {
  const body = document.querySelector('body');
  const bigPicture = document.querySelector('.big-picture');
  const image = bigPicture.querySelector('.big-picture__img img');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const caption = bigPicture.querySelector('.social__caption');
  const comments = document.querySelector('.social__comments');

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  image.src = post.src;
  image.alt = post.alt;
  likesCount.textContent = post.likesCount;
  commentsCount.textContent = post.comments.length;
  caption.textContent = post.caption;

  comments.innerHTML = '';

  post.comments.forEach((comment) => {
    const element = `<li class="social__comment">
                        <img
                            class="social__picture"
                            src="${comment.avatar}"
                            alt="${comment.name}"
                            width="35" height="35">
                        <p class="social__text">${comment.text}</p>
                    </li>`;
    comments.innerHTML += comments.innerHTML + element;
  });
}

export { createPost };
