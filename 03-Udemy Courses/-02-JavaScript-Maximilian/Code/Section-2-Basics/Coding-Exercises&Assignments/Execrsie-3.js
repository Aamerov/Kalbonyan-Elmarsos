// Todo: Your solution code goes here
function double(value) {
  const result = value * 2;
  return result;
}

function transform(num1, func) {
  return func(num1);
}

console.log(transform(10, double));
