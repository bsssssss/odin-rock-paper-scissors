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

function getUserChoice() {
  let choice = prompt("Your choice").toLowerCase();
  return choice;
}

function getRoundWinner(computerChoice, userChoice) {
  console.log(`Computer choice : ${computerChoice}`);
  console.log(`Your choice     : ${userChoice}`);

  if (computerChoice === userChoice) {
    return "tie"
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

function playRound(round) {
  let computerChoice = getComputerChoice();
  let userChoice = getUserChoice();
  console.log(`\nRound ${round}`);

  let winner = getRoundWinner(computerChoice, userChoice);

  return winner;
}

function playGame() {
  let computerScore = 0;
  let userScore = 0;
  let currentRound = 1;
  let gameWinner = null;

  while (currentRound <= 5) {
    let roundWinner = playRound(currentRound)

    if (roundWinner === "tie") {
      console.log("Tie !");
      currentRound++;
      continue
    }
    if (roundWinner === "user") {
      userScore++;
    }
    if (roundWinner === "computer") {
      computerScore++;
    }

    currentRound++;

    console.log(`${roundWinner} wins this round !`);
    console.log(
      `Your score     : ${userScore}\n` +
      `Computer score : ${computerScore}`);
  }

  console.log("Match is over");

  if (computerScore > userScore) {
    gameWinner = "computer";
    console.log("You lost..");
  }
  else if (computerScore < userScore) {
    gameWinner = "user";
    console.log("You win :)");
  }
  else {
    console.log("It's a tie !");
  }
}
