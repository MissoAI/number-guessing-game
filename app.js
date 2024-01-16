const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min) + 1) + 1;
let guess;
let attempts = 0;
let running = true;
while (running) {
  guess = window.prompt(`Enter a number between ${min}-${max}`);
  
  if (guess < min || guess > max) {
    window.alert("Enter a valid answer");
  } 
  else if (isNaN(guess)) {
    window.alert("Enter a valid number");
  } 
  else {
    attempts++;
    if (guess < answer) {
      window.alert("Cold");
    } 
    else if (guess > answer) {
      window.alert("HOT");
    } 
    else {
      window.alert(`YOU WON, it took you ${attempts} attempts to win`);
      running = false;
    }
  }
}
