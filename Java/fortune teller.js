const fortune1 = "Your dog will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";
const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune; // Declare the variable without initial assignment

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = 5;
}

console.log(selectedFortune);
