const compChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".choice");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const random = Math.floor(Math.random() * possibleChoices.length)+1;
    if(random === 1){
        computerChoice = "rock";
    }else if(random === 2){
        computerChoice = "paper";
    }else if(random === 3){
        computerChoice = "scissors";
    }
    compChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice){
        result = "Its a Draw!";
    }else if(computerChoice === "rock" && userChoice === "paper"){
        result = "You win!";
    }else if(computerChoice === "rock" && userChoice === "scissors"){
        result = "Computer win!";
    }else if(computerChoice === "paper" && userChoice === "rock"){
        result = "Computer win!";
    }else if(computerChoice === "paper" && userChoice === "scissors"){
        result = "You win!";
    }else if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You win!";
    }else if(computerChoice === "scissors" && userChoice === "paper"){
        result = "Computer win!";
    }else{
        result = "Invalid Input!";
    }
    resultDisplay.innerHTML = result;
}