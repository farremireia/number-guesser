let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Funtion to be called at the start of each new round.
const generateTarget = () => {
  return Math.floor(Math.random() * 10) // Returns a random integer betweet 0 and 9.
};

// Function to be called each round to determine which guess is closest to the target number. Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
};

// Function will be used to correctly increase the winner’s score after each round.
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

// Function will be used to update the round number after each round.
const advanceRound = () => currentRoundNumber++;


// You should be able to make guesses, see your or the computer score increase correctly, move to the next round, and see the correct round displayed.