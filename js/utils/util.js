const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const isNotInput = (event) => event.target.closest('.text__hashtags') || event.target.closest('.text__description');

const isEscapeKey = (event) => event.key === 'Escape';

export {getRandomInteger, getArrayElement, isNotInput, isEscapeKey};
