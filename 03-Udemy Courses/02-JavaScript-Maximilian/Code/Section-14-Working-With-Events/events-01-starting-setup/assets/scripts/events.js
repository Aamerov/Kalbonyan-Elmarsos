const button = document.querySelector('button');

// button.onclick = function () {};

const buttenClickHandler = () => {
  alert('Butten was clicked!');
};

const anotherButtenClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttenClickHandler;
// button.onclick = anotherButtenClickHandler;

const boundFn = buttenClickHandler.bind(this);

button.addEventListener('click', buttenClickHandler);

setTimeout(() => {
  button.removeEventListener('click', buttenClickHandler);
}, 2000);
