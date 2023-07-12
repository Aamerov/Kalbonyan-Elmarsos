const startGameBtn = document.getElementById('start-game-btn');

const Rock = 'ROCK';
const Paper = 'PAPER';
const Scissors = 'SCISSORS';
const DEAFULT_USER_CHOISE = Rock;
const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WINS = 'Computer Wins';
const RESULT_PLAYER_WINS = 'Player Wins';
let startedGame = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${Rock}, ${Paper} or ${Scissors}`,
    ''
  ).toUpperCase();
  if (selection !== Rock && selection !== Paper && selection !== Scissors) {
    alert(`Invalid choice! We choose ${DEAFULT_USER_CHOISE} for you!`);
    return DEAFULT_USER_CHOISE;
  }
  return selection;
};

function getComputerChoice() {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return Rock;
  } else if (randomValue < 0.67) {
    return Paper;
  } else {
    return Scissors;
  }
}

const getWinner = function (cChioce, pChoice) {
  if (cChioce === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChioce === Rock && pChoice === Paper) ||
    (cChioce === Paper && pChoice === Scissors) ||
    (cChioce === Scissors && pChoice === Rock)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', function () {
  if (startedGame) {
    return;
  }
  startedGame = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerSelection);
  console.log(winner);
});
