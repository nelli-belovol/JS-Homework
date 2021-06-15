console.log('primitives')

// STRING
let stringData = 'string data'
console.log(stringData)
// typeof - оператор определения типа данных
console.log(typeof stringData)

stringData = ''
console.log(stringData)
console.log(typeof stringData)

stringData = ' '
console.log(stringData)
console.log(typeof stringData)

// NUMBER
let number = 1
console.log(number)
console.log(typeof number)

number = 2e53 // самое большое число в программировании
console.log(number)
console.log(typeof number)

number = Infinity // Бесконечность
console.log(number)
console.log(typeof number)

number = NaN // NaN - Not a Number
console.log(number)
console.log(typeof number)

// BOOLEAN true || false
let isOnline = true
console.log(isOnline)
console.log(typeof isOnline)

isOnline = false
console.log(isOnline)
console.log(typeof isOnline)

// UNDEFINED
let message
console.log(message) // undefined
console.log(typeof message)

// NULL
let user = null // ожидаем какой-то объект
console.log(user)
console.log(typeof user) // тип данных object - специально добавленная ошибка JS
