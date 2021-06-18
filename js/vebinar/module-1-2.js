// // isNAN() - проверка на нечисло -  НЕявное приведение типов

// let value;
// console.log(value, 'не число: ', isNaN(value));

// // не являются НЕ числом, т.е. они числа

// value = 1;
// console.log(value, 'не число: ', isNaN(value));

// value = 0;
// console.log(value, 'не число: ', isNaN(value));

// value = Infinity;
// console.log(value, 'не число: ', isNaN(value));

// value = null;
// console.log(value, 'не число: ', isNaN(value));

// value = '';
// console.log(value, 'не число: ', isNaN(value));

// value = ' ';
// console.log(value, 'не число: ', isNaN(value));

// value = true;
// console.log(value, 'не число: ', isNaN(value));

// не являются числом

// value = NaN;
// console.log(value, 'не число: ', isNaN(value));

// value = 'Nelli';
// console.log(value, 'не число: ', isNaN(value));

// СТРОКИ

// console.log(typeof `object`, `object`);
// console.log(typeof 'string', 'string');
// console.log(typeof 'string', 'string');

// length
// position & index
// let mySrting = 'I love JavaScript!';
// console.log(mySrting);
// console.log(mySrting.length); // длина строки 17 символов
// console.log(mySrting[0]); // буква 'I'

//toLowerCase() & toUpperCase()
// console.log(mySrting.toLowerCase());

//indexOf() & includes()

// console.log(mySrting.indexOf('i')); // indexOf, скажи, в каком индексе лежит значение? - 14;
// console.log(mySrting.indexOf('d')); // -1, когда не нашел или мы ничего не передали

// console.log(mySrting.includes('i')); // возвращает true
// console.log(mySrting.includes('d')); // возвращает false
// console.log(mySrting.includes()); // возвращает false

// конкатенация примитивы и строки

// let name = 'Nelli';
// let lastName = 'Belovol';
// console.log(name, lastName);

// let fullName = name + ' ' + lastName; // старый способ c 2015 года используется шаблонная строка
// console.log(fullName);

// Приведение данных

//  к строке: String() || value + ""

// let myValue = true;
// console.log(myValue, typeof myValue);

// let result = String(myValue);
// console.log(result, typeof result);

// console.log(myValue, typeof myValue);
// result = myValue + '';
// console.log(result, typeof result);

// к числу: Number (value) || +value

// console.log(myValue, typeof myValue);
// result = Number(myValue); //  Хорошая практика, нужно использовать этот метод
// console.log(result, typeof result);

// console.log(myValue, typeof myValue);
// result = +myValue;
// console.log(result, typeof result);

// к булеану: Boolean (value) || !!value

// console.log(myValue, typeof myValue);
// myValue = 0;
// console.log(myValue, typeof myValue);

// result = Boolean(myValue);
// console.log(result, typeof result);

// falsy values
// console.log('empty string: ', Boolean());
// console.log('0: ', Boolean(0));
// console.log('NaN: ', Boolean(NaN));
// console.log('undefined: ', Boolean(undefined));
// console.log('null: ', Boolean(null));
// console.log('false: ', Boolean(false));

// Неявное приведение так же используется в ветвлениях

// ВЕТВЛЕНИЯ

// if() {} - одно условие
// if() {} else{} - одно условие и все остальное
// if() {} else if(){} else if(){} - множество условий
// if() {} else if(){} else if(){} else - множество условий и все остальное

// if (true) {
//   // приводится к булю
//   console.log('Условие выполнено');
// }

// let condition = 0;
// if (condition) {
//   // false - т.к. condition Не определен и выполняется неявное приведение к булю, а undefined - это false
//   console.log('Условие выполнено');
// } else {
//   console.log('Условие не выполнено');
// }

// console.log(condition);
// console.log(Boolean(condition));
// if (condition) {
//   console.log('Условие 1 выполнено');
// } else if (condition + 1) {
//   console.log('Условие 2 выполнено');
// }

// //  (условие) ? (если TRUE) : (если FALSE) - тернарный оператор
// condition = 0;
// console.log(condition);
// condition ? console.log('Условие выполнено') : console.log('Условие не выполнено');

// альтернатива
// if(условие) {если TRUE} else {если ELSE} - одно условие и все остальное

// У логического оператора && приоритет выше, чем у ||. Оператор И выполнится раньше чем ИЛИ

// SWITCH

// let day = prompt('enter the day');
// switch (day) {
//   case 'mon':
//   case 'tue':
//   case 'wed':
//   case 'thu':
//   case 'fri':
//     alert('workday');
//     break;

//   case 'sat':
//   case 'sun':
//     alert('holiday');
//     break;
//   default:
//     alert('Вы ввели ерунду');
// }

//

// let x = 0;
// while (x == 5) {
//   console.log('Hello');
// }

// do {
//     console.log("Hello");
//     while (x==5);
// }
// // for(){}
let i = 10;
for (let i = 0; i <= 15; i = i + 1) {
  console.log('итерация %{i}');
}

// let compNumber = Math.round(Math.random() * (10 - 1) + 1);
// // console.log(compNumber);
// let myNumber = prompt('Введите число');
// if (myNumber == compNumber) {
//   console.log(`Вітаю ви вгадали число ${compNumber}!`);
// } else {
//   console.log(`Ви програли, компютер загадав ${compNumber}`);
// }

// ФУНКЦИЯ

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    // Change this line
    message = 'Canceled by user!';
  } else if (ADMIN_PASSWORD === password) {
    // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
