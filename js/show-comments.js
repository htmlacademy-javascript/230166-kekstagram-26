import { createComment } from './create-comment.js';
import { splitIntoGroups } from './utils.js';

const COUNT_COMMENTS = 5;
const loaderElement = document.querySelector('.comments-loader');
const commentsElement = document.querySelector('.social__comments');
const countUploadedCommentsElement = document.querySelector('.count-uploaded-comments');
const commentClassNames = {
  itemClass: 'social__comment',
  imageClass: 'social__picture',
  textClass: 'social__text'
};

const addComments = (comments) => {
  comments.forEach((comment) => {
    const item = createComment(comment, commentClassNames);
    commentsElement.append(item);
    countUploadedCommentsElement.textContent = commentsElement.querySelectorAll('.social__comment').length;
  });
};

const showComments = (comments) => {
  let index = 0;
  commentsElement.innerHTML = '';

  if (comments.length <= COUNT_COMMENTS) {
    loaderElement.classList.add('hidden');
    addComments(comments);
    return;
  }

  const chunkComments = splitIntoGroups(comments, COUNT_COMMENTS);
  const startComments = chunkComments[0];
  const nextComments = chunkComments.slice(1);

  addComments(startComments);
  loaderElement.classList.remove('hidden');

  const onCommentsLoaderClick = (e) => {
    e.preventDefault();
    index++;

    if (index <= nextComments.length) {
      addComments(nextComments[index - 1]);
    }

    if (index === nextComments.length) {
      loaderElement.classList.add('hidden');
      loaderElement.removeEventListener('click', onCommentsLoaderClick);
    }
  };

  loaderElement.addEventListener('click', onCommentsLoaderClick);
};

export { showComments };
