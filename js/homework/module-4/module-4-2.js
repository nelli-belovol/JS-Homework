import createCounter from './js/homework/module-4/module-4-1-closure.js';
console.log(createObject);
const counter1 = createCounter();
console.log(counter1);
console.dir(counter1);

increment.addEventListner('click', () => {
  let value = counter1.increment(1);
  current.textContent = value;
});

decrement.addEventListner('click', () => {
  let value = counter1.decrement(1);
  current.textContent = value;
});
