// задачи

function MainUser(name = 'user') {
  this.name = name;
}
console.dir(MainUser);
console.log(MainUser.prototype);
MainUser.prototype.showName = function () {
  console.log(this.name);
};

const mainUser = new MainUser();
mainUser.showName();

// Наследуемый коснтруктор

function CurrentUser(age, name) {
  // для привязки к исходному конструктору
  MainUser.call(this, name);
  this.age = age;
}
CurrentUser.prototype = Object.create(MainUser.prototype);
CurrentUser.prototype.updateAge = function () {
  return (this.age += 1);
};

const currentUser = new CurrentUser(31, 'Nelli');
console.log(currentUser);
console.dir(currentUser);
