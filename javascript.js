const score = {
    playerScore: 0,
    computerScore: 0,
    ties: 0,
    get numGames() { return (this.playerScore + this.computerScore + this.ties); },
    playerWins: function(){
        this.playerScore++;
        updateScoreDisplay();
    },
    computerWins: function(){
        this.computerScore++;
        updateScoreDisplay();
    },
    tieGame: function(){
        this.ties++;
        updateScoreDisplay();
    },
    resetGame: function(){
        this.playerScore = 0;
        this.computerScore = 0;
        this.ties = 0;
        updateScoreDisplay();
    }
}

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
function playRound(playerSelection){
    computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection); 
    switch(winner){
        case 0:
            score.tieGame();
            break;
        case 1:
            score.playerWins();
            break;
        case 2:
            score.computerWins();
            break;
    }

    roundLogPara.textContent += "Round " + score.numGames + ": " + getResultsMessage(winner, playerSelection, computerSelection) + "\r\n";
    checkForGameWinner();
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
            message = `You lose :( ${computerSelection} beats ${playerSelection})`;           
            break;
    }

    return message;
}

function updateScoreDisplay(){
    scorePara.textContent = `Player score: ${score.playerScore}  Computer score: ${score.computerScore}  Ties: ${score.ties}`;
}

function checkForGameWinner(){
    let gameOver = false;
    if(score.playerScore >= 5){
        winnerPara.textContent = "You Win!"
        gameOver = true;
    } else if(score.computerScore >= 5) {
        winnerPara.textContent = "You Lose!"
        gameOver = true;
    }

    if (gameOver){
        rockBtn.removeEventListener('click', handleButtonClick);
        paperBtn.removeEventListener('click', handleButtonClick);
        scissorsBtn.removeEventListener('click', handleButtonClick);
    }
}

function handleButtonClick(e){
    playRound(e.currentTarget.id);
}

//Main code
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const scorePara = document.getElementById("scorePara");
const roundLogPara = document.getElementById("roundLogPara");
const winnerPara = document.getElementById("winnerPara");

rockBtn.addEventListener('click', handleButtonClick);
paperBtn.addEventListener('click', handleButtonClick);
scissorsBtn.addEventListener('click', handleButtonClick);
