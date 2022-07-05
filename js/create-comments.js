function createComments(comments, list) {
  list.innerHTML = '';

  comments.forEach((comment) => {
    const item = `<li class="social__comment">
                        <img
                            class="social__picture"
                            src="${comment.avatar}"
                            alt="${comment.name}"
                            width="35" height="35">
                        <p class="social__text">${comment.text}</p>
                    </li>`;

    list.innerHTML += item;
  });
}

export { createComments };
