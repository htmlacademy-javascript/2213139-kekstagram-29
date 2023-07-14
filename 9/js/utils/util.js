const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export {getRandomInteger, getArrayElement};
