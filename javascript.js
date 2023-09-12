//Get computer choice
function getComputerChoice(){
    let selectionNumber = Math.floor(Math.random() * 3);
    let selectionWord;
    switch (selectionNumber) {
        case 0:
            selectionWord="rock";
            break;
        case 1:
            selectionWord="paper";
            break;
        case 2:
            selectionWord="scissors";
            break;
    }
    return selectionWord;
}

//Determine winner between two choices
function checkWinner(player1Choice, player2Choice) {
    player1Choice = player1Choice.toLowerCase();
    player2Choice = player2Choice.toLowerCase();
    let winner = 0;

    switch (player1Choice){
        case "rock":
            switch (player2Choice){
                case "rock":
                    winner = 0;
                    break;
                case "paper":
                    winner = 2;
                    break;
                case "scissors":
                    winner = 1;
                    break;
            }
            break;
        case "paper":
            switch (player2Choice){
                case "rock":
                    winner = 1;
                    break;
                case "paper":
                    winner = 0;
                    break;
                case "scissors":
                    winner = 2;
                    break;
            }
            break;
        case "scissors":
            switch (player2Choice){
                case "rock":
                    winner = 2;
                    break;
                case "paper":
                    winner = 1;
                    break;
                case "scissors":
                    winner = 0;
                    break;
            }
            break;
    }
    return winner;
}


//Play round
function playRound(playerSelection, computerSelection){
    let winner = checkWinner(playerSelection, computerSelection);
    return winner;
}

function getResultsMessage(winner, playerSelection, computerSelection)
{
    let message;
    switch(winner){
        case 0:
            message= `Players tie! ${playerSelection} = ${computerSelection}`;
            break;
        case 1:
            message = `You win! ${playerSelection} beats ${computerSelection}!`;
            break;
        case 2:
            message = `You lose :( ${computerSelection} beats ${playerSelection})`
            break;
    }

    return message;
}

function game(){
    let playerSelection, computerSelection, winner
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    for (let i=1; i<=5; i++){
        playerSelection = prompt("Choose Rock, Paper or Scissors: ")
        computerSelection = getComputerChoice();
        winner = playRound(playerSelection, computerSelection);
        switch(winner){
            case 0:
                ties++;
                break;
            case 1:
                playerWins++;
                break;
            case 2:
                computerWins++;
                break;
        }
        console.log("Round " + i + ": " + getResultsMessage(winner, playerSelection, computerSelection));
    }
    console.log(`Final tally: Player wins: ${playerWins}  Computer wins: ${computerWins}  Ties: ${ties}`);
}

//Main code
console.log("Welcome to Rock Paper Scissors!");
game();