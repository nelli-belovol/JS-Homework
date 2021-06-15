// ---TO NUMBER---

// любое строчное значение К ЧИСЛУ
let value = "qwerty";

// 1й способ конструктора TO NUMBER
let toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber)

// 2й способ через унарный +
toNumber = +value; // унарный плюс
console.log(`${value}, через унарный +: `, toNumber)
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber)

// любое строчное значение К ЧИСЛУ
let age = "пятнадцать";

// 1й способ конструктора TO NUMBER
toNumber = Number(age)
console.log(`${age}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${age}, через конструктор Number(): `, typeof toNumber)

// 2й способ через унарный +
toNumber = +age; // унарный плюс
console.log(`${age}, через унарный +: `, toNumber)
console.log(`тип данных ${age}, через унарный +: `, typeof toNumber)

//---------------------------------------------------------------------

// строчное число К ЧИСЛУ
value = "123";

// 1й способ конструктора TO NUMBER
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber)

// 2й способ через унарный +
toNumber = +value; // унарный плюс
console.log(`${value}, через унарный +: `, toNumber)
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber)

//---------------------------------------------------------------------

// пустая строка К ЧИСЛУ
value = "";

// 1й способ конструктора TO NUMBER
toNumber = Number(value)
console.log(`пустая строка ${value}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber) // становится 0

// 2й способ через унарный +
toNumber = +value; // унарный плюс
console.log(`пустая строка ${value}, через унарный +: `, toNumber)
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber) // становится 0

//---------------------------------------------------------------------

// строка с пробелом (не пустая) К ЧИСЛУ
value = " ";

// 1й способ конструктора TO NUMBER
toNumber = Number(value)
console.log(`строка с пробелом ${value}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber) // становится 0

// 2й способ через унарный +
toNumber = +value; // унарный плюс
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber)
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber) // становится 0

// -------------------------------------------------------------------------

// БУЛЕВОЕ (логическое) true к ЧИСЛУ
value = true

// 1й способ конструктора TO NUMBER
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber)

// 2й способ через унарный +
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber)
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber)

// БУЛЕВОЕ (логическое) false к ЧИСЛУ
value = false

// 1й способ конструктора TO NUMBER
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber)

// 2й способ через унарный +
toNumber = +value;
console.log(`${value}, через через унарный +: `, toNumber)
console.log(`тип данных ${value}, через через унарный +: `, typeof toNumber)

// -------------------------------------------------------------------------

// Undefined к ЧИСЛУ
value = undefined

// 1й способ конструктора TO NUMBER
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber)

// 2й способ через унарный +
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber)
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber)

// -------------------------------------------------------------------------

// null к ЧИСЛУ
value = null

// 1й способ конструктора TO NUMBER
toNumber = Number(value)
console.log(`${value}, через конструктор Number(): `, toNumber)
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber) // станет из object'а нулем

// 2й способ через унарный +
toNumber = +value;
console.log(`${value}, через унарный +: `, toNumber)
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber) // станет из object'а нулем