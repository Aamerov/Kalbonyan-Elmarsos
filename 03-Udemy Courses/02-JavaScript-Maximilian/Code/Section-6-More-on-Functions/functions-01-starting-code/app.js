const startGameBtn = document.getElementById('start-game-btn');

function startingGame() {
  console.log('Starting the Game now ... ');
}

// const person = {
//   greet: function greet() {
//     console.log('Hello there');
//   },
// };

// person.greet();

console.dir(startingGame);

startGameBtn.addEventListener('click', startingGame);
