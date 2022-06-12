const POST_COUNT = 25;
const COMMENTS_COUNT = 10;
const USERS_COUNT = 6;

const DESCRIPTIONS = [
  'Тестим новую камеру! =)',
  'Моя лучшая фотка!',
  'Бэтмен становится олицетворением беспощадного возмездия!',
  'Превращение в кровожадного монстра',
  'Отправляемся на поиски величайшего сокровища мира',
  'В стенах этого уважаемого учебного заведения из поколения в поколение получали образование дети аристократов и отпрыски богатейших семейств',
  'Спасаем товарища!'
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

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkLength (string, len = 10) {
  return string.length <= len;
}

function getRandomArrayElement(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

const users = Array.from({length: USERS_COUNT}, (_, i) => ({
  id: ++i,
  name: getRandomArrayElement(NAMES),
  avatar: `img/${getRandomPositiveInteger(1, USERS_COUNT)}.svg`,
}));

const comments = Array.from({length: COMMENTS_COUNT}, (_, i) => ({
  id: ++i,
  postId: getRandomPositiveInteger(1, POST_COUNT),
  userId: getRandomPositiveInteger(1, USERS_COUNT),
  message: getRandomArrayElement(MESSAGES),
}));

const posts = Array.from({length: POST_COUNT}, (_, i) => ({
  id: ++i,
  url: `photos/${i}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
}));

function joinCommentsAndUsers() {
  comments.forEach((comment) => {
    comment.name = users.filter((user) => user.id === comment.userId)[0]['name'];
    comment.avatar = users.filter((user) => user.id === comment.userId)[0]['avatar'];
  });
}

function joinPostsAndComments() {
  posts.forEach((post) => {
    post.comments = comments.filter((comment) => post.id === comment.postId);
  });
}

joinCommentsAndUsers();
joinPostsAndComments();

checkLength('string');
