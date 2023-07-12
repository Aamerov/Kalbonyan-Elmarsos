const firstTaskWayOne = document.querySelector('li');
const firstTaskWayTwo = document.getElementById('task-1');

firstTaskWayOne.style.backgroundColor = 'black';
firstTaskWayTwo.style.color = 'white';

const docTitle = document.querySelector('title');
// docTitle.textContent = 'Assignment - Solved';
const docTitle2 = document.head.querySelector('title');
docTitle2.textContent = 'Assignment - Solved';

const h1 = document.getElementsByTagName('h1');

h1[0].textContent = 'Assignment - Solved!';
