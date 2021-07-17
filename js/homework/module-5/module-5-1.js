// конструктор
function Constructor(param1 = 1, param2 = 0) {
  this.prop1 = param1;
  this.prop2 = param2;

  this.method1 = function () {
    console.log(this.prop1);
  };
}

const newObj = new Constructor('my param');
console.log(newObj);
const newObj2 = new Constructor('my param1', 'my param2');
console.log(newObj2);
const newObj3 = new Constructor();
console.log(newObj3);
newObj3.method1();

console.dir(Constructor); // будет давать по наследству доступ к своим методам по ссылке

console.log(Constructor.prototype);
Constructor.prototype.method2 = function () {
  //
  console.log(this.method2);
};

// Классы
class Const2 {
  Constructor(param1 = 1, param2 = 0) {
    this.prop1 = param1;
    this.prop2 = param2;

    method777 = function () {
      console.log(this.method777);
    };

    method888 = function () {
      console.log(this.method888);
    };

    method999 = function () {
      console.log(this.method999);
    };
  }
}

const classObj = new Const2();
console.log(classObj);

// examples

class User {
  constructor(login, pass) {
    this._login = login; // добавлено нижнее подчеркивание значит для свойства добавлен геттер и сеттр которые занимавют по половинке ячейки памяти
    this._pass = pass;
    this.name = 'user';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.balance = 0;
  }

  // метод

  updateBalance(value = 0) {
    this.balance += value;
  }

  showLogin() {
    console.log(this.login);
  }

  updateLogin(value) {
    if (this.value + value < 0) {
      return alert('недостаточно средств на счету');
    }
    return (this.login = value);
  }

  // альтернатива таких методов - это геттер и сеттер

  get login() {
    return this._login;
  }
  set login(newLogin) {
    this._login = newLogin;
  }
  get pass() {
    return this._pass;
  }
  set pass(newPass) {
    return (this._pass = newPass);
  }
}

//методы изменения свойств объекта пользователя пос ле регистрации

// в момент регистрации создаем объект нового пользователя
const newUser = new User('login', 'password');
console.log(newUser);

// зайдя в ЛК после регистрации изменяет значенния логина и пароля
// для отображения текущего значен7ия мы вызовем геттеры логина и пароля
console.log(newUser.login);
console.log(newUser.pass);
// для изменения вызовем сеттер
newUser.login = 'my new login';
console.log(newUser.login);
newUser.pass = 'my new password';
console.log(newUser.pass);

newUser.updateBalance(100);
newUser.updateBalance(-10);
newUser.updateBalance(-10);

console.log(newUser);
