const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){
        return "Player"
    }
        else {
        return "Computer";
    }
}

function playRound(playerSlection, computerSelection) {
    const result = checkWinner(playerSlection, computerSelection);
    if (result == "Tie") {
        return "It's a Tie!"
    }
    else if (result == "Player") {
        return `You win! ${playerSlection} beats ${computerSelection}`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSlection}`;
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));