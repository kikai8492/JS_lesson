function add(a, b) {
  return a + b;
}
// function add(a, b) {
//   return a + b + 1;
// }
answer = add(2, 3);
console.log(answer);

const multiply = function (a, b) {
  return a * b;
};

let result = multiply(3, 3);
console.log(result);

const person = {
  name: `kikai`,
  sayHi: function () {
    return `hi`;
  },
};
console.log(person.sayHi());

sayHi = (name, age) => {
  return `hi ${name},i am ${age} years old`;
};
console.log(sayHi(`kikai`, 21));

let sum = (...nums) => {
  let total = 0;
  for (num of nums) {
    total = total + num;
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

let add1 = (a, b, c) => {
  return a + b + c;
};

console.log(add1(1, 2, 3));

let subtract = (callback) => {
  callback();
};

subtract(() => {
  console.log(`hello`);
});
