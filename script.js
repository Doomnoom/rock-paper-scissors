const buttons = document.querySelectorAll('.selection');
const resultTxt = document.querySelector('#result');
const playerTxt = document.querySelector('#player');
const compTxt = document.querySelector('#computer');
const gameWinner = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;

function startRound(e){
    let playerChoice = e.currentTarget.id;
    let computerChoice = getComputerChoice();
    let winner = findResult(playerChoice, computerChoice)
    gameWinner.textContent = '';
    resultTxt.textContent = `Winner is: ${winner}`;
    playerTxt.textContent = `Player Score: ${playerScore}`;
    compTxt.textContent = `Computer score: ${computerScore}`;

    if(playerScore === 5 || computerScore === 5){
        endgame();
    }
}

function findResult(playerChoice, computerChoice){
    let result;

    if(playerChoice === computerChoice){
        return result = 'tie';
    }
    else if(playerChoice === 'ROCK'){
        if(computerChoice === 'PAPER'){
            computerScore ++;
            return result = 'computer'
        }
        else{
            playerScore ++;
            return result = 'player'
        }
    }
    else if(playerChoice === 'PAPER'){
        if(computerChoice === 'SCISSORS'){
            computerScore ++;
            return result = 'computer'
        }
        else{
            playerScore ++
            return result = 'player'
        }
    }
    else if(playerChoice === 'SCISSORS'){
        if(computerChoice === 'ROCK'){
            computerScore ++;
            return result = 'computer'
        }
        else{
            playerScore ++;
            return result = 'player'
        }
    }
}

function getComputerChoice(){
    let computerChoice;
    let roll = Math.floor(Math.random() * 3) + 1;

    if(roll === 1){
        computerChoice = "ROCK";
    }
    else if(roll === 2){
        computerChoice = "PAPER";
    }
    else{
        computerChoice = "SCISSORS";
    }

    return computerChoice;
}

function endgame(){
    if(playerScore === 5){
        gameWinner.textContent = 'PLAYER WON!';
    }
    else if(computerScore === 5){
        gameWinner.textContent = 'COMPUTER WON!';
    }

    playerScore = 0;
    computerScore = 0;
}

buttons.forEach(buttons => buttons.addEventListener('click', startRound));
