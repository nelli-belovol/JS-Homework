// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(Object.keys(obj));

// const newObj = Object.create(obj);
// console.log(newObj);
// console.log(Object.keys(newObj));

// // #1 создать объект товара

// const product = {
//   // properties
//   name: '',
//   price: 0,
//   quantity: 0,

//   // methods
//   showName() {
//     console.log(this.name);
//   },
//   changeName(value) {
//     this.name = value;
//   },

//   showPrice() {
//     console.log(this.price);
//   },
//   changePrice(value) {
//     this.price = value;
//   },

//   showQuantity() {
//     console.log(this.quantity);
//   },
//   changeQuantity(value) {
//     this.quantity = value;
//   },
// };
// console.log(product);

// product.showName();
// product.changeName('Peach');
// product.showName();

// product.showPrice();
// product.changePrice(55);
// product.showPrice();

// product.showQuantity();
// product.changeQuantity(3);
// product.showQuantity();

//ДОбавить метод стоимость общего количества текущего товара
// product.getTotalPrice = function () {
//   return this.price * this.quantity; //в стрелочных функциях НЕТ КОНТЕКСТА this
// };

// console.log(product.getTotalPrice());

// Записать в переменную ТоталПрайс общую стоимость

// const products = [
//   { name: 'Grape', price: 80, quantity: 2 },
//   { name: 'Banana', price: 30, quantity: 5 },
//   { name: 'Kiwi', price: 100, quantity: 1.5 },
// ];

// let totalPrice = 0;
// for (let i = 0; i < products.length; i += 1) {
//   totalPrice += products[i].price * products[i].quantity;
// }

// создат ьф-цию которая принимает массив подуктов, название тоара и его количество и выводит его стоимость если достаточно или сообще о то что тоара не на склдае в указанном кол
// написать ф-цию 3мя способами

const allProducts = [
  { name: 'bread', price: 20, quantity: 100 },
  { name: 'milk 2,5%', price: 30, quantity: 24 },
  { name: 'cheese', price: 300, quantity: 10 },
  { name: 'chorizo', price: 560, quantity: 4 },
  { name: 'lemon', price: 60, quantity: 9 },
  { name: 'lavazza', price: 250, quantity: 24 },
];

function getProductsCost(products, productName, productQuantity) {
  for (let i = 0; i < products.length; i++) {
    // console.log(products[i]);
    const { name, quantity, price } = products[i];
    if (name === productName.toLowerCase()) {
      if (productQuantity <= quantity) {
        return price * productQuantity;
      } else {
        return `${productName} is not enough`;
      }
    }
  }
  return `no match any ${productName} `;
}

console.log(getProductsCost(allProducts, 'Bread', 1));
console.log(getProductsCost(allProducts, 'Lemon', 10));

const getProductsCost1 = function (products, productName, productQuantity) {
  for (let i = 0; i < products.length; i++) {
    const { name, quantity, price } = products[i];
    if (name === productName.toLowerCase())
      return productQuantity > quantity ? `${productName} is not enough` : price * productQuantity;
  }
  return `not match any ${productName}`;
};

console.log(getProductsCost1(allProducts, 'Bread', 10));
console.log(getProductsCost1(allProducts, 'Lemon', 30));
console.log(getProductsCost1(allProducts, 'Orange', 1));

//Создать ф-цию которая принимает различное кол аргументов и возвращает объъект со свойствами из полученных аргументов

function createObject() {
  console.log(arguments);
  const [name, age, skills] = arguments;
  console.log(name, age, skills);
  const obj = { name, age, skills };
  return obj;
}
const createObject1 = function () {
  const [name, age, skills] = arguments;

  return { name, age, skills };
};

const createObject2 = (...params) => {
  //   console.log(params);
  const [name, age, skills] = params;
  return { name, age, skills };
};

console.log(createObject('sandra', 30, ['HTML', 'CSS', 'JS']));
console.log(createObject1('sandra', 30, ['HTML', 'CSS', 'JS']));
console.log(createObject2('sandra', 30, ['HTML', 'CSS', 'JS']));

const createObject3 = (...params) => {
  const obj = {};
  for (let i = 0; i < params.length; i++) {
    obj[`key- ${i + 1}`] = params[i];
  }
  return obj;
};

console.log(createObject3('sandra', 30, ['HTML', 'CSS', 'JS'], { friends: [] }));

const a = [1, 2, 3];
const b = [...a];
b[0] = 2;
console.log(b[0]);
console.log(a[0] === b[0]);

// массив сопадений

function findMatches(array, ...args) {
  const matches = [];

  for (const arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }
  return matches;
}

//Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
  },
};

// Корзина товаров

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    for (const item of this.items) {
      console.log(item);
      if ((productName = item.name)) {
      }
    }
  },
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity() {},
};

console.log(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'peach', price: 60 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

cart.remove('apple');

// console.ltable(cart.getItems());

// Задача. Расширяем инвентарь
// Задание
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
  },
  // Change code above this line
};
