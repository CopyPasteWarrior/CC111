// Import the 'readline' module to get input from the terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;
let numberOfGuesses = 0;

// Define a function to ask the question
function askQuestion() {
  readline.question('Guess a number between 1 and 10: ', (userInput) => {
    // Convert the input string to a number
    const guess = Number(userInput);
    numberOfGuesses++;

    // Check the guess using conditional logic
    if (guess === secretNumber) {
      console.log(`Correct! You guessed it in ${numberOfGuesses} tries.`);
      readline.close(); // End the program
    } else if (guess < secretNumber) {
      console.log('Too low! Try again.');
      askQuestion(); // Ask the question again
    } else {
      console.log('Too high! Try again.');
      askQuestion(); // Ask the question again
    }
  });
}

// Start the game
console.log('Welcome to the Number Guessing Game!');
askQuestion();