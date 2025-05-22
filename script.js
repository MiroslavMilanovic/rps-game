let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let a = Math.round(Math.random()*1000);
    if(a % 3 === 0){
        console.log("computer chose rock!");
    }
    if(a % 3 === 1){
       console.log("computer chose paper!");
    }
    if(a % 3 === 2){
        console.log("computer chose scissors!");
    }
    return a%3;
}

function getHumanChoice(){
    let humanChoice = prompt("Make a turn!", null);
    console.log("You chose " + humanChoice + "!")
    if(humanChoice.toLowerCase() === "rock") return 0;
    if(humanChoice.toLowerCase() === "paper") return 1;
    if(humanChoice.toLowerCase() === "scissors") return 2;
    return null;
}

function playRound(){
   const computerChoice = getComputerChoice();
   const humanChoice = getHumanChoice();
   if(humanChoice === computerChoice){
      console.log("Its a draw!, please repit the round!");
      playRound();
   }
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

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if(humanScore > computerScore) console.log("Congatulations you have won the game!");
    else console.log("You have lost the game, better luck next time!");
    return;
}


playGame();

