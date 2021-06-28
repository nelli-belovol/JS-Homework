// Объединение объектов, распыление

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b); // {} создадут новый объект не изменяя старый
// console.log(c);
// console.log(a);
// console.log(b);

// // То же самое используя операцию spread
// const d = { ...a, ...b };

// console.log(d);
//---------------------------------------------------------

// объекты
// const playlist = {
//   name: [1, 2, 3],
//   b: 5,
//   c: 10,
//   c: 20, // 2 одинаковых свойства быть не может, перезапишется на новое значение
// };
// console.log(playlist);

// const playlist = {
//   name: 'my super playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };
// console.log(playlist);
//---------------------------------------------------------

// как отличить объект от области видимости
// {} стоят перед =

// const x = {}; // при присвоении

// const fn = function (myObject) {
//   // myObject = {a:1, b:2}
//   console.log(myObject);
// };
// fn({ a: 1, b: 2 });// когда передаем аргументы для функции

// const rtfm = function () {
//   return {}; // во время возврата функции
// };
//---------------------------------------------------------

// // ДОступ к объекту

// console.log(playlist.tracks); // объект.имя ключа
// console.log(playlist.name);
// console.log(playlist.trackCount);
// //---------------------------------------------------------

// // Если имя свойства хранится в переменной

// const propertyName = 'tracks';
// console.log(playlist['rating']); // ищет ключ как строку ' '
// console.log(playlist.propertyName); //undefined
// console.log(playlist[propertyName]); // ищет переменную

//---------------------------------------------------------

// короткая запись св-в. Форма получаем данные
// const username = 'Mango';
// const email = 'mango@mail.com';

// const singupData = {
//   username, //username: username, если имя свойства и значение, которое записано в переменную совпдает, то использвуется краткая запись
//   email, //email: email,
// };
// console.log(singupData);
//---------------------------------------------------------

// Вычисляемые свойства
// <input name = "color" value = "tomato">

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPicketData = {
//   [inputName]: inputValue,
// };
// console.log(colorPicketData);
//---------------------------------------------------------

//добавление свойств

// const playlist = {
//   name: 'my super playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// playlist.qwe = 5;
// console.log(playlist);

//---------------------------------------------------------

// Массивы и функции это объекты
// const fn = function () {
//   console.log('hello');
// };
// fn.hello = ';)';
// console.dir(fn.hello);

//---------------------------------------------------------
const playlist = {
  name: 'my super playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],

  getName: function (value) {
    console.log('ага, это getName :)', value); // старая запись
  },
  getName(value) {
    console.log('ага, это getName :)', value); // синтаксис называется метод объекта
  },
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');
console.log(playlist);

playlist.addTrack('Новый трек');
console.log(playlist);
console.log(playlist.getTrackCount());

playlist.updateRating(4);
console.log(playlist);

//---------------------------------------------------

//Перебор объекта

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;
// const keys = Object.keys(feedback); // Object.keys возвразает массив ключей
// console.log(keys);

// for (const key of keys) {
//   // перебор ключей объекта
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }
// console.log('totalFeedback:', totalFeedback);

const values = Object.values(feedback); // возвращает массив значений
console.log(values);

for (const value of values) {
  console.log(value);
  totalFeedback += value;
}
console.log('totalFeedback:', totalFeedback);

//---------------------------------------------------

// Работа с коллекцией

const friends = [
  { name: 'Mango', online: false }, // Массив ОБЪЕКТОВ
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];
console.table(friends);

for (const friend of friends) {
  console.log(friend.name);

  friend.newprop = 5;
}
console.table(friends);

//---------------------------------------------------
// Ищем друга по имени
const findFriendByName = function (allFriends, name) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === name) {
      return 'Есть имя';
    }
  }
  return 'Нет имени';
};
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

//---------------------------------------------------
//Получаем имена всех друзей

const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends));

//---------------------------------------------------
// Получить друзей кто онлайн

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const OfflineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);
    if (!friend.online) {
      // Не онлайн, не true т.е. false
      OfflineFriends.push(friend);
    }
  }
  return OfflineFriends;
};

console.log(getOfflineFriends(friends));
//---------------------------------------------------
// количество значений

const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100,
};

console.log(Object.keys(x).length); //4
//---------------------------------------------------
// Корзина товаров.

const cart = {
  items: [],
  getItems() {},
  add(product) {},
  remove(productName) {},
  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {}, // увеличить кол тов в корзине
  decreaseQuantity(productName) {}, // уменьшить кол тов в корзине
};

// console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 50 });
cart.add({ name: 'lemon', price: 70 });
cart.add({ name: 'straawberry', price: 110 });

// console.table(cart.getItems());
