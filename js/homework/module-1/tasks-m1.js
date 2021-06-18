//Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним. Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// let birth = prompt('Введите Ваш год рождения');
// //(условие) ? (если TRUE) : (если FALSE) - тернарный оператор
// let year = birth % 4 === 0 ? console.log('Високосный год') : console.log('Невисокосный год');

//Написати програму де компютер загадає число від 1 до 10 і запропонує користувачу вгадати його Користувач вводить свій варіант і отримує результат (Виграв чи ні) Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли, компютер загадав (тут варіант компютера)"

// let compNumber = Math.round(Math.random() * (10 - 1) + 1);
// // console.log(compNumber);
// let myNumber = prompt('Введите число');
// if (myNumber == compNumber) {
//   console.log(`Вітаю ви вгадали число ${compNumber}!`);
// } else {
//   console.log(`Ви програли, компютер загадав ${compNumber}`);
// }

//Написати програму яка буде знаходити суму, різницю, добуток, частрку двох чисел Користувач вводить 2 числа потім вводить знак операції і отримує результат в форматі "Сума чисел a i b = результат" (такий шаблон для кожної відповіді)
// let value1 = Number(prompt('Введите первое число'));
// let value2 = Number(prompt('Введите второе число'));
// let operator = prompt('Введите знак действия (+, -, *, /)');
// let result;

// switch (operator) {
//   case '+':
//     result = value1 + value2;
//     console.log(result);
//     console.log(`Результат суммы чисел = ${result}`);
//     break;
//   case '-':
//     result = value1 - value2;
//     console.log(`Результат разницы чисел = ${result}`);
//     break;
//   case '*':
//     result = value1 * value2;
//     console.log(`Результат умножения чисел = ${result}`);
//     break;
//   case '/':
//     result = value1 / value2;
//     console.log(`Результат деления чисел = ${result}`);
//     break;

//   default:
//     console.log('Введен некорректный оператор');
// }

// let message;
// let value1;
// let value2;
// let operator;
// let result;

// value1 = Number(prompt('Введите первое число'));
// while (isNaN(value1)) {
//   value1 = prompt('Вы ввели не число. Введите первое число');
//   if (value1 === null) {
//     value1 = prompt('Вы ввели не число. Введите первое число');
//   }
// }

// value2 = Number(prompt('Введите второе число'));
// while (isNaN(value2)) {
//   value2 = prompt('Вы ввели не число. Введите второе число');
// }

// operator = prompt('Введите знак действия (+, -, *, /');
// while (operator !== '+' || '-' || '*' || '/') {
//   operator = prompt('Введен некорректный знак действия. Введите знак действия (+, -, *, /)');
// }

// switch (operator) {
//   case '+':
//     result = value1 + value2;
//     console.log(result);
//     console.log(`Результат суммы чисел = ${result}`);
//     break;
//   case '-':
//     result = value1 - value2;
//     console.log(`Результат разницы чисел = ${result}`);
//     break;
//   case '*':
//     result = value1 * value2;
//     console.log(`Результат умножения чисел = ${result}`);
//     break;
//   case '/':
//     result = value1 / value2;
//     console.log(`Результат деления чисел = ${result}`);
//     break;

//   default:
//     console.log('...');
// }

// let message;
// let value1;
// let value2;
// let operator;
// let result;
// value1 = Number(prompt('Введите первое число'));
// value2 = Number(prompt('Введите второе число'));
// operator = prompt('Введите знак действия (+, -, *, /)');

// while (isNaN(value1)) {
//   value1 = prompt('Вы ввели не число. Введите первое число');
//   break;
// }

// while (isNaN(value2)) {
//   value2 = prompt('Вы ввели не число. Введите второе число');
//   break;
// }

// while (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
//   switch (operator) {
//     case '+':
//       result = value1 + value2;
//       console.log(result);
//       console.log(`Результат суммы чисел = ${result}`);
//       break;
//     case '-':
//       result = value1 - value2;
//       console.log(`Результат разницы чисел = ${result}`);
//       break;
//     case '*':
//       result = value1 * value2;
//       console.log(`Результат умножения чисел = ${result}`);
//       break;
//     case '/':
//       result = value1 / value2;
//       console.log(`Результат деления чисел = ${result}`);
//       break;
//   }
//   operator = prompt('Введен некорректный знак действия. Введите знак действия (+, -, *, /)');
// }

// Написати програму яка буде переводити температуру з цельсія в фаренгейти, або навпаки з фаренгейта в цельсії
// let degree = prompt('Введите число');
// let scale = prompt('Введите шкалу: F / C');
// let result;

// switch (scale) {
//   case 'F':
//     result = ((degree - 32) * 5) / 9;
//     console.log(Math.round(result));
//     break;
//   case 'C':
//     result = degree * (9 / 5) + 32;
//     console.log(Math.round(result));
//     break;
//   default:
//     console.log('Значение не определено');
// }

//Написати програму яка перевіряє чи введене число потрапляє в діапазон від 55 до 99 включно

// let number = 99;
// if (Number(number) >= 55 && Number(number) <= 99) {
//   console.log('Попадает в диапазон');
// } else {
//   console.log('Не попадает в диапазон');
// }

//Написати програму де користувач вводить 3 числа, після вводу всіх трьох чисел йому на екрані показується
// найбільше з них. Додатково перевіряти чи це взагалі числа

// const value1 = Number(prompt('Введите 1ое число'));
// const value2 = Number(prompt('Введите 2ое число'));
// const value3 = Number(prompt('Введите 3ье число'));
// let maxValue;
// const message = 'Некорректные данные';
// if (isNaN(value1) || isNaN(value2) || isNaN(value3)) {
//   alert(message);
// } else {
//   maxValue = Math.max(value1, value2, value3);
//   console.log(maxValue);
// }

//function isNumberInRange(start, end, number) {
//     const isInRange = number >= start && number <= end ; // Change this line

//     return isInRange;
//   }

// Написати програму яка переведе введену оцінку студента до болонського формату 89 - 100 це A 75 - 88 це В
// 60 - 74 це С 45 - 59 це D 20 - 44 це Е до 20 це F

// const grade = 1;
// let gradeBol;
// if (grade >= 1 && grade <= 19) {
//   gradeBol = 'F';
// } else if (grade >= 20 && grade <= 44) {
//   gradeBol = 'E';
// } else if (grade >= 45 && grade <= 59) {
//   gradeBol = 'D';
// } else if (grade >= 60 && grade <= 74) {
//   gradeBol = 'C';
// } else if (grade >= 75 && grade <= 88) {
//   gradeBol = 'B';
// } else if (grade >= 89 && grade <= 100) {
//   gradeBol = 'A';
// } else {
//   console.log('Нет такой оценки');
// }
// console.log(gradeBol);
