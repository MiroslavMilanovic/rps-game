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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());