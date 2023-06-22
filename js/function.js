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


// Задание по разделу 5 ФУНКЦИИ ВОЗВРАЩАЮТСЯ


// Функция - Перевод времени в минуты

const getAmountMinutes = (time) => {
  const TIME_COUNT = {hours: 0, minutes: 1};
  const arrayHoursAndMinutes = time.split(':');

  return arrayHoursAndMinutes[TIME_COUNT.hours] * 60 + Number(arrayHoursAndMinutes[TIME_COUNT.minutes]);
};

// Функция - решение

const isWorkingDay = (startWorkingDay, endWorkingDay, startMeeting, durationMeeting) => {
  const getAmountMinutesEndMeeting = getAmountMinutes(startMeeting) + durationMeeting;
  let result = true;

  if (getAmountMinutes(startMeeting) < getAmountMinutes(startWorkingDay) || getAmountMinutesEndMeeting > getAmountMinutes(endWorkingDay)) {
    result = false;
  }

  return result;
};

isWorkingDay('08:00', '17:30', '14:00', 90);

// console.log(isWorkingDay('08:00', '17:30', '14:00', 90));
// console.log(isWorkingDay('8:0', '10:0', '8:0', 120));
// console.log(isWorkingDay('08:00', '14:30', '14:00', 90));
// console.log(isWorkingDay('14:00', '17:30', '08:0', 90));
// console.log(isWorkingDay('8:00', '17:30', '08:00', 900));
