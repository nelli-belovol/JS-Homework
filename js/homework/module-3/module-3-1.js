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

// Destructuring _ способ достать ключ или значение

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
