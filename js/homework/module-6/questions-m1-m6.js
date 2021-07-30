// const b = document.body.refs

function getSum(a) {
  console.log(arguments); //Arguments [callee: (...), Symbol(Symbol.iterator): ƒ]

  console.log(Array.from(arguments)); //(4) [2, 3, 4, 556] преобразовали в массив

  console.log([...arguments]); //(4) [2, 3, 4, 556] преобразовали в массив
  let i = 0;
}
getSum(2, 3, 4, 556);

// Стрелочная функция

const getResult = () => 2 + 4; // неявный возврат

// this  в стрелочной функции НЕ ИМЕЕТ this

const obj = {
  name: 'user',
  getData() {
    console.log(this.name);
  },
  //   showName: () => {
  //     console.log(this.name);
  //   },
};
// obj.showName(); //questions-m1-m6.js:20 Uncaught TypeError: Cannot read property 'name' of undefined
// at Object.showName (questions-m1-m6.js:20)
// at questions-m1-m6.js:23

const newUser1 = {
  name: 'Oleg',
};

const newUser2 = {
  name: 'Denis',
};

// call (obj, ... argN)
obj.getData(); //user
obj.getData.call(newUser1); //Oleg
obj.getData.call(newUser2); //Denis

//apply(obj, [arg1, ... argN]) когда не знаем сколько у нас аргументов
// const args = [1, 2, 3];
// function greet() {
//   console.log(a, b, c);
//   return `${this.name} is my name`;
// }
// console.log(greet.apply(newUser2, args));

// //------------------callback
// function toShowLK(cb) {
//   body.style.color = 'green'; // перекрасит цвет на странице и выполнит какую-то функцию
//   return cb();
// }
// // console.log(toShowLK(greet.bind(newUser1)));

// пример

const inventory = {
  items: ['Knife', 'Gas mask'],

  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },

  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    this.items = this.items.filter(item => item !== itemName);
  },
};
const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};
gjke;
invokeInventoryAction('Medkit', inventory.add.bind(inventory)); // Invoking action on Medkit
// questions-m1-m6.js:66 Adding Medkit to inventory

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory)); //Invoking action on Gas mask
// questions-m1-m6.js:72 Removing Gas mask from inventory
