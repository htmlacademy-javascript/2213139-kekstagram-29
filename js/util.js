// Получение случайного числа из диапазона

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Получение случайного элемента из массива

const getArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export {getRandomInteger};
export {getArrayElement};
