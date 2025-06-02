const selButtons = document.querySelector(".selection");

const roundInfosDiv = document.querySelector(".round-info");
const currentRoundDiv = document.querySelector(".current");

const userChoiceDiv = document.querySelector(".user-choice");
const computerChoiceDiv = document.querySelector(".computer-choice");

const resultDiv = document.querySelector(".result");
const userScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

let computerScore = 0;
let userScore = 0;
let currentRound = 1;
let gameWinner = null;

reset();

function reset() {
  computerScore = 0;
  userScore = 0;
  currentRound = 1;
  gameWinner = null;
  updateScore();
}

function getComputerChoice() {
  let choice = Math.round(Math.random() * 2);

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getRoundWinner(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    return "none";
  }

  if (computerChoice === "rock") {
    if (userChoice === "paper") {
      return "user";
    }
    if (userChoice === "scissors") {
      return "computer";
    }
  }

  if (computerChoice === "paper") {
    if (userChoice === "rock") {
      return "computer";
    }
    if (userChoice === "scissors") {
      return "user";
    }
  }

  if (computerChoice === "scissors") {
    if (userChoice === "rock") {
      return "user";
    }
    if (userChoice === "paper") {
      return "computer";
    }
  }
}

function updateRoundInfos(computerChoice, userChoice, result) {
  currentRoundDiv.textContent = `Round ${currentRound}`;
  userChoiceDiv.textContent = `You choose ${userChoice}`;
  computerChoiceDiv.textContent = `Computer chooses ${computerChoice}`;

  resultDiv.textContent = `${result}`;
}

function updateScore() {
  userScoreSpan.textContent = `${userScore}`;
  computerScoreSpan.textContent = `${computerScore}`;
}

function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let roundWinner = getRoundWinner(computerChoice, userChoice);
  let result;

  if (roundWinner === "none") {
    result = "It's a tie !";
  }
  if (roundWinner === "user") {
    result = "You win !";
    userScore++;
  }
  if (roundWinner === "computer") {
    result = "You loose..";
    computerScore++;
  }

  updateRoundInfos(computerChoice, userChoice, result);
  updateScore();

  currentRound++;
  return roundWinner;
}

function play(userChoice) {
  console.log("Match is over");

  if (computerScore > userScore) {
    gameWinner = "computer";
    console.log("You lost..");
  } else if (computerScore < userScore) {
    gameWinner = "user";
    console.log("You win :)");
  } else {
    console.log("It's a tie !");
  }
}

selButtons.addEventListener("click", (event) => {
  playRound(event.target.id);
});
