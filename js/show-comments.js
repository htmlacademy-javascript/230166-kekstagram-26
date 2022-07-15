import { createComment } from './create-comment.js';
import { chunkArray } from './utils.js';

const COUNT_COMMENTS = 5;
const loaderElement = document.querySelector('.comments-loader');
const commentsElement = document.querySelector('.social__comments');
const commentClassNames = {
  itemClass: 'social__comment',
  imageClass: 'social__picture',
  textClass: 'social__text'
};

function addComments(comments) {
  comments.forEach((comment) => {
    const item = createComment(comment, commentClassNames);
    commentsElement.append(item);
  });
}

function showComments(comments) {
  let index = 0;
  commentsElement.innerHTML = '';

  if (comments.length <= COUNT_COMMENTS) {
    loaderElement.classList.add('hidden');
    addComments(comments);
    return;
  }

  const chunkComments = chunkArray(comments, COUNT_COMMENTS);
  const startComments = chunkComments[0];
  const nextComments = chunkComments.slice(1);

  addComments(startComments);
  loaderElement.classList.remove('hidden');

  function onCommentsLoaderClick(e) {
    e.preventDefault();
    index++;

    if (index <= nextComments.length) {
      addComments(nextComments[index - 1]);
    }

    if (index === nextComments.length) {
      loaderElement.classList.add('hidden');
      loaderElement.removeEventListener('click', onCommentsLoaderClick);
    }
  }

  loaderElement.addEventListener('click', onCommentsLoaderClick);
}

export { showComments };
