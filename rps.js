// Javascript for Rocket Paper Scissors Game

console.log("Hello, World.");

function getComputeChoice() {
    let random_selection = Math.random();
    let selection;
    if (random_selection <= 1/3) {
        selection = "rock";
    } else if (random_selection <= 2/3) {
        selection = "paper";
    } else {
        selection = "scissors";
    }
    console.log(random_selection);
    console.log(selection);
}

function getHumanChoice() {
    user_selection = prompt("Select your hand.").toLowerCase()
}

let user_selection;

getComputeChoice();
getHumanChoice();
console.log(user_selection);
