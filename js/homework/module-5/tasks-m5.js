// Створити простенький калькулятор за допомогою класу.

// Цей клас буде мати такі методи:

// Передати в метод №7 колбек ф-ю що підносить числа в степінь
// Написати всі методи і перевірити чи вони працюють

class Calculator {
  constructor(firstNumber = 0, secondNumber = 0) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
  }
  addition() {
    this.mathRezult(this.firstNumber + this.secondNumber);
  }
  subtraction() {
    this.mathRezult(this.firstNumber - this.secondNumber);
  }
  multiplicationaction() {
    this.mathRezult(this.firstNumber * this.secondNumber);
  }
  divison() {
    this.mathRezult(this.firstNumber / this.secondNumber);
  }
  mathRezult(rezult) {
    console.log(`result = ${rezult}`);
  }

  addMethod(callback) {
    this.mathRezult(callback(this.firstNumber, this.secondNumber));
  }
}
// callback функция
function mathPow(num1, num2) {
  return Math.pow(num1, num2);
}
// создаем экземпляр калькулятора
// const calculator = new Calculator(3, 2);
// calculator.addition();
// calculator.subtraction();
// calculator.multiplicationaction();
// calculator.divison();
// calculator.addMethod(mathPow);

//--------------------------------------------------------------
// Створити класи Library та Book

// Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:

// Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена
// Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

// Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// author
// title
// price
// totalPages
// currentPage
// Також цей клас буде мати такі методи:

// Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати деструктуризацію обєкта

class Book {
  constructor({ ...book } = {}) {
    const { author, title, price, totalPages, currentPage } = book;
    this.author = author;
    this.title = title;
    this.price = price;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
  }

  read(quantityPagesRead) {
    return (this.currentPage += quantityPagesRead);
  }

  get bookProgres() {
    return (this.currentPage = (this.currentPage * 100) / this.totalPages);
  }

  set bookProgres(bookProgres) {
    this.currentPage = (this.currentPage * this.totalPages) / 100;
    return bookProgres;
  }
}

const superBook = new Book({ author: 'author', title: 'title', price: 10, totalPages: 390, currentPage: 390 });
console.log(superBook);
console.log(superBook.price);
console.log(superBook.currentPage);
// console.log(superBook.read(5));
// console.log(superBook.read(7));

// console.log(superBook.bookProgres);
// console.log(superBook.bookProgres);

const novellaNew = new Book({ author: 'author-2', title: 'title-2', price: 15, totalPages: 450, currentPage: 450 });

class Library {
  constructor(favoriteBooks = [], books = []) {
    this.favoriteBooks = favoriteBooks;
    this.books = books;
  }

  // Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена

  buy(newBook) {
    if (this.books.includes(newBook)) {
      return console.log(`This book is already there!`);
    } else {
      return this.books.push(newBook);
    }
  }

  // Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
  sell(titleBook) {
    for (const book of this.books) {
      if (book.title === titleBook) {
        const idx = this.books.indexOf(book);
        this.books.splice(idx, 1);
      }
      return console.log(`${titleBook} was removed`);
    }
  }

  // Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
  addToFavourite(titleBook) {
    for (const book of this.books) {
      if (book.title === titleBook) {
        this.favoriteBooks.push(book);
      }
      return;
    }
  }

  // Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених

  removeFromFavourite(titleBook) {
    for (const favoriteBook of this.favoriteBooks) {
      if (favoriteBook.title === titleBook) {
        const idx = this.favoriteBooks.indexOf(favoriteBook);
        this.favoriteBooks.splice(idx, 1);
      }
      return console.log(`${titleBook} was removed`);
    }
  }

  // Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
  get сountFavouriteBooks() {
    return console.log(this.favoriteBooks.length);
  }

  //???????? Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
  get finishedBook() {
    const finishedBooks = [];
    for (const book of this.books) {
      if (book.currentPage === book.totalPages) {
        finishedBooks.push(book);
      }
    }
    return finishedBooks;
  }

  // Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

  totalCost() {
    let totalPrice = 0;
    for (const book of this.books) {
      totalPrice += book.price;
    }
    return totalPrice;
  }
}

const newLibrary = new Library();
console.log(newLibrary.books);
// console.log(newLibrary.books);
newLibrary.buy(novellaNew);
newLibrary.buy(superBook);
console.log(newLibrary.books);

newLibrary.addToFavourite('title');
newLibrary.addToFavourite('title-2');
console.log(newLibrary.favoriteBooks);

// newLibrary.sell('title-2');
newLibrary.сountFavouriteBooks;
console.log(newLibrary.books);
console.log(newLibrary.finishedBook);
newLibrary.totalCost();
