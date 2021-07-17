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
  // поле для збереження розміру піци
  size: {},
  // поле для збереження списку добавок
  stuffing: {},
  // поле для збереження списку соусів
  sauce: {},
  // метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
  addStuffing(nameStaffing) {
    const keys = Object.keys(this.stuffing);
    if (keys.includes(nameStaffing)) {
      return `${nameStaffing} is already there`;
    } else {
      this.stuffing[nameStaffing] = STUFFING[nameStaffing];

      console.log('добавки:', this.stuffing);
    }
  },
  // метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
  addSauce(nameSauce) {
    const keys = Object.keys(this.sauce);
    if (keys.includes(nameSauce)) {
      return `${nameSauce} is already there`;
    } else {
      // const indexEl = Object.keys(SAUCES).indexOf(nameSauce);
      // console.log(indexEl);
      this.sauce[nameSauce] = SAUCES[nameSauce];

      console.log('соусы:', this.sauce);
    }
  },
  //   метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
  deleteStuffing(nameStaffing) {
    const keys = Object.keys(this.stuffing);
    console.log(keys);

    for (let i = 0; i < keys.length; i += 1) {
      if (keys.includes(nameStaffing)) {
        delete this.stuffing[nameStaffing];
      } else if (keys.length === 0) return "No stuffing in this pizza, can't delete.";
      return 'There is no this stuffing for delete';
    }

    console.log(this.stuffing);
  },

  // метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)

  deleteSauce(nameSauce) {
    const keys = Object.keys(this.sauce);
    console.log(keys);
    for (let i = 0; i < keys.length; i += 1) {
      if (keys.includes(nameSauce)) {
        delete this.sauce[nameSauce];
      } else if (keys.length === 0) return "No sauce in this pizza, can't delete.";
      return 'There is no this sauce for delete';
    }
  },

  // метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
  addSize(pizzaSize) {
    const keys = Object.keys(SIZES);
    console.log(keys);
    if (keys.includes(pizzaSize)) {
      this.size = SIZES[pizzaSize];
    }
  },

  // метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)

  getPizzaPrice() {
    let totalPrice = 0;
    let totalStuffingPrice = 0;
    let totalPriceSauce = 0;
    const keysStuffing = Object.keys(this.stuffing);
    const keysSauce = Object.keys(this.sauce);
    console.log(keysStuffing);
    console.log(keysSauce);

    for (const key of keysSauce) {
      console.log((totalPriceSauce += this.sauce[key].price));
    }

    for (const key of keysStuffing) {
      console.log((totalStuffingPrice += this.stuffing[key].price));
    }

    totalPrice = (totalStuffingPrice + totalPriceSauce + this.size.price).toFixed(2);
    return `Your pizza will cost ${totalPrice}.`;
  },

  // метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)

  getPizzaCal() {
    let totalCal = 0;
    let totalStuffingCal = 0;
    let totalSauceCal = 0;
    const keysStuffing = Object.keys(this.stuffing);
    const keysSauce = Object.keys(this.sauce);
    console.log(keysStuffing);
    console.log(keysSauce);

    for (const key of keysSauce) {
      console.log((totalSauceCal += this.sauce[key].cal));
    }

    for (const key of keysStuffing) {
      console.log((totalStuffingCal += this.stuffing[key].cal));
    }
    totalCal = totalStuffingCal + totalSauceCal + this.size.cal;
    return `Your pizza will cook ${totalCal} calories in this pizza.`;
  },

  // метод що показує час приготуванни в хвилинах в залежності від складності піци

  getPizzaTime() {
    let totalTime = 0;
    let totalStuffingTime = 0;
    let totalSauceTime = 0;
    const keysStuffing = Object.keys(this.stuffing);
    const keysSauce = Object.keys(this.sauce);
    console.log(keysStuffing);
    console.log(keysSauce);

    for (const key of keysSauce) {
      console.log((totalSauceTime += this.sauce[key].time));
    }

    for (const key of keysStuffing) {
      console.log((totalStuffingTime += this.stuffing[key].time));
    }
    totalTime = totalStuffingTime + totalSauceTime + this.size.time;
    return `Your pizza will cook ${totalTime} min.`;
  },

  // Метод валідації піци який поверне true якщо піца відповідає вимогам, а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)

  getValidation() {
    const keysStuffing = Object.keys(this.stuffing);
    const keysSauce = Object.keys(this.sauce);
    const keysSize = Object.keys(this.size);
    if (keysSize.length > 0 && keysStuffing.length > 0 && keysSauce.length > 0) {
      return true;
    } else if (keysSize.length == 0) {
      return console.log(false, 'You must add a size of your pizza.');
    } else if (keysStuffing.length == 0) {
      return console.log(false, 'You must add stuffing in your pizza.');
    } else if (keysSauce.length == 0) {
      return console.log(false, 'You must add sauce in your pizza.');
    }
  },

  // метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)

  totalInfo() {
    if (!this.getValidation) {
      return 'error';
    }
    return [this.getPizzaPrice(), this.getPizzaCal(), this.getPizzaTime()];
  },
};
pizza.addStuffing('TOMATO');
pizza.addStuffing('CHEESE');

pizza.addSauce('KETCHUP');
pizza.addSauce('BOLOGNESE');

// pizza.deleteStuffing('CHEESE');
// pizza.deleteSauce('KETCHUP');

pizza.addSize('BIG');

console.log(pizza);
console.log(pizza.getPizzaPrice());
console.log(pizza.getPizzaCal());
console.log(pizza.getPizzaTime());
console.log(pizza.getValidation());
console.log(pizza.totalInfo());
