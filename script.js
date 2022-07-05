function computerPlay() {
    choices = ['rock', 'paper', 'scissors'];
    let x = Math.floor(Math.random() * choices.length);

    return choices[x];
}

let compMove = computerPlay();
console.log(compMove);
let playerScore = 0;
let compScore = 0;
function playRound(playerMove) {

    let result = '';
    if (playerMove == compMove) {
        result = "You both have chosen " + playerMove + ", Try Again!!"
        playRound('rock');
    }
    else if ((playerMove == 'rock' && compMove == 'scissors') ||
        (playerMove == 'scissors' && compMove == 'paper') ||
        (playerMove == 'paper' && compMove == 'rock')) {
        result = "You have won this round";
        playerScore = playerScore + 1;
    }

    else {
        result = "The Computer has won this round";
        compScore += 1;
    }
    return result;
}

function game() {
    let gameResult = '';
    for (i = 0; i < 5; i++) {
        playRound('rock');
    }
    if (playerScore > compScore) {
        gameResult = "You have won this game of five rounds\n Player Score = " +
            playerScore + "\n Computer Score = " + compScore;
    }
    else {
        gameResult = "Computer has won this game of five rounds\n Try Again!!"
    }

    return gameResult;
}

let message = game();
console.log(message);