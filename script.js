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
        return "Sorry, you lose! Paper beats Rock. (┛✧Д✧))┛彡┻━┻"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors. ᕕ( ᐛ )ᕗ"
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "It's a draw! Try again. ¯\_(ツ)_/¯"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Scissors. ᕕ( ᐛ )ᕗ"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "It's a draw! Try again. ¯\_(ツ)_/¯"
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "Sorry, you lose! Scissors beats Paper. (┛✧Д✧))┛彡┻━┻"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "Sorry, you lose! Rock beats Scissors. (┛✧Д✧))┛彡┻━┻"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper. ᕕ( ᐛ )ᕗ"
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return "It's a draw! Try again. ¯\_(ツ)_/¯"
    }
    else return "That is not a valid input, stop cheating! (; ･`д･´)​"
}

// Function incomplete
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

const playerSelection = "swag";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

/* Use "game" function to play five rounds
If player wins, print a win message; if player loses, print lose message; if a draw, print draw message
Start from base count Wins: 0 and Losses: 0
If player wins, add 1 to Wins; if player loses, add 1 to losses
A draw does not add to win or loss count, but still counts as a round played
After 5 rounds played, display final win/loss count with final message
*/