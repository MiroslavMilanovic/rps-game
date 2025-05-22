let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let a = Math.round(Math.random()*1000);
    if(a % 3 === 0){
        console.log("computer choosed rock!");
    }
    if(a % 3 === 1){
       console.log("computer choosed paper!");
    }
    if(a % 3 === 2){
        console.log("computer choosed scissors!");
    }
    return a%3;
}

function getHumanChoice(){
    let humanChoice = prompt("Make a turn!", null);
    if(humanChoice.toLowerCase() === "rock") return 0;
    if(humanChoice.toLowerCase() === "paper") return 1;
    if(humanChoice.toLowerCase() === "scissors") return 2;
    return null;
}

function playRound(humanChoice, computerChoice){
   if(humanChoice === computerChoice) return;
   if(humanChoice - computerChoice === -1 || humanChoice - computerChoice === 2) {
      computerScore++;
      console.log("You lose this round! Current score " + humanScore + ":" + computerScore);
      return;
   }
   if(humanChoice - computerChoice === 1 || humanChoice - computerChoice === -2) {
      humanScore++;
      console.log("You win this round! Current score " + humanScore + ":" + computerScore);
      return;
   }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);

