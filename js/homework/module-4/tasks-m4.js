// Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву

// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
// every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 45, 67, 34];

const every = function (array, callback) {
  for (const el of array) {
    console.log(el);
    if (!callback(el)) {
      return false;
    } else {
      return true;
    }
  }
};

const test = function (element) {
  if (element < 10) {
    return true;
  } else {
    return false;
  }
};

console.log(every(array1, test)); // true (перевіряємо чи елементи < 10)
console.log(every(array2, test));

// console.log(array1.every(test));
// console.log(array2.every(test));

//Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройже перевірку з callback callback приймає елемент масиву

// const some = function (array, callback) {
//   for (const el of array) {
//     if (callback(el)) {
//       console.log(el);
//     } else {
//       console.log(false);
//     }
//   }
//   return callback();
// };

const test1 = function (element) {
  if (element > 10) {
    return true;
  } else {
    return false;
  }
};

const test2 = function (element) {
  if (element < 10) {
    return true;
  } else {
    return false;
  }
};
// console.log([1, 2, 3, 23, 5].some(test1)); // true (перевіряємо чи елементи > 10)
// console.log([12, 45, 67, 34].some(test2)); // false (перевіряємо чи елементи < 10)

// Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false

const compact = function (array, callback) {
  const newArray = [];
  for (const element of array) {
    if (testArray(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

function testArray(el) {
  if (Boolean(el)) {
    return true;
  }
}

console.log(compact([1, 0, '', null, 'Hello'], testArray)); // [1,'Hello']

// Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.

// Якщо прогрес доставки 100 показувати строку "Done"

// Якщо прогрес доставки < 100 показувати строку "In progress"

// Якщо прогрес доставки null показувати строку "Ready for delivery"

const ordersA = [
  { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
  { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
  { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
];

const ordersB = [
  { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
  { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
];

function showDeliveryStatus(array, callback) {
  for (const obj of array) {
    callback(obj);
  }
}

function testProgress(el) {
  if (el.deliveryProgress === 100) {
    return console.log(`${el.name} ${el.price} has status Done`);
  } else if (el.deliveryProgress < 100) {
    return console.log(`${el.name} ${el.price} has status In Progress`);
  } else if (el.deliveryProgress === null) {
    console.log(`${el.name} ${el.price} has status Ready for delivery`);
  }
}

showDeliveryStatus(ordersA, testProgress); // "In Progress", "Done", "Ready for delivery"
showDeliveryStatus(ordersB, testProgress); // "In progress", "Not Ordered", "Ready for delivery"
