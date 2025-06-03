const selButtons = document.querySelector(".selection");

const roundInfosDiv = document.querySelector(".round-info");
const currentRoundDiv = document.querySelector(".current");

const userChoiceDiv = document.querySelector("#user-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");
const choiceSeparator = document.querySelector("#choice-separator");

const resultDiv = document.querySelector(".result");
const userScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

const gameOverDiv = document.createElement("div");
gameOverDiv.classList.add("game-over");

let computerScore = 0;
let userScore = 0;
let currentRound = 1;
let gameWinner = null;
let gameOver = false;

reset();

function reset() {
  computerScore = 0;
  userScore = 0;
  currentRound = 1;
  gameWinner = null;
  gameOverDiv.textContent = "";
  gameOver = false;
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

function getMatchWinner() {
  if (computerScore > userScore) {
    return "Computer";
  }
  if (computerScore < userScore) {
    return "Player";
  }
}

function updateRoundInfos(computerChoice, userChoice, result) {
  currentRoundDiv.textContent = `Round ${currentRound}`;
  userChoiceDiv.textContent = `${userChoice}`;
  computerChoiceDiv.textContent = `${computerChoice}`;
  choiceSeparator.textContent = `${result}`;

  // resultDiv.textContent = `${result}`;
}

function updateScore() {
  userScoreSpan.textContent = `${userScore}`;
  computerScoreSpan.textContent = `${computerScore}`;
}

function showGameOver(winner) {
  gameOverDiv.textContent = `${winner} wins the match !`;
  resultDiv.appendChild(gameOverDiv);
}

function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  let roundWinner = getRoundWinner(computerChoice, userChoice);
  let result;

  if (roundWinner === "none") {
    result = "=";
  }
  if (roundWinner === "user") {
    result = ">";
    userScore++;
  }
  if (roundWinner === "computer") {
    result = "<";
    computerScore++;
  }

  updateRoundInfos(computerChoice, userChoice, result);
  updateScore();

  if (userScore >= 5 || computerScore >= 5) {
    const winner = getMatchWinner();
    gameOver = true;
    showGameOver(winner);
  }
  currentRound++;
}

selButtons.addEventListener("click", (event) => {
  if (gameOver) {
    reset();
  }
  playRound(event.target.id);
});
