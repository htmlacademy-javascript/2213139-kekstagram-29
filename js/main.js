// Количество описаний фото

const NUMBER_DESCRIPTIONS_FOTO = 25;

// Фразы для описания фотографий

const DESCRIPTIONS = ['Отель с бассейном', 'Указатель', 'Море... Пляж...', 'Вот такие мы красивые!', 'Весёлая кухня', 'Шикарное авто', 'Свежее и вкусное', 'Вкуснотища!', 'Самолёт', 'Хранение обуви', 'Дорога к морю', 'Авто в аренду', 'Салат с красной рыбой', 'Суши с котом', 'Стильные валенки', 'Самолёт над облаками', 'Хор', 'Раритетное авто', 'Тапочки с освещением', 'Пальмы', 'Вкуснеёшее блюдо', 'Морский закат', 'Краб на камне', 'Супер-шоу', 'Сафари на авто'];

// Имена для авторов комментариев

const NAMES = ['Абрам Рабинович', 'Залман Раппопорт', 'Натан Напельбаум', 'Эммануил Шерман', 'Сара Рабинович', 'Рахиль Шапиро', 'Талья Гольдман', 'Давид Шниперсон', 'Фрума Лернер', 'Иосиф Вайсер'];

// Фразы для комментариев;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const AVATAR_COUNTER = {
  min: 1,
  max: 6
};

const LIKES_COUNTER = {
  min: 15,
  max: 200
};

const COMMENTS_COUNTER = {
  min: 1,
  max: 30
};

// Получение случайного числа из диапазона

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Получение случайного элемента из массива

const getArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Получение одного или двух комментариев

const createMessage = () => {
  const messages = Array.from({length: getRandomInteger(1, 2)}, () => getArrayElement(MESSAGES));
  return Array.from(new Set(messages)).join(' ');
};

// Создание объекта для комментариев

const createPhotoComment = () => ({
  id: getRandomInteger(1, 1000),
  avatar: `img/avatar-${getRandomInteger(AVATAR_COUNTER.min, AVATAR_COUNTER.max)}.svg`,
  message: createMessage(),
  name: getArrayElement(NAMES),
});

// Создание объекта для описания фотографии

let commentId = 1;
let descriptionId = 1;

const createPhotoDescription = () => ({
  id: commentId,
  url: `photos/${commentId++}.jpg`,
  description: DESCRIPTIONS[(descriptionId++) - 1],
  likes: getRandomInteger(LIKES_COUNTER.min, LIKES_COUNTER.max),
  comments: Array.from({length: getRandomInteger(COMMENTS_COUNTER.min, COMMENTS_COUNTER.max)}, createPhotoComment),
});

const createPhotoDescriptions = () => Array.from({length: NUMBER_DESCRIPTIONS_FOTO}, createPhotoDescription);

// eslint-disable-next-line no-console
console.log(createPhotoDescriptions());
