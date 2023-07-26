function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5)); // 6
console.log(add(12, 53)); //65

function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

let userName = 'Max';

function greetUser() {
  console.log('hi' + userName);
}

userName = 'Aamer';

greetUser();
