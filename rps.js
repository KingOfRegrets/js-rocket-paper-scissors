// Javascript for Rocket Paper Scissors Game

function getComputeChoice() {
    let random_selection = Math.random();
    let computer_selection;
    if (random_selection <= 1/3) {
        computer_selection = "rock";
    } else if (random_selection <= 2/3) {
        computer_selection = "paper";
    } else {
        computer_selection = "scissors";
    }

    return computer_selection;
}

function getHumanChoice() {
    let user_selection = prompt("Select your hand. Pick from rock paper or scissors.").toLowerCase();
    return user_selection;
}

function playRound(humanChoice, computerChoice){
    let user_selection = humanChoice();
    let computer_selection = computerChoice();
    
    if (user_selection == "rock" && computer_selection == "rock") {
        console.log("Draw. You both selected rock.");
    } else if (user_selection == "rock" && computer_selection == "scissors") {
        console.log("You win. Your rock beats scissors.")
        humanScore++;
    } else if (user_selection == "rock" && computer_selection == "paper") {
        console.log("You lose. Your rock loses to paper.")
        computerScore++;
    } else if (user_selection == "rock" && computer_selection == "rock") {
        console.log("Draw. You both selected rock.");
    } else if (user_selection == "paper" && computer_selection == "scissors") {
        console.log("You lose. Your paper loses to scissors.")
        computerScore++;
    } else if (user_selection == "paper" && computer_selection == "paper") {
        console.log("Draw. You both selected paper.")
    } else if (user_selection == "paper" && computer_selection == "rock") {
        console.log("You win. Your paper beats rock.");
        humanScore++;
    } else if (user_selection == "scissors" && computer_selection == "scissors") {
        console.log("Draw. You both selected scissors.")
    } else if (user_selection == "scissors" && computer_selection == "paper") {
        console.log("You win. Your scissors beats paper.")
        humanScore++;
    } else if (user_selection == "scissors" && computer_selection == "rock") {
        console.log("You lose. Your scissors loses to rock.")
        computerScore++;
    }

    console.log(`The score is now ${humanScore} to ${computerScore}.`);
}

function playGame(){
    while (humanScore < 5 && computerScore <5) {
        playRound(getHumanChoice, getComputeChoice)
    }

    if (humanScore == 5){
        console.log(`You win the game. You have ${humanScore} wins, and the computer has ${computerScore}.`);
    } else {
        console.log(`You lose the game. The computer has ${computerScore} wins, and you have ${humanScore}.`);
    }
}

let humanScore = 0;
let computerScore = 0;

console.log("Welcome to a game of rock paper scissors! ")
playGame();