let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let play = Math.floor(Math.random() * 3);
  console.log(play);
  switch (play) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      break;
  }
}

function getHumanChoice() {
  let play = prompt("Rock, Paper, Scissors");
  console.log(play);
  return play.toLowerCase();
}

function playRound() {
  let player = getHumanChoice();
  let computer = getComputerChoice();
  if (
    (player === "rock" && computer === "paper") ||
    (player === "paper" && computer === "scissors") ||
    (player === "scissors" && computer === "rock")
  ) {
    computerScore++;
  } else {
    humanScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`human: ${humanScore} | computer: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    console.log("congratulations! you win");
    console.log(`human: ${humanScore} | computer: ${computerScore}`);
  }
  if (computerScore > humanScore) {
    console.log("better luck next time");
    console.log(`human: ${humanScore} | computer: ${computerScore}`);
  }
  if (computerScore === humanScore) {
    console.log("draw");
    console.log(`human: ${humanScore} | computer: ${computerScore}`);
  }
}
