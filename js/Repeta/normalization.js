// --------------------------------------------------------------------------------------------
// Нормаллизация методом toLowCase()

// const brand = 'Samsung';
// const inDb = 'samsung';
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

// Отрезать часть слова

// let brand = 'sUMSUNG';
// console.log(brand[4]); //выделит только одну букву с индексом 4 - начинается с 0
// brand = console.log(brand[0] + brand.slice(1).toLowerCase());

// --------------------------------------------------------------------------------------------
// Поиск в строке методом includes()

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));
