function callMe() {
  console.log('Called!');
}

function solve() {
  for (let i = 0; i < 100; i++) {
    console.log(i + 1);
    callMe();
  }
}
