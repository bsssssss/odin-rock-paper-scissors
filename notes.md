Rock Paper Scissors
    5 rounds
    3 choices (rock, paper, scissors)
    if rock/paper     -> paper win
    if paper?scissors -> scissors win
    if scissors/rock  -> rock win

getComputerChoice()
    choice: random value between 0 and 2
    choice: map (0, 1, 2) => ("rock", "paper", "scissors")
    RETURN choice

getUserChoice()
    choice: prompt the user for choice ("rock", "paper", "scissors")
    RETURN choice

playGame()
    computerScore: integer, initVal: 0
    userScore:     integer, initVal: 0
    round: the current round, integer, initVal: 0
    gameWinner: string, initVal: null;
    WHILE round is less than 5
       roundWinner: CALL playRound()
       if roundWinner is "tie"
           OUTPUT "Tie !"
           CONTINUE
       else if roundWinner is "computer"
           increment computerScore by 1
       else if roundWinner is "user"
           increment userScore by 1
       OUTPUT "<roundWinner> wins this round !"
       increment round by 1
    ENDWHILE
    IF computerScore is greater than userScore
       gameWinner: "computer"
    ELSE
       game winner: "user"
    OUTPUT "<gameWinner> wins !"

playRound()
    computerChoice: CALL getComputerChoice()
    userChoice:     CALL getUserChoice()
    winner: CALL getRoundWinner(computerChoice, userChoice)
    RETURN winner

getRoundWinner(computerChoice, userChoice)
    IF computerChoice is the same as userChoice
       RETURN "tie"
    IF computerChoice is "rock"
       IF userChoice is "paper"
         RETURN "user"
       IF userChoice is "scissors"
         RETURN "computer"
    IF computerChoice is "paper"
       IF userChoice is "rock"
         RETURN "computer"
       IF userChoice is "scissors"
         RETURN "user"
    IF computerChoice is "scissors"
       IF userChoice is "rock"
         RETURN "user"
       IF userChoice is "paper"
         RETURN "computer"

