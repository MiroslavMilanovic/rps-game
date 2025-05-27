let humanScore = 0;
let computerScore = 0;
const scoreBoard = document.querySelector(".scoreBoard");

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

/*function getHumanChoice(){
    let humanChoice = prompt("Make a turn!", null);
    console.log("You chose " + humanChoice + "!")
    if(humanChoice.toLowerCase() === "rock") return 0;
    if(humanChoice.toLowerCase() === "paper") return 1;
    if(humanChoice.toLowerCase() === "scissors") return 2;
    return null;
}*/

function playRound(computerChoice, humanChoice){
    scoreBoard.replaceChildren();
    const p = document.createElement("p");
    const final = document.createElement("p");
    scoreBoard.appendChild(p);
   if(humanChoice === computerChoice){
      p.textContent = "Its a draw!, please repit the round! Score " + humanScore + ":" + computerScore;
   }
   if(humanChoice - computerChoice === -1 || humanChoice - computerChoice === 2) {
      computerScore++;
      if(computerScore>=5){
        final.textContent = "You have lost the game, better luck next time! Final score " + humanScore + ":" + computerScore;
        computerScore = 0;
        humanScore = 0;
        scoreBoard.appendChild(final);
        return;
      }
      p.textContent = "You lose this round! Current score " + humanScore + ":" + computerScore;
   }
   if(humanChoice - computerChoice === 1 || humanChoice - computerChoice === -2) {
      humanScore++;
      if(humanScore >= 5){
        final.textContent = "You have won the game, congratulations! Final score " + humanScore + ":" + computerScore;
        computerScore = 0;
        humanScore = 0;
        scoreBoard.appendChild(final);
        return;
      }
      p.textContent = "You win this round! Current score " + humanScore + ":" + computerScore;
   }
}


const rockBtn = document.querySelector("#btnOne");
const paperBtn = document.querySelector("#btnTwo");
const scissBtn = document.querySelector("#btnTree");

rockBtn.addEventListener("click", () => playRound(getComputerChoice(), 0));
paperBtn.addEventListener("click",() => playRound(getComputerChoice(), 1));
scissBtn.addEventListener("click",() => playRound(getComputerChoice(), 2));

/*playGame();*/

