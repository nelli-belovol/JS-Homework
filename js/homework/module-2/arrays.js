// array
//массив это сложный тип данных который хранит в себе проиндексированные значения

//create
const students = ['Marta', 'Nelli', 'Vika'];
console.log('students', students.length, students);

//get values of elements

const firstStudent = students[2];
console.log(firstStudent);

//change values

students[0] = 'Philip';
console.log('students', students);

//for & for ...of

// for (let k = 0; k < students.length; k += 1) {
//   console.log(`students-${k + 1}:`, students[k]);
// }

let i = 0;
for (let student of students) {
  console.log(`students-${(i += 1)}:`, students[i]);
}

// primitives by value & arrays by references

let num = 1;
let myNumber = num;
num = 0;
console.log(`num: ${num}, myNumber: ${myNumber}, num === myNumber;`, num === myNumber);

// split & join

let myString = 'I love Javascript';
// const myArray = myString.split();
let myArray = myString.split('a');
console.log(myString, myArray);

// add new elements: push () & unshift ()  pop() shift ()

const nums = [1, 2, 3, 4, 5];
console.log(nums);
const shiftNums = nums.shift();
console.log(shiftNums, nums);

const popNums = nums.pop();
console.log(popNums, nums);

const unShiftNums = nums.unshift(1); // добавляющий метод выводит длину массива, а не новую переменную
console.log(unShiftNums, nums);

const pushNums = nums.push(5); // добавляющий метод выводит длину массива, а не новую переменную
console.log(pushNums, nums);

// splice - мутирует исходный массив

const cutStudents = students.splice(0, 2); // cut 1 element
console.log('cutStudents', cutStudents);
console.log(students);

const replaceStudents = students.splice(0, 1, 'Ann'); // replace 1 element

console.log(students);

const addStudents = students.splice(1, 0, 'Ben', 'Jack'); // add 2 element
console.log(students);

// вывод массива в виде таблицы

// const myFriends = ['Nelli', 'Vika', 'Kate', 'Olga', 'Kirill', 'Egor', 'Lora'];
// console.table(myFriends);

// сравнение === сложных объектов (массивов) происходит по адресу, поэтому, даже при одинаковых значениях, внутри массива, они не будут равны, так как они находятся в разных ячейках
//-------------------------------------------------------------------
const myFriends = ['Nelli', 'Vika', 'Kate', 'Olga', 'Kirill', 'Egor', 'Lora'];
console.log(myFriends[0], myFriends[myFriends.length - 1]);

//-------------------------------------------------------------------
// выведение первого и последнего значения массива
function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  const elements = [firstElement, lastElement];
  return elements;
}
//-------------------------------------------------------------------
// Функция деления массива по делиметру

function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);

  // Change code above this line
  return words;
}

// цена в зависимости от количества за единицу и стоимости за единицу

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
  let words = message.split(' ');
  let wordСount = words.length;
  let price = pricePerWord * wordСount;
  return price;

  // Change code above this line
}

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

function slugify(title) {
  // Change code below this line
  let titleArray = title.split(' ');
  let titleWords = titleArray.join('-');
  let slug = titleWords.toLowerCase();

  return slug;
  // Change code above this line
}

//Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  let newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    let cutNewArray = newArray.slice(0, maxLength);
    return cutNewArray;
  }
  return newArray;

  // Change code above this line
}

// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  // Change code above this line
  return total;
}
