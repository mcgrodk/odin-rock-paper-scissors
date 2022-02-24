function computerPlay() {
    const number = Math.floor(Math.random()*3) + 1;
    if (number == 1) {
        return "rock";
    }
    else if (number == 2) {
        return "paper";
    }
    else (number == 3) 
        return "scissors";
    }

function playerPlay() {
  const playerInput = prompt('Rock, Paper, or Scissors?').toLowerCase();
  return playerInput;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "draw";
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return "player wins";
    } else return "computer wins";
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "player wins";
    } else return "computer wins";
  } else if (playerSelection == "scissors") {
    if (playerSelection == "paper") {
      return "player wins";
    } else return "computer wins";
  } 
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

function game() {
  //for (let i = 0; i < 5; i++) {
  
  let result = playRound(playerSelection, computerSelection);
  
  if (result == "player wins") {
    playerScore++;
    console.log(`You win, ${playerSelection} beats ${computerSelection}! ᕕ( ᐛ )ᕗ `);
    console.log(`Your Score: ${playerScore}; Computer's Score: ${computerScore}`);
  } else if (result == "computer wins") {
    computerScore++;
    console.log(`You lose, ${computerSelection} beats ${playerSelection}! (┛✧Д✧))┛彡┻━┻`);
    console.log(`Your Score: ${playerScore}; Computer's Score: ${computerScore}`);
  } else if (result == "draw") {
    console.log("It's a draw! Try again. ¯\_(ツ)_/¯");
    console.log(`Your Score: ${playerScore}; Computer's Score: ${computerScore}`);
  } else console.log("That is not a valid input, stop cheating! (; ･`д･´)​");
        console.log(`Your Score: ${playerScore}; Computer's Score: ${computerScore}`);
}
//}
game();



/* Use "game" function to play five rounds
If player wins, print a win message; if player loses, print lose message; if a draw, print draw message
Start from base count Wins: 0 and Losses: 0
If player wins, add 1 to Wins; if player loses, add 1 to losses
A draw does not add to win or loss count, and does not count toward 5 rounds
After 5 rounds played, display final win/loss count with final message
*/