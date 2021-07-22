// Императивный код - набор посл-х инструкций
// Декларативный код - вызов функций

//-----------------------------------------------

// Чистая функция

const arr = [1, 2, 3, 4, 5];
function pureFunc(array, value) {
  // в логике функции объявим локальную переменную
  const resultArray = [];
  for (let i = 0; i < array.length; i += 1) {
    // console.log(array[i]);
    let result = array[i] * value;
    // console.log('result', result);
    resultArray.push(result);
  }
  // результатом вызова функции вернем локальную переменную
  return resultArray;
}

console.log('Результат чистой функции', pureFunc(arr, 2));
// console.log('Исходный массив', arr);

// Перебирающие методы массива

// forEach
//array.forEach((elem) => {})  - ничего не возвращает, просто перебирает как for of

console.log('Исходный массив', arr);
const forEachArray = [];
const result = arr.forEach((elem, idx, arr) => {
  //   console.log(elem, idx, arr);
  //   return elem;
  forEachArray.push(elem * 2);
});
console.log(result); //  forEach не дает нам результат = undefined
console.log(forEachArray);

// array.map((elem)=>{}) - массив той же длины, что и исходный
const students = [
  { name: 'nelli', age: 15 },
  { name: 'anna', age: 27 },
  { name: 'lora', age: 34 },
  { name: 'egor', age: 32 },
];

const studentsAges = students.map(elem => {
  console.log(elem);
  return elem.age + 1;
});
console.log(studentsAges);

// array.filter((elem) => {}) - массив отфильтрованных элементов, прошедших проверку

const studentsTo18 = students.filter(elem => {
  return elem.age < 18;
});

console.log(studentsTo18);

const studentsBy18 = students.filter(elem => {
  return elem.age >= 18;
});

console.log(studentsBy18);

const studentsBy50 = students.filter(elem => {
  return elem.age >= 50;
});

console.log(studentsBy50); // создаст массив и т.к. ни один элемент не пройдет проверку, то вернет пустой массив

function arraysCheck(arr, age) {
  //   const result = arr.filter(el => el.age >= age);
  //   if (result.length === 0) {
  //     return 'Ни один элемент не прошел проверку';
  //   }
  //   return result.map(el => el.name).join(', ');

  // Через цепочку методов ???????????????????
  let res = arr.filter(el => el.age > age).map(el => el.name);
  console.log(res);
  if (res.length === 0) return 'Ни один элемент не прошел проверку';
  return res;
}

console.log(arraysCheck(students, 18));
console.log(arraysCheck(students, 50));

// find - первый элеменет прошедший проверку
const newstudentsTo18 = students.find(elem => elem.age >= 18);
console.log(newstudentsTo18); //{name: "anna", age: 27}

// reduce - универсальный метод, возвращает массив, метод, строку,

//array.reduce((acc, elem)=>{}, []) - вернет массив

//array.reduce((acc, elem)=>{}, {}) - вернет объект

//array.reduce((acc, elem)=>{}, 0) - вернет число
let reduceResult = arr.reduce((acc, elem) => {
  //   console.log(acc, elem);
  acc += elem;
  return acc;
}, 0);
console.log(reduceResult);

reduceResult = arr.reduce((newArray, number) => {
  newArray.push(number);
  return newArray;
}, []);

console.log(reduceResult);
console.log(reduceResult === arr); // false, копия исходного массива, но лежат в разных ячейкках
//array.reduce((acc, elem)=>{}, "") - вернет строку

//array.every((elem)=>{})  - true, если все true || false - &&

let isEvery = arr.every(el => {
  return el % 2 === 0;
});
console.log(isEvery);

//array.some((elem)=>{}) - false, если все false || true - ||

let isSome = arr.some(el => {
  //   return el % 2 === 0; // true
  return el > 5; // false
});
console.log(isSome);

// Сортировка
// Для символов
// array.sort()

const names = ['Anna', 'Vasiliy', 'Evgeniy', 'Vitaliy', 'Marina', 'Valeriy'];
console.log(names.sort()); // сортировка от А до Я
console.log(names.sort().reverse()); // сортировка от Я до А

// Для чисел
//array.sort()

const numbers = [3, 2, 5, 6, 8, 7, 1, 4];
const numbers2 = [3, 21, 54, 6, 8, 47, 1, 4];

const sortNumbers = numbers.sort();
console.log(sortNumbers); //[1, 2, 3, 4, 5, 6, 7, 8]
console.log(numbers);
console.log(numbers2.sort()); //[1, 21, 3, 4, 47, 54, 6, 8]
console.log(numbers2);

// array.sort((min, max)=>{min - max})
console.log(numbers2.sort((min, max) => min - max)); //[1, 21, 3, 4, 47, 54, 6, 8]
console.log(numbers2.sort((min, max) => max - min)); //[54, 47, 21, 8, 6, 4, 3, 1]

const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое'],
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика'],
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения'],
  },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => books.genres);
console.log(allGenres);
const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);

//---------------------------------------------------

// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];

// Пиши код ниже этой строки
const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
// Пиши код выше этой строки

//----------------------------------------------
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.

// Пиши код ниже этой строки
const getTotalFriendCount = users => {
  return users.reduce((total, user) => total + user.friends.length, 0);
};
// Пиши код выше этой строки

//----------------------------------
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский'];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

//--------------------------------------------
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
