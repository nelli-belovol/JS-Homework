// cREATE
console.log(typeof {}, {});

const obj = {
  //props (key:value;)

  name: 'Nelli',
  lastName: 'Belovol',
  age: 31,
};

console.log(obj);
console.log(obj.name);
console.log(obj.lastName);
console.log('age:', obj.age);

console.log(obj['name']); // т.к. ключ это только строка, то обращаемся к нему как к строке через [" "]
console.log(obj['lastName']);
console.log(obj['age']);

obj.name = 'NELLI';
console.log(obj);

console.log(obj.skills); // undefined т.к. такого свойства еще нет

obj.skills = []; // добавлчем новое свойство
console.log(obj.skills); // пока пустой массив
console.log(obj);

//добавляем значение в свойство объекта
obj.skills.push('HTML', 'CSS', 'Js', 'React', 'Node');
console.log(obj.skills);
console.log(obj);

// удалить  ненужное свойство в объекте
delete obj.age;
console.log(obj.age);
console.log(obj);

// short props КОРОТКИЕ СВОЙСТВА

let pet = 'cat';
const newObj = { pet };
console.log(pet);

// ВЫчисляемые свойства
let key1 = 'name';
let key2 = 'lestName';
let key3 = 'skills';

console.log('key1:', obj[key1]);
console.log('key2:', obj[key2]);
console.log('key3:', obj[key3]);

// for in

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

//-------------------------

const newObject = Object.create(obj);
console.log(newObject);
//

newObject.pet = 'kitten';
console.log(newObject);

//Разберём концепцию собственных и несобственных свойств объекта и научимся правильно использовать цикл for...in.
//Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal.
//Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в объекте dog - это несобственное свойство из объекта animal.
// Оператор in, который используется в цикле for...in, не делает различия между собственными и несобственными свойствами объекта. Эта особенность мешает, так как мы всегда хотим перебрать только собственные свойства. Для того чтобы узнать есть в объекте собственное свойство или нет, используется метод hasOwnProperty(key), который возвращает true или false.
// Поэтому при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

// obj.hasOwnProperty()
console.log('pet', newObject.hasOwnProperty('pet'));
console.log('name', newObject.hasOwnProperty('name'));
console.log('skills', newObject.hasOwnProperty('skills'));

//
for (let key in newObject) {
  console.log('newObject key:', key); // выведуться и его свойства и родительские от obj
}

// Object.keys()

const objKeys = Object.keys(obj);
console.log(objKeys);

// Object.values()

const objValues = Object.values(obj);
console.log(objValues);

// Object.entries()

const objEntries = Object.entries(obj);
console.log(objEntries);

// SPREAD - распыление ...

const numbers = [1, 2, 3, 4, 5, 6, 86];
console.log(Math.max(...numbers));

// создание нового массива через распыление

const newNumbers = [...numbers];
console.log(newNumbers);
console.log(newNumbers === numbers);

// распыление массивов и добавление их в новый массив

const bestArray = [...numbers, 'Js', ...newNumbers.slice(-1)];
console.log(newNumbers);

// распыление объектов

const user = { name: 'Bill' };
const newUser = { company: ['IBM'] };

const superUser = { ...user, gender: 'male', ...newUser };
console.log(superUser);
//----------------------------------------------------------
function getTotalResolt(...scores) {
  console.log(scores);
  let total = 0;
  for (let i = 0; i < getTotalResolt.length; i += 1) {
    console.log(scores[i]);
    total += scores[i]; // total = total +dcores[i]
    return total;
  }
}

let result = getTotalResolt(23, 45, 44, 555, 8787, 21);

// Destructuring - способ достать ключ или значение

const myFavoriteMusic = {
  rock: {
    bands: ['Rammstein', 'Limp Biskit'],
  },
};

console.log(myFavoriteMusic.rock.bands);
myFavoriteMusic.rock.bands.push('Linkin Park');
console.log(myFavoriteMusic.rock.bands);

const {
  rock: { bands, songs },
} = myFavoriteMusic;

console.log(bands);
bands.push('Bi-2');
console.log(bands);
console.log(songs);

const { rock: objectOfRock } = myFavoriteMusic; // деструктуризация 1го уровня с переименованием внутр
console.log(objectOfRock);

// Деструктуризация массива

const array = ['Sandra', [], 30];
const [, , age] = array;

console.log(age);

//-------------------------------
const user1 = {
  userName: 'Super User',

  // ES6
  changeName(value) {
    console.log(this.userName);
    this.userName = value;
    console.log(this.userName);
    return this.userName;
  },
};
user1.changeName('Sandra');

//----------------------------------------------------
//Массив ОБЪЕКТОВ

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];

// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

//----------------------------------------------------
// Поиск объекта по значению свойства
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name.includes(productName)) {
//       return product.price;
//     }
//   }
//   return null;
// }

//Задача. Коллекция значений свойства
//Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const AllPropValues = [];

//   for (const product of products) {
//     if (product[propName]) {
//       AllPropValues.push(product[propName]);
//     }
//   }
//   return AllPropValues;
// }
// console.log(getAllPropValues('name'));

// console.log(getAllPropValues('quantity'));

// console.log(getAllPropValues('price'));

// console.log(getAllPropValues('category'));

//Общая стоимость товара
//Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let totalPrice = 0;
  for (const product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
}

console.log(calculateTotalPrice('Blaster'));
console.log(calculateTotalPrice('Radar'));
console.log(calculateTotalPrice('Droid'));
console.log(calculateTotalPrice('Grip'));
console.log(calculateTotalPrice('Scanner'));

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

//Паттерн «Объект настроек»
