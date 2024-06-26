//variables for the choices
const choices = ["rock", "paper", "scissors"];


//function to randomly generate rock,paper,scissor choices.
function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
    
}
//function for user choice.
function getHumanChoice() {
    let userChoice = prompt("choose: rock, paper, scissors?").toLowerCase(); //prompt the user and store in variable userChoice.
    console.log(userChoice);
    return userChoice;
    
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log("Tie");
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        return console.log(`you win! ${humanChoice} beats ${computerChoice} your score is ${humanScore}`);
        
        
    }
    else {
        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice} computer score is ${computerScore}`);
        
    }
}
function playGame() {

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`)
        const userInput = getHumanChoice();
        const compChoice = getComputerChoice();

        playRound(userInput, compChoice);

        console.log("User Score: ", humanScore)
        console.log("Computer Score: ", computerScore)
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the whole game");
    }
    else {
        console.log("You lost the game. Refresh to start again");
    }

}



const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();


playGame();
