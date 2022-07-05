import { getRandomPositiveInteger, getRandomArrayElement } from './utils.js';

const POST_COUNT = 25;
const COMMENTS_COUNT = 100;
const USERS_COUNT = 6;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const CAPTIONS = [
  'Тестим новую камеру! =)',
  'Моя лучшая фотка!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия'
];

function generatePosts () {
  const users = Array.from({length: USERS_COUNT}, (_, i) => ({
    id: ++i,
    name: getRandomArrayElement(NAMES),
    avatar: `img/avatar-${i}.svg`
  }));

  const comments = Array.from({length: COMMENTS_COUNT}, (_, i) => ({
    id: ++i,
    postId: getRandomPositiveInteger(1, POST_COUNT),
    userId: getRandomPositiveInteger(1, USERS_COUNT),
    text: getRandomArrayElement(MESSAGES),
  }));

  const posts = Array.from({length: POST_COUNT}, (_, i) => ({
    id: ++i,
    src: `photos/${i}.jpg`,
    alt: '',
    caption: getRandomArrayElement(CAPTIONS),
    likesCount: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  }));

  comments.forEach((comment) => {
    comment.name = users.filter((user) => user.id === comment.userId)[0]['name'];
    comment.avatar = users.filter((user) => user.id === comment.userId)[0]['avatar'];
  });

  posts.forEach((post) => {
    post.comments = comments.filter((comment) => post.id === comment.postId);
  });

  return posts;
}

export { generatePosts };
