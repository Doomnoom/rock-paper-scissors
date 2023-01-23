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