import { createComment } from './create-comment.js';
import { chunkArray } from './utils.js';

const COUNT_COMMENTS = 5;
const commentsLoaderElement = document.querySelector('.comments-loader');
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
    commentsLoaderElement.classList.add('hidden');
    addComments(comments);
    return;
  }

  const chunkComments = chunkArray(comments, COUNT_COMMENTS);
  const startComments = chunkComments[0];
  const nextComments = chunkComments.slice(1);

  addComments(startComments);
  commentsLoaderElement.classList.remove('hidden');

  function onCommentsLoaderClick(e) {
    e.preventDefault();
    index++;

    if (index <= nextComments.length) {
      addComments(nextComments[index - 1]);
    }

    if (index === nextComments.length) {
      commentsLoaderElement.classList.add('hidden');
      commentsLoaderElement.removeEventListener('click', onCommentsLoaderClick);
    }
  }

  commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);
}

export { showComments };
