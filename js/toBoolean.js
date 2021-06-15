// ---TO BOOLEAN---

// любое строчное значение К Boolean
let value = 'qwerty'

// 1й способ конструктора boolean
let toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)
console.log(`тип данных ${value}, через !!: `, typeof toBoolean)

//---------------------------------------------------------------------

// любое строчное число К Boolean
value = '15'

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)
console.log(`тип данных ${value}, через !!: `, typeof toBoolean)

//---------------------------------------------------------------------

// Пустая строка К Boolean
value = ''

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`Пустая строка ${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных пустой строки ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`Пустая строка ${value}, через !!: `, toBoolean)
console.log(`тип данных пустой строки ${value}, через !!: `, typeof toBoolean)

//---------------------------------------------------------------------

// Строка с пробелом К Boolean
value = ' '

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`Строка с пробелом ${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных строки с пробелом ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`Строка с пробелом ${value}, через !!: `, toBoolean)
console.log(`тип данных строки с пробелом ${value}, через !!: `, typeof toBoolean)

//---------------------------------------------------------------------

// Число К Boolean
value = 0

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`Число ${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных числа ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`Число ${value}, через !!: `, toBoolean)
console.log(`тип данных числа ${value}, через !!: `, typeof toBoolean)

value = 1

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`Число ${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных числа ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`Число ${value}, через !!: `, toBoolean)
console.log(`тип данных числа ${value}, через !!: `, typeof toBoolean)

//---------------------------------------------------------------------

// NaN К Boolean
value = NaN

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`Число ${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`Число ${value}, через !!: `, toBoolean)
console.log(`тип данных ${value}, через !!: `, typeof toBoolean)

//---------------------------------------------------------------------

// Infinity К Boolean
value = Infinity

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`Число ${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`Число ${value}, через !!: `, toBoolean)
console.log(`тип данных ${value}, через !!: `, typeof toBoolean)

//---------------------------------------------------------------------

// Undefined К Boolean
value = undefined

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`Число ${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных числа ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`Число ${value}, через !!: `, toBoolean)
console.log(`тип данных числа ${value}, через !!: `, typeof toBoolean)

//---------------------------------------------------------------------

// null К Boolean
value = null

// 1й способ конструктора boolean
toBoolean = Boolean(value)
console.log(`Число ${value}, через конструктор Boolean(): `, toBoolean)
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean)

// 2й способ через двойное отрицание
toBoolean = !!value
console.log(`${value}, через !!: `, toBoolean)
console.log(`тип данных ${value}, через !!: `, typeof toBoolean)

