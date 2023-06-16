// ДМИТРИЙ ТИМОФЕЕВ

// Фразы для описания фотографий

const DESCRIPTIONS = {1: 'Отель с бассейном', 2: 'Указатель', 3: 'Море... Пляж...', 4: 'Вот такие мы красивые!', 5: 'Весёлая кухня', 6: 'Шикарное авто', 7: 'Свежее и вкусное', 8: 'Вкуснотища!', 9: 'Самолёт', 10: 'Хранение обуви', 11: 'Дорога к морю', 12: 'Авто в аренду', 13: 'Салат с красной рыбой', 14: 'Суши с котом', 15: 'Стильные валенки', 16: 'Самолёт над облаками', 17: 'Хор', 18: 'Раритетное авто', 19: 'Тапочки с освещением', 20: 'Пальмы', 21: 'вкусноеёшее блюдо', 22: 'Морский закат', 23: 'Краб на камне', 24: 'Супер-шоу', 25: 'сафари на авто',};

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

// Количество описаний фото

const NUMBER_DESCRIPTIONS_FOTO = 25;

// Получение случайного числа из диапазона

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Получение ID для фото по порядку

const createIdGenerator = () => {
  let lastGeneratedId = 1;

  return () => lastGeneratedId++;
};

const createRandomId = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }

    previousValues.push(currentValue);
    return currentValue;
  };
};

// Создание объекта для комментариев

const getRandomId = createRandomId(1, 1000);

const createCommentFoto = () => ({
  id: getRandomId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: `${MESSAGES[getRandomInteger(0, MESSAGES.length - 1)]}`,
  name: `${NAMES[getRandomInteger(0, NAMES.length - 1)]}`,
});

// Создание объекта для описания фотографии

const generatePhotoId = createIdGenerator();
const generatePhotoUrl = createIdGenerator();
const generateDescription = createIdGenerator();

const createDescriptionFoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: `${DESCRIPTIONS[generateDescription()]}`,
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1, 30)}, createCommentFoto),
});

const fotoDescriptions = Array.from({length: NUMBER_DESCRIPTIONS_FOTO}, createDescriptionFoto);

// eslint-disable-next-line no-console
console.log(fotoDescriptions);
