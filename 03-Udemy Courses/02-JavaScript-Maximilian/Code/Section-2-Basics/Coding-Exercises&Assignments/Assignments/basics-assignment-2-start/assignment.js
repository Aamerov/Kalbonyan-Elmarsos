const task3Element = document.getElementById('task-3');

function emptyOne() {
  alert('This is an empty alert, Nothing to worry about');
}

function showName(noun) {
  alert(`My name is ${noun}`);
}

emptyOne();
showName('Aamer');

task3Element.addEventListener('click', emptyOne);

function concStrings(samp1, samp2, samp3) {
  const fully = samp1 + samp2 + samp3;
  return fully;
}

const appearHere = concStrings('orga', 'niza', 'tion');

alert(appearHere);
