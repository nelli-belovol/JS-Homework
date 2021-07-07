// High Order Function
function highOrder(value, callback) {
  console.log(`Hello, I'm HOF`);
  callback(value);
}
highOrder("Hello, I'm callback", setMassage);

//Callback function
function setMassage(message) {
  console.log(message);
}
// setMassage("Hello, I'm callback");

const toGetFibonacci = function (value, cb) {
  console.log(`Fibonacci`);
  let firstNumber = 0;
  let secondNumber = 1;
  const sequence = [];

  for (let i = 1; i <= value; i++) {
    let number = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = number;
    console.log(`iteration - ${i}`, number);
    sequence.push(number);
    console.log(sequence);
  }
  return cb(sequence);
};
console.log(toGetFibonacci(10, getSumm));

function getSumm(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const numbers = [1, 2, 3, 4, 5];

function myFunc(arr, callback) {
  return callback(arr);
}

console.log('myFunc:', myFunc(numbers, getSumm));

// Фильтрация массива

function getYoungStudents(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age < 18) {
      array.push(arr[i]);
    }
  }
  return array;
}

function getOldStudents(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      array.push(arr[i]);
    }
  }
  return array;
}

function getStudents(callback, arr) {
  return callback(arr);
}

const youngStudents = getStudents(getYoungStudents, array);
const oldStudents = getOldStudents(getOldStudents, array);
