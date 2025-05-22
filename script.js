let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let a = Math.round(Math.random()*1000);
    if(a % 3 === 0){
        return "rock";
    }
    if(a % 3 === 1){
        return "paper";
    }
    if(a % 3 === 2){
        return "scissors";
    }
    return null;
}

function getHumanChoice(){
    let humanChoice = prompt("Make a turn!", null);
    if(humanChoice.toLowerCase() === "rock") return "rock";
    if(humanChoice.toLowerCase() === "scissors") return "scissors";
    if(humanChoice.toLowerCase() === "paper") return "paper";
    return null;
}

function playRound(humanChoice, computerChoice){
   
}
