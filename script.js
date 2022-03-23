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

let playerScore = 0;
let computerScore = 0;

// Add event listeners to each button
// Clicked button value becomes playerSelection
// From there, clicked button calls playRound function
// playRound return value is logged to console

let playerSelection;

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
playerSelection = "rock";
playRound();
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
  playerSelection = "paper";
  console.log(playerSelection);
});

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => {
  playerSelection = "scissors";
  console.log(playerSelection);
});

function playRound(playerSelection, computerSelection) {

computerSelection = computerPlay();

if (playerSelection == computerSelection) {
  console.log(`It's a draw! Try again. ¯\_(ツ)_/¯ \nYour Score: ${playerScore} | Computer's Score: ${computerScore}`);
} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
  playerScore++;
  console.log(`You win, ${playerSelection} beats ${computerSelection}! ᕕ( ᐛ )ᕗ \nYour Score: ${playerScore} | Computer's Score: ${computerScore}`)
} else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
  computerScore++;
  console.log(`You lose, ${computerSelection} beats ${playerSelection}! (┛✧Д✧))┛彡┻━┻ \nYour Score: ${playerScore} | Computer's Score: ${computerScore}`);
} else if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
  console.log(`That is not a valid input, stop cheating! (; ･\`д･´) \nYour Score: ${playerScore} | Computer's Score: ${computerScore}`);
}
}





// Plays 5 rounds, then returns an alert with winner and results
function game() {
for (let i= 0; i < 5; i++) {
  playRound();
}
if (playerScore > computerScore) {
  alert(`You\'re the Rock-Paper-Scissors champion! o͡͡͡͡͡͡͡͡͡͡͡͡͡͡╮(｡ᐤヮᐤ｡)╭o͡͡͡͡͡͡͡͡͡͡͡͡͡͡' \n Final Score: You: ${playerScore} | Computer: ${computerScore}`);
} else if (playerScore < computerScore) {
  alert(`You lost to the computer! How embarrassing. \(´Д｀) \n Final Score: You: ${playerScore} | Computer: ${computerScore}`);
} else alert(`There's no winner here! Maybe try again? 「\(°ヘ°) \n Final Score: You: ${playerScore} | Computer: ${computerScore}`)
}

//game();

