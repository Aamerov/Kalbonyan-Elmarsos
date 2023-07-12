const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enterNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enterNumber}`;
  currentResult = currentResult + parseInt(enterNumber);
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
