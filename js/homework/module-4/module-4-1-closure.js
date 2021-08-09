// Замыкание (выносим локальные переменные из функции)

const makeChief = function (name) {
  function makeDish(dish) {
    console.log(`${name} make ${dish}`);
  }
  return makeDish;
};

const poly = makeChief('Poly');
poly('Рыба');

//
function createCounter() {
  //- createCounter - функция высшего порядка, потому что она возвращает 2 другие функции
  // лексическое окружение функции lexical environment
  let current = 0;

  function increment(value) {
    return (current += value);
  }

  function decrement(value) {
    if (current < 0) return;
    return (current -= value);
  }
  return { increment, decrement };
}

export default createCounter;

//Carring

function getPrice(discount, price) {
  return (price * (100 - parseInt(discount))) / 100;
}

console.log(getPrice('10%', 10));

// перепишем через каррирование

function getTotalPrice(discount) {
  return price => {
    return (price * (100 - parseInt(discount))) / 100;
  };
}
const discount10 = getTotalPrice('10%');
console.log(discount10);
discount10(10);
console.log(discount10(10));
