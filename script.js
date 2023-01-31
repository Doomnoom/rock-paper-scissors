/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    for(let i = 0; i < 5; i++){

        let playerChoice = prompt('Rock, Paper, or Scissors: ');
        playerChoice = playerChoice.toUpperCase();

        let result = playRound(playerChoice, getComputerChoice());
        
        if(result === 'tie'){
            tieScore++;
        }
        else if(result === 'player'){
            playerScore++;
        }
        else if(result === 'computer'){
            computerScore++;
        }

        console.log('<--------------------------------------->');
        console.log('Player Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
        console.log('Tie Score: ' + tieScore);
    }
}*/

const buttons = document.querySelectorAll('.selection');
let resultTxt = document.querySelector('#result');

buttons.forEach(buttons => buttons.addEventListener('click', function(e){
    let playerChoice = e.currentTarget.id;
    let computerChoice = getComputerChoice();
    let winner = playRound(playerChoice, computerChoice)
    resultTxt.textContent = `Winner is: ${winner}`;
}))






function playRound(playerChoice, computerChoice){
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