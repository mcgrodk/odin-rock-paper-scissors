function computerPlay() {
    let number = Math.floor(Math.random()*3);
    if (number == 0) {
        return "rock";
    }
    else if (number == 1) {
        return "paper";
    }
    else (number == 2) 
        return "scissors";
    }

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "Sorry, pardner, you lose! Paper beats Rock."
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "Congrats, pardner, you win! Rock beats Scissors."
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "Well I'll be! It's a draw! Try again."
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "Congrats, pardner, you win! Paper beats Scissors."
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "Well I'll be! It's a draw! Try again."
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "Sorry, pardner, you lose! Scissors beats Paper."
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "Sorry, pardner, you lose! Rock beats Scissors."
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "Congrats, pardner, you win! Scissors beats Paper."
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return "Well I'll be! It's a draw! Try again."
    }
}
const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));