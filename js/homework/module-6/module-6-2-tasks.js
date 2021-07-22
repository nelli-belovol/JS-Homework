const numbers = [1, 2, 3, 4, 5, 6, 7, 6, 5, 41, 1];
const words = ['hello', 'js', 'html', 'js', 'node'];

function getUniqueValues(arr) {
  const newArr = [];
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!newArr.includes(item)) {
      newArr.includes(item);
    }
  }
  return newArr;
}
getUniqueValues(numbers);

// Второй вариат через filter
function getUnVal(arr) {
  return arr.filter((el, idx, array) => array.indexOf(el) === idx);
}
// console.log(getUnVal(numbers));

// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи
// nonUniqueElements([1, 2, 3, 1, 3]); // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]); // []
// nonUniqueElements([5, 5, 5, 5, 5]); // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]); // [10, 9, 10, 10, 9]

function deleteUniqueValues(arr) {
  console.log(arr);
  const x = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    console.log(x[item]);
    if (x[item] === undefined) {
      x[item] = 0;
    }
    x[item] += 1;
    // [hello: 1, js: 2, html: 1, node: 1]
  }
  //   console.log(typeof x, x);
  console.log(x);
  const result = [];
  for (let el of arr) {
    if (x[el] > 1) {
      result.push(el);
    }
  }
  return result;
}

console.log(deleteUniqueValues(numbers));
console.log(deleteUniqueValues(words));

// через функциональный метод last indexOF

function delUnVal(arr) {
  console.log(arr);
  return arr.filter((el, idx, array) => {
    // console.log(`currentIdx: ${array.indexOf(el)}- lastIndexOf: ${array.lastIndexOf(el)}`);

    let firstIdx = array.indexOf(el);
    let lastIdx = array.lastIndexOf(el);
    let condition = firstIdx !== lastIdx;
    //   let condition = (!(firstIdx === idx) || !(array.lastIndexOf(el) === idx) && true;     ???????????
    // let condition = array.indexOf(el) === array.lastIndexOf(el); // получить только уникальные

    // console.log(condition);
    return condition;
  });
}

console.log(delUnVal(numbers));

// та же функция с короткой записью
const deUn = arr => arr.filter((el, idx, array) => array.indexOf(el) !== array.lastIndexOf(el));
console.log(deUn(numbers));

//Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.
// median([1, 2, 3, 4, 5]) // 3
// median([3, 6, 10, 15, 20, 99]) // 12.5

// const getMiddleValue  = (arr) =>  {
//     arr.reduce((total + el) =>  total + el, 0)
// }
//  console.log(getMiddleValue(numbers));

//
// отримати масив вчених що народилися в 19 ст 1800 -1899
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
  { name: 'Pier', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
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

// 1
function getScByBorn(arr) {
  console.log(arr);
  return arr.filter(el => {
    const { born } = el;
    console.log(born, born >= 1800 && born < 1900);
    if (born >= 1800 && born < 1900) {
      return el;
    }
  });
}

console.log(getUniqueValues(arr));

// короткая запись

const getByBorn = arr => arr.filter(({ born }) => born >= 1800 && born < 1900);
console.log(getByBorn(arr));

//2
function getTotalAge(arr) {
  console.log(arr);
  return arr.reduce((total, { born, dead }) => total + (dead - born), 0);
}

console.log(getTotalAge(arr));

// 3

function sortByName(arr) {
  return [...arr].sort((a, z) => {
    console.log(`${a.surname} ${a.name}`); // сконкатенировали вместе фамилию и имя в одну строку чтобы потом сранивать по каждой букве в строке
    let fullNameA = `${a.surname} ${a.name}`;
    let fullNameZ = `${z.surname} ${z.name}`;

    return fullNameA.localeCompare(fullNameZ); // по полному имени
  });
}

console.log(sortByName(arr));
console.log(arr);

// 4
