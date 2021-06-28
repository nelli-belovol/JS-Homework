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

// SPREAD
