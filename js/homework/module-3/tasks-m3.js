// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } const orderA = { apple: 5, cheese: 1, bread: 3 } const orderB = { orange: 10, pork: 2, bread: 1 }

const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
const orderA = { apple: 5, cheese: 1, bread: 3 };
const orderB = { orange: 10, pork: 2, bread: 1 };

const getTotalOrder = function (prices, order) {
  let totalOrder = 0;
  for (const product in order) {
    let price = order[product] * prices[product];
    totalOrder += price;
  }
  return totalOrder;
};

console.log(getTotalOrder(productsPrice, orderA));
console.log(getTotalOrder(productsPrice, orderB));

//Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false

const isObjectEmpty = function (object) {
  for (const key in object) {
    return false;
  }
  return true;
};
console.log(isObjectEmpty({}));
console.log(isObjectEmpty({ name: 'user', age: 21 }));

// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
// Створити всі методи і перевірити чи вони працюють
const SIZES = {
  BIG: { price: 25, cal: 100, time: 15 },
  SMALL: { price: 15, cal: 50, time: 7 },
  MEDIUM: { price: 15, cal: 50, time: 7 },
};
const STUFFING = {
  CHEESE: { price: 6.5, cal: 45, time: 2 },
  BEACON: { price: 10, cal: 70, time: 6 },
  TOMATO: { price: 12.1, cal: 4, time: 5 },
  CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};
const SAUCES = {
  MUSTARD: { price: 3, cal: 5, time: 1 },
  KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
  BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};

const pizza = {
  size: [],
  stuffing: [],
  sauce: [],
  // метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
  addStuffing(nameStaffing) {
    if (this.stuffing.includes(nameStaffing)) {
      return `${nameStaffing} is already there`;
    } else {
      const indexEl = Object.keys(STUFFING).indexOf(nameStaffing);
      console.log(indexEl);
      this.stuffing.push(STUFFING[indexEl]);
      return console.log('добавки:', this.stuffing);
    }
  },
  // метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
  addSauce(nameSauce) {
    if (this.sauce.includes(nameSauce)) {
      return `${nameSauce} is already there`;
    } else {
      this.sauce.push(SAUCES[nameSauce]);
      return console.log('соусы:', this.sauce);
    }
  },
  //   метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
  deleteStuffing(nameStaffing) {
    const indexEl = this.stuffing.indexOf(nameStaffing);
    console.log(indexEl);
    if (indexEl === -1 && this.stuffing.length > 1) {
      return 'Delete error';
    } else {
      this.stuffing.splice(indexEl, 1);
      return console.log(this.stuffing);
    }
  },
};
pizza.addStuffing('TOMATO');
pizza.addStuffing('CHEESE');
pizza.addSauce('KETCHUP');
pizza.deleteStuffing('TOMATO');
