// ЦИКЛ For повторять один и тот же кусок кода

// for (инициализация; условие прекращения цикла; пост - выражение){
//     // тело цикла
// }

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// console.log('qwr');

// Общая сумма зарплат работников. Количество работников хранится в переменной employees. Зп каждого работника это случ число от 500 до 5000. Записать сумму в переменную totalSalary и вывести в консоль.

// сделать переменные
const minSalary = 500;
const maxSalary = 5000;
const employees = 5;
let totalSalary = 0;
// перебрать работников в цикле
for (let i = 1; i < employees; i += 1) {
  const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary); //сгенерить случайное ЗП
  console.log(`ЗП работника номер ${i} - ${salary}`);
  totalSalary += salary; //прибавить к тоталу
}
console.log(totalSalary); //лог
