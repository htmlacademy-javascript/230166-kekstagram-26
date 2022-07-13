import { createComment } from './create-comment.js';
import { loadMore } from './load-more.js';
import { chunkArray } from './utils.js';

function createPost(post) {
  const COUNT_COMMENTS = 5;

  const bigPicture = document.querySelector('.big-picture');
  const image = bigPicture.querySelector('.big-picture__img img');
  const description = bigPicture.querySelector('.social__caption');
  const likes = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const commentsList = bigPicture.querySelector('.social__comments');
  const commentsLoaderBtn = document.querySelector('.comments-loader');
  const commentClassNames = {
    itemClass: 'social__comment',
    imageClass: 'social__picture',
    textClass: 'social__text'
  };

  image.src = post.url;
  likes.textContent = post.likes;
  commentsCount.textContent = post.comments.length;
  description.textContent = post.description;
  commentsList.innerHTML = '';

  function addComments(comments) {
    comments.forEach((comment) => {
      const item = createComment(comment, commentClassNames);
      commentsList.append(item);
    });
  }

  if (post.comments.length <= COUNT_COMMENTS) {
    commentsLoaderBtn.classList.add('hidden');
    addComments(post.comments);
  } else {
    const chunkComments = chunkArray(post.comments, COUNT_COMMENTS);
    const startComments = chunkComments.shift();

    addComments(startComments);
    commentsLoaderBtn.classList.remove('hidden');

    loadMore(chunkComments.length, () => {
      chunkComments.forEach((nextComments) => {
        addComments(nextComments);
        nextComments = [];
      });
    });
  }
}

export { createPost };
