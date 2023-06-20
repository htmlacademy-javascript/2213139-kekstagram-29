// Task_1 - Проверка длины строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('Слоны идут на север', 19);


// Task_2_1 - Проверка на палиндром

const isPalindromeOne = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse('').join('');

isPalindromeOne('топот');


// Task_2_2 - Проверка на палиндром строки с пробелами

const isPalindromeTwo = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  const newString = normalString.split('').reverse('').join('');

  return normalString === newString;
};

isPalindromeTwo('Лёша на полке клопа нашёл ');


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

// ВАРИАНТ С РЕГУЛЯРКАМИ

const getNumberThree = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};

getNumberThree('-1.5');
