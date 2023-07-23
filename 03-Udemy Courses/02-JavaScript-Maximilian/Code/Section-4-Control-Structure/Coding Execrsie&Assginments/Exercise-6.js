const age = 30;

let userCategory; // should be 'child', 'adult' or 'senior'

function solve() {
  if (age < 18) {
    userCategory = 'child';
  } else if (age < 65) {
    userCategory = 'adult';
  } else {
    userCategory = 'senior';
  }
}
