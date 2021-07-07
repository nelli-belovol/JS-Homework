// // привязка контекста
// const user = {
//   name: 'Nelli',
//   age: 31,

//   showInfo() {
//     console.log(`this`, this);
//   },
// };

// function sayHello() {
//   console.log(`Hello ${this.name}, I'm a ${manager} and i'm ${doing}`);
// }

// sayHello(); // error

// // 1- мгновенный вызов (на том же уровне) - call || apply
// // call(object) ожидает объект и необходимые аргументы через запятую
// sayHello.call(user, 'Rafael', 'glad to see you');
// // apply(object)ожидает объект и необходимые аргументы в массиве
// sayHello.apply(user, ['Rafael', 'glad to see you']);

// // 2 - если надо передать как callback - bind
// // bind (object)
// function getUserInfo(cb) {
//   cb();
// }
// getUserInfo(user.showInfo.bind(user));
// const user1 = {
//   name: 'Paris',
//   age: 33,
// };

// getUserInfo(getUserInfo.bind(user1));

//example

const mainProduct = {
  showPrice() {
    console.log('product price', this.price);
  },
  updatePrice(value) {
    if (this.price === value) return 'the same price';
    return (this.price = value);
  },
  getCost(count = this.count) {
    if (this.count >= count) {
      return this.price * count;
    } else {
      return 'Товара нет в достаточном количестве';
    }
  },
};

const product1 = {
  name: 'banana',
  price: 20,
  count: 10,
};

const product2 = {
  name: 'orange',
  price: 30,
  count: 5,
};

mainProduct.showPrice.call(product1);
mainProduct.showPrice.call(product2);

console.log(mainProduct.updatePrice.call(product1, 20));
mainProduct.showPrice.call(product1);

console.log(mainProduct.updatePrice.call(product1, 40));
mainProduct.showPrice.call(product1);

console.log(mainProduct.getCost.call(product1, 10));
console.log(mainProduct.getCost.call(product1, 11));

console.log(mainProduct.getCost.apply(product2, [5]));
console.log(mainProduct.getCost.apply(product2, [11]));

const products = [{ name: 'lemon', price: 45, count: 20 }];
products.push(product1, product2);
console.log(products);
// функция которая считает общую стоимость в массиве
function getFullCost(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    // console.log(arr[i]);

    // console.log(mainProduct.getCost.call(arr[i]));
    total += mainProduct.getCost.call(arr[i]);
  }
  //   console.log(total);
  return total;
}

console.log(getFullCost(products));
