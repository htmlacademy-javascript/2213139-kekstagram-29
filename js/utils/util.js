const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const isEscapeKey = (event) => event.key === 'Escape';

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomInteger, getArrayElement, isEscapeKey, debounce};
