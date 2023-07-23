const sayHello1 = (name) => console.log('Hi ' + name);

const sayHello2 = (phrase, name) => {
  console.log(phrase + ' ' + name);
};

const sayHello3 = () => {
  console.log('CallBack function');
};

const sayHello4 = (name) => {
  let result = 'Hi' + ' ' + name;
  return result;
};

const sayHello5 = (name, phrase = 'Hi') => {
  console.log(phrase + ' ' + name);
};
sayHello1('Aamer');
sayHello2('Hi', 'Anas');
sayHello3();
console.log(sayHello4('Aamer'));

sayHello5('plus anas');

function checkInput(cb, ...args) {
  let hasEmptyArgs = false;
  for (let arg of args) {
    if (!arg) {
      hasEmptyArgs = true;
    } else {
      console.log(arg);
    }
  }
  if (!hasEmptyArgs) {
    cb();
  }
}
checkInput(
  () => {
    console.log('Abo Al-Soos');
  },
  'hi',
  3,
  5,
  8
);
