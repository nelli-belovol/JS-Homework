//Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.
//capitalize('the quick brown fox') // 'The Quick Brown Fox '

const stringToUpperCase = function (string) {
  return string.toUpperCase();
};
console.log(stringToUpperCase('the quick brown fox'));

//------------------------------------------------------------------------------------------------------------

// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті
// countVowels('the quick brown fox') // 5

const countVowels = function (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let total = 0;
  string = string.split('');

  for (const value of string) {
    if (vowels.includes(value)) {
      total += 1;
    }
  }
  return total;
};
console.log(countVowels('the quick brown fox'));

//------------------------------------------------------------------------------------------------------------

//Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і велечину базового шрифта ("20px") і вертає конвертований розмір в пікселях
let size = 0;
const returnSize = (remSize, pxSize) => {
  size = remSize * pxSize;
  return size;
};
returnSize(2, 20);
console.log(`Размер ${size} px`);

//------------------------------------------------------------------------------------------------------------

//Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах

const tempCalc = degreeC => degreeC * (9 / 5) + 32;
console.log(`Температура в Фаренгейтах ${tempCalc(4)}`);

//------------------------------------------------------------------------------------------------------------

//Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки. Результатом її роботи буде вік перевединий на людський (1 рік собаки це 7 років в людини)

function calculateDogAge(DogAge) {
  const result = DogAge * 7;
  let message;
  return (message = `Человеческий возраст собаки ${result}`);
}
console.log(calculateDogAge(6));

//------------------------------------------------------------------------------------------------------------

// Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір в форматі hex
const rgbToHex = function (r, g, b) {
  let h = r.toString(16).toUpperCase();
  let e = g.toString(16).toUpperCase();
  let x = b.toString(16).toUpperCase();

  if (r < 16) {
    h = '' + '0' + r.toString(16).toUpperCase();
    console.log(h);
  }
  if (g < 16) {
    e = '' + '0' + g.toString(16).toUpperCase();
    console.log(e);
  }
  if (b < 16) {
    x = '' + '0' + b.toString(16).toUpperCase();
    console.log(x);
  }
  return console.log(`#${h}${e}${x}`);
};

rgbToHex(200, 15, 10);

//------------------------------------------------------------------------------------------------------------

// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи
function nonUniqueElements(array) {
  const repeat = [];

  for (let value of array) {
    console.log(repeat[value]);
    if (repeat[value] === undefined) {
      repeat[value] = 0;
    }
    repeat[value] = repeat[value] + 1;
  }
  console.log('Массив повторов', repeat);
  const result = [];
  for (let el of array) {
    if (repeat[el] > 1) {
      result.push(el);
    }
  }
  return result;
}

console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]); // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

//Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.
// median([1, 2, 3, 4, 5]) // 3
// median([3, 6, 10, 15, 20, 99]) // 12.5

function findToMedian(numbers) {
  if (numbers.length % 2 !== 0) {
    return numbers[Number.parseInt(numbers.length / 2)];
  }
  return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
}

console.log(findToMedian([1, 2, 3, 4, 5]));
console.log(findToMedian([3, 6, 10, 15, 20, 99]));
