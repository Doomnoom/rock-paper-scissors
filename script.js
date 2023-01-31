const buttons = document.querySelectorAll('.selection');
let resultTxt = document.querySelector('#result');

buttons.forEach(buttons => buttons.addEventListener('click', startRound));


function startRound(e){
    let playerChoice = e.currentTarget.id;
    let computerChoice = getComputerChoice();
    let winner = findResult(playerChoice, computerChoice)
    resultTxt.textContent = `Winner is: ${winner}`;
}



function findResult(playerChoice, computerChoice){
    let result;

    if(playerChoice === computerChoice){
        return result = 'tie';
    }
    else if(playerChoice === 'ROCK'){
        if(computerChoice === 'PAPER'){
            return result = 'computer'
        }
        else{
            return result = 'player'
        }
    }
    else if(playerChoice === 'PAPER'){
        if(computerChoice === 'SCISSORS'){
            return result = 'computer'
        }
        else{
            return result = 'player'
        }
    }
    else if(playerChoice === 'SCISSORS'){
        if(computerChoice === 'ROCK'){
            return result = 'computer'
        }
        else{
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