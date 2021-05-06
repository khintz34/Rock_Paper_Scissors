const gameOptions = ["rock", "paper", "scissors"];

main();

function main() {
  printValue("Hello welcome to the game!");

  for (let i = 0; i < 3; i++) {
    const playerChoice = playerPlay();
    const computerChoice = computerPlay();

    declareWinner(computerChoice, playerChoice);
    printValue("Finished round: " + (i + 1));
  }

  printValue("Thanks for playing");
}

function printValue(value) {
  console.log(value);
}

function computerPlay() {
  const index = Math.floor(Math.random() * gameOptions.length);
  printValue("Computers choice: " + gameOptions[index]);
  return gameOptions[index];
}

function playerPlay() {
  const playerChoice = prompt("Rock, Paper, or Scissors");
  printValue("Players choice: " + playerChoice);

  return playerChoice.toLowerCase();
}

function declareWinner(computerChoice, playerChoice) {
  if (computerChoice == playerChoice) {
    console.log("Its a tie game");
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    console.log("Computer Wins");
  } else if (computerChoice == "rock" && playerChoice == "paper") {
    console.log("Player Wins");
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    console.log("Computer Wins");
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    console.log("Player Wins");
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    console.log("Computer Wins");
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    console.log("Player Wins");
  } else console.log("Not working properly");
}
