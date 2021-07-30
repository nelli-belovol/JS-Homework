// class MainUser {
//   constructor(name = 'user') {
//     this.name = name;
//   }
//   showName() {
//     console.log(this.name);
//   }

//   toGetSumm(a, b) {
//     return a + b;
//   }
// }

// console.dir(MainUser);
// console.dir(MainUser.prototype);

// const mainUser = new MainUser('Nelli');
// console.log(mainUser);
// mainUser.showName();

// //-------------------------

// class CurrentUser extends MainUser {
//   constructor(age, zzz) {
//     super(zzz);
//     this.age = age;
//   }

//   updateAge() {
//     // return (this.age += 1);
//     return super.toGetSumm(this.age, 1);
//   }
// }

// const currentUser = new CurrentUser(31, 'zzzzzzzzzzzzz');
// console.log(currentUser);
// currentUser.showName();
// console.log(currentUser.updateAge());

// const myFunc = function mainFunc() {
//   console.log('это функциональное выражение без имени');
// };

// myFunc();
// console.dir(myFunc);

// function declFunc() {
//   console.log('Функция без переменной');
// }

// console.log(declFunc);

//----------------------------------------------------------------------
// создать конструктор с общим набор свойств и методов для создания экземпляра
// свойства title, price, category
// методы  showTitle, showCategory, showPrice
// updateTitlem updateCategory, updatePrice
// function MainProduct(title = 'product', category = 'cat', price = 0) {
//   this.title = title;
//   this.category = category;
//   this.price = price;
// }

// // через prototype
// MainProduct.prototype.showTitle = function () {
//   console.log(this.title);
// };
// MainProduct.prototype.showCategory = function () {
//   console.log(this.category);
// };
// MainProduct.prototype.showPrice = function () {
//   console.log(this.price);
// };
// MainProduct.prototype.updateTitle = function (value) {
//   return (this.title = value);
// };
// MainProduct.prototype.updateCategory = function (value) {
//   return (this.category = value);
// };
// MainProduct.prototype.updatePrice = function (value) {
//   return (this.price = value);
// };

// через класс И get set

// class MainProduct {
//   constructor(title = 'product', category = 'cat', price = 0) {
//     this._title = title;
//     this._category = category;
//     this._price = price;
//   }

//   get title() {
//     console.log(this.title);
//   }
//   set title(value) {
//     return (this.title = value);
//   }

//   get category() {
//     console.log(this.category);
//   }

//   set category(value) {
//     return (this.category = value);
//   }
//   get price() {
//     console.log(this.price);
//   }

//   set price(value) {
//     return (this.price = value);
//   }
// }

// создать конструктор на базе исходного для весовых товаров

// function WeightProduct(title, category, price, weight) {
//   MainProduct.call(this, title, category, price);
//   this.weight = weight;
// }
// WeightProduct.prototype = Object.create(MainProduct.prototype);
// WeightProduct.prototype.constructor = WeightProduct;
// WeightProduct.prototype.incrementWeight = function (value) {
//   return (this.weight += value);
// };

// WeightProduct.prototype.decrementWeight = function (value) {
//   if (this.weight - value >= 0) return (this.weight -= value);
// };
// const sugar = new WeightProduct('sugar', 'sweets', 25, 1);
// console.log(sugar);

// классом

// class WeightProduct extends MainProduct {
//   constructor() {
//     super(title, category, price);
//     this.weight = weight;
//   }
//   incrementWeight(value) {
//     return (this.weight += value);
//   }

//   decrementWeight(value) {
//     return (this.weight += value);
//   }
// }
// const bananas = new WeightProduct('bananas', 'fruits', 30);
// console.log(bananas);

// создать конструктор на базе исходного для товаров поштучно

// конструктором
// function CountProduct(count, title, category, price) {
//   MainProduct.call(this, title, category, price);
//   this.count = count;
// }
// CountProduct.prototype = Object.create(MainProduct.prototype);
// CountProduct.prototype.constructor = CountProduct;

// CountProduct.prototype.incrementCount = function (value) {
//   return (this.count += value);
// };

// CountProduct.prototype.decrementCount = function (value) {
//   if (this.count >= 0) return (this.count -= value);
// };

// const mango = new CountProduct(5, 'mango', 'fruits', 50);
// console.log(mango);

// классом

// class CountProduct extends MainProduct {
//   constructor(count, title, category, price) {
//     super(title, category, price);
//     this.count = count;
//   }

//   incrementCount(value) {
//     return (this.count += value);
//   }

//   decrementCount(value) {
//     if (this.count >= 0) return (this.count -= value);
//   }
// }
// const snikers = new CountProduct(5, 'Snikers', 'sweets', 22);
// console.log(snikers);

//Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.
// Чтобы показать как будет использоваться класс Admin, мы добавили инициализацию экземпляра под объявлением класса.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

// Задание
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
