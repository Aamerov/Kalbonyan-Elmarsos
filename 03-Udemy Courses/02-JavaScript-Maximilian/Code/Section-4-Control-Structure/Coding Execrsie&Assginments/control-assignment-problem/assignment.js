const randomNumber = Math.random();

if (randomNumber > 0.7) {
  alert(`${randomNumber} is greater than 0.7`);
} else {
  alert(`${randomNumber} is less than 0.7`);
}

let manyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i < manyNumbers.length; i++) {
  console.log(manyNumbers[i]);
}

for (let num of manyNumbers) {
  console.log(num);
}

let j = manyNumbers.length - 1;
do {
  console.log(manyNumbers[j]);
  j--;
} while (j >= 0);

const sencondRandomNum = Math.random();

if (sencondRandomNum > 0.7 && randomNumber > 0.7) {
  alert(
    `(${sencondRandomNum}) and (${randomNumber}) both are greater than 0.7`
  );
} else if (sencondRandomNum < 0.2 || randomNumber < 0.2) {
  alert(
    `Maybe (${sencondRandomNum}) or (${randomNumber}) are not greater than 0.2`
  );
}
