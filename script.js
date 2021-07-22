let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

// determines winner
const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  if (
    Math.abs(userGuess - secretTarget) < Math.abs(computerGuess - secretTarget)
  ) {
    return true;
  } else if (
    Math.abs(userGuess - secretTarget) > Math.abs(computerGuess - secretTarget)
  ) {
    return false;
  } else {
    return true;
  }
};

// score update
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  } else return -1;
};

// round increment
const advanceRound = () => {
  currentRoundNumber += 1;
};
