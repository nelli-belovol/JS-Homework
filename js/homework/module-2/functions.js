// создание функции
// function expression - функ-ное выражение которое храниться в переменной

// const name = function (parametr) {
//   //тело функции
//   return result;
// };

const toShowValue = function () {
  console.log(`my name is Nelli`);
};

toShowValue();

const getSum = function (a = 0, b = 0) {
  let result = a + b;
  return `result: ${result}`;
};
let result = getSum(1, 2);
console.log(result);

result = getSum(4);
console.log(result);

// function declaration можно использовать до ее объяявления
// function name(parametr) {
//     тело
//     return result;
// }
let isModalOpen = false;

result = toggleModal(isModalOpen);
console.log(result);

function toggleModal(value) {
  value = !value;
  return value;
}
isModalOpen = true;
result = toggleModal(isModalOpen);
console.log(result);

// Arrow function
// const name = (parametres) =>
// {
//     тело
// }

const getPow = (num, pow) => num ** pow;

result = getPow(2, 3);
console.log(result);

result = getPow(5, 3);
console.log(result);

// pseudoarray arguments => Array.from(arguments)
const getResultsByTests = function () {
  console.log(arguments);
  const normalArray = Array.from(arguments);
  console.log(normalArray);
  let total = 0;
  for (let arg of arguments) {
    console.log(arg);
    if (Number(arg) > 0) {
      total += Number(arg);
    }
  }
  return total;
};
result = getResultsByTests(`nnn@gmail.com`, '1', '0', '1', '0');
console.log(result);

// вместе со стрелочными функциями пришел rest оператор
const students = [];
const scores = [];
const getScores = (email, ...args) => {
  console.log(email);
  students.push(email);

  console.log(args);
  let sum = 0;
  for (let num of args) {
    sum += Number(num);
  }
  scores.push(sum);
  return sum;
};
result = getScores(`n@gmail.com`, '1', '0', '1', '0');
result = getScores(`b@gmail.com`, '1', '1', '1', '0');
result = getScores(`cn@gmail.com`, '1', '0', '1', '0');
result = getScores(`dnn@gmail.com`, '1', '0', '1', '1');
result = getScores(`enn@gmail.com`, '1', '0', '1', '0');
result = getScores(`nknn@gmail.com`, '1', '1', '1', '1');

console.log(result);
console.log(students);
console.log(scores);

console.log(Math.max(...scores));

//-----------------------------------------------------------
// Найти самое длинное слово в строке

function findLongestWord(string) {
  // Change code below this line

  const wordArray = string.split(' ');
  let wordLengthMax = '';
  for (let i = 0; i < wordArray.length; i += 1) {
    if (wordArray[i].length > wordLengthMax.length) {
      wordLengthMax = wordArray[i];
    }
  }
  return wordLengthMax;

  // Change code above this line
}

//Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

//Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).

function filterArray(numbers, value) {
  // Change code below this line
  const newNumbers = [];
  for (let number of numbers) {
    if (number > value) {
      newNumbers.push(number);
    }
  }

  return newNumbers;

  // Change code above this line
}

//Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];

  return fruits.includes(fruit); // Change this line
}

//Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

function getCommonElements(array1, array2) {
  // Change code below this line
  const newArray = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArray.push(array1[i]);
    }
  }

  return newArray;
  // Change code above this line
}

// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

function includes(array, value) {
  for (const arrayValue of array) {
    if (arrayValue === value) return true;
  }
  return false;
}
