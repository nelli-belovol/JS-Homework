// Данно масив з обєктами. Виконати всі поставлені задачі використовуючи функціональні методи масивів

// отримати масив вчених що народилися в 19 ст
// знайти суму років скільки прожили всі вченні
// Відсортувати вчених по алфавіту
// Відсортувати вчених по кількості прожитих років
// Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
// Знайти вченого який народився найпізніше.
// Знайти рік народження Albert Einstein
// знайти вчених прізвище яких починається на літеру С
// Видалити з масива всіх вчених імя яких починається на A
// Знайти вченого який прожив найбільше і вченого який прожив найменьше
// Знайти вчених в яких співпадають перші літери імені і прізвища
// Дізнатися чи всі вченні працювали в 19 столітті
const arr = [
  { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
  { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
  { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
  { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
  { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
  { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
  { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
  { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
  { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
  { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
  { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
  { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 12 },
];

// отримати масив вчених що народилися в 19 ст
const getByBorn = arr => arr.filter(({ born }) => born >= 1800 && born < 1900);
console.log(getByBorn(arr));

// знайти суму років скільки прожили всі вченні
function getTotalAge(arr) {
  return arr.reduce((total, { born, dead }) => (total += dead - born), 0);
}
console.log(getTotalAge(arr));

// Відсортувати вчених по алфавіту
function sortByName(arr) {
  return [...arr].sort((a, z) => {
    let fullNameA = `${a.surname} ${a.name}`;
    let fullNameZ = `${z.surname} ${z.name}`;

    return fullNameA.localeCompare(fullNameZ);
  });
}
console.log(sortByName(arr));

// Відсортувати вчених по кількості прожитих років
function sortByAge(arr) {
  return [...arr].sort((a, z) => a.dead - a.born - (z.dead - z.born));
}
console.log(sortByAge(arr));

// Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
const getByBornFilter = arr => {
  return arr.filter(({ born }) => born < 1400 || born >= 1700);
};
console.log(getByBornFilter(arr));

// Знайти вченого який народився найпізніше.
function getMaxBorn(arr) {
  return [...arr].sort((firstWriter, secondWriter) => secondWriter.born - firstWriter.born)[0];
}
console.log(getMaxBorn(arr));

// Знайти рік народження Albert Einstein
function getWriterBorn(arr, name) {
  return `Год рождения ${name}: ${arr.find(obj => `${obj.name} ${obj.surname}` === name).born}`;
}
console.log(getWriterBorn(arr, 'Albert Einstein'));

// знайти вчених прізвище яких починається на літеру С
const getWriterByChar = (arr, char) => {
  return [...arr].filter(obj => obj.surname[0] === char);
};
console.log(getWriterByChar(arr, 'C'));

// Видалити з масива всіх вчених імя яких починається на A
const getWriterWithoutChar = (arr, char) => {
  return [...arr].filter(obj => obj.name[0] !== char);
};
console.log(getWriterWithoutChar(arr, 'A'));

//именно удалить
function delByChar(arr, char) {
  arr.forEach((obj, idx, arr) => {
    if (obj.name[0] === char) {
      console.log(arr[idx]);
      arr.splice(idx, 1);
    }
  });
  return arr;
}

console.log(delByChar(arr, 'A'));

// Знайти вченого який прожив найбільше і вченого який прожив найменьше
function getWriterByAge(arr) {
  const ages = arr.map(obj => obj.dead - obj.born);
  const maxAge = Math.max(...ages);
  const minAge = Math.min(...ages);

  const obj1 = arr.find(obj => obj.dead - obj.born === maxAge);
  let name1 = `${obj1.name} ${obj1.surname}`;

  const obj2 = arr.find(obj => obj.dead - obj.born === minAge);
  let name2 = `${obj2.name} ${obj2.surname} `;

  return `Максимальный возраст у ${name1}: ${maxAge} лет, а минимальный у ${name2}: ${minAge}`;
}
console.log(getWriterByAge(arr));

// альтернатива
function getWriterByAge2(arr, callback) {
  const minObj = callback(arr)[0];
  const maxObj = callback(arr)[arr.length - 1];
  //   console.log(maxObj.name);
  return `Min age = ${minObj.dead - minObj.born} ${minObj.name} ${minObj.surname}, Max age = ${
    maxObj.dead - maxObj.born
  }  ${maxObj.name} ${maxObj.surname}`;
}

console.log(getWriterByAge2(arr, sortByAge));

// Знайти вчених в яких співпадають перші літери імені і прізвища
const getRepeatChar = arr => {
  return arr.filter(({ name, surname }) => name[0] === surname[0]);
};

console.log(getRepeatChar(arr));

// Дізнатися чи всі вченні працювали в 19 столітті
const isWork19 = arr => arr.every(({ born, dead }) => (born < 1900 || dead < 1900) && (born >= 1800 || dead >= 1800));
console.log(isWork19(arr));
