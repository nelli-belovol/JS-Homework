// ЧИСЛО К СТРОКЕ
let value = 0;

// 1й способ конструктора TO STRING
let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ конкатенации
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// ЧИСЛО К СТРОКЕ
value = 1;

// 1й способ конструктора TO STRING
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ конкатенации
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// Значние бесконечности К СТРОКЕ
value = Infinity;

// 1й способ конструктора TO STRING
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ конкатенации
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// -------------------------------------------------------------------------

// Не число К СТРОКЕ
value = NaN;

// 1й способ конструктора TO STRING
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ конкатенации
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// -------------------------------------------------------------------------

// БУЛЕВОЕ (логическое) true к СТРОКЕ
value = true;

// 1й способ конструктора TO STRING
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ конкатенации
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// БУЛЕВОЕ (логическое) false к СТРОКЕ
value = false;

// 1й способ конструктора TO STRING
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ конкатенации
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// -------------------------------------------------------------------------

// undefined к СТРОКЕ
value = undefined;

// 1й способ конструктора TO STRING
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ конкатенации
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// -------------------------------------------------------------------------

// null к СТРОКЕ
value = null;

// 1й способ конструктора TO STRING
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ конкатенации
toString = value + '';
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

//--------------------------------------------------------------------------------------------------

// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// function getSubstring(string, length) {
//     const substring = string.slice (0, length) ; // Change this line

//     return substring;
//   }

// Ожидается объявление 'Function Declaration'
// Функции присвоено имя 'getSubstring'
// Функция 'getSubstring' имеет два параметра: 1-й - 'string', 2-й -'length'
// Вызов функции getSubstring('Hello world', 3) возвращает 'Hel'
// Вызов функции getSubstring('Hello world', 5) возвращает 'Hello'
// Вызов функции getSubstring('Hello world', 8) возвращает 'Hello wo'
// Вызов функции getSubstring('Hello world', 11) возвращает 'Hello world'
// Вызов функции getSubstring('Hello world', 0) возвращает ''

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}
