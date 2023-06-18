// Task_1 - Проверка длины строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('Слоны идут на север', 19);


// Task_2_1 - Проверка на палиндром

const isPalindromeOne = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse('').join('');

isPalindromeOne('топот');

// test
// console.log(isPalindromeOne('топот'));
// console.log(isPalindromeOne('ДовОд'));


// Task_2_2 - Проверка на палиндром строки с пробелами

const isPalindromeTwo = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  const newString = normalString.split('').reverse('').join('');

  return normalString === newString;
};

isPalindromeTwo('Лёша на полке клопа нашёл ');

// test
// console.log(isPalindromeTwo ('Лёша на полке клопа нашёл '));


// Task_3_1 - Дополнительное (извлечение цифр из строки)

const getNumberOne = (string) => {
  let newString = '';

  for (const elem of string) {
    if (!Number.isNaN(parseInt(elem, 10))) {
      newString += elem;
    }
  }

  if (newString) {
    return +newString;
  }

  return NaN;
};

getNumberOne('1 кефир, 0.5 батона');

// test
// console.log(getNumberOne('2023 год'));
// console.log(getNumberOne('ECMAScript 2022'));
// console.log(getNumberOne('1 кефир, 0.5 батона'));
// console.log(getNumberOne('агент 007'));
// console.log(getNumberOne('а я томат'));


// Task_3_2 - Дополнительное (извлечение цифр из строки), если пришло число

const getNumberTwo = (string) => {
  let newString = '';

  // проверка на тип данных - число
  if (typeof(string) === 'number') {
    string = Math.abs(string).toString();
  }

  for (const elem of string) {
    if (!Number.isNaN(parseInt(elem, 10))) {
      newString += elem;
    }
  }

  if (newString) {
    return +newString;
  }

  return NaN;
};

getNumberTwo('-1.5');

// test
// console.log(getNumberTwo('а я томат'));
// console.log(getNumberTwo('2023 год'));
// console.log(getNumberTwo(2023));
// console.log(getNumberTwo(-1.5));
// console.log(getNumberTwo(0.5));


// ВАРИАНТ С РЕГУЛЯРКАМИ

const getNumberThree = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

getNumberThree('-1.5');

// console.log(getNumberTwo('а я томат'));
// console.log(getNumberTwo('2023 год'));
// console.log(getNumberTwo(2023));
