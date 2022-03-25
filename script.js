const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const instructions = document.querySelector('#instructions');
const roundResult = document.querySelector('#round-result');
const playerPoints = document.querySelector('#player-points');
const computerPoints = document.querySelector('#computer-points');
const winnerAnnouncement = document.querySelector('#winner-announcement');
const tryAgain = document.querySelector('#try-again');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const number = Math.floor(Math.random()*3) + 1;
  if (number == 1) {
      return "rock";
  }
  else if (number == 2) {
      return "paper";
  }
  else return "scissors";
  }
  
rockBtn.addEventListener('click', () => {
  instructions.textContent = '';
  winnerAnnouncement.textContent = '';
  tryAgain.textContent = '';
  playRound('rock');
});

paperBtn.addEventListener('click', () => {
  instructions.textContent = '';
  winnerAnnouncement.textContent = '';
  tryAgain.textContent = '';
  playRound('paper');
});

scissorsBtn.addEventListener('click', () => {
  instructions.textContent = '';
  winnerAnnouncement.textContent = '';
  tryAgain.textContent = '';
  playRound('scissors');
});

function playRound(playerSelection, computerSelection) {

computerSelection = computerPlay();

if (playerSelection == computerSelection) {
  roundResult.textContent = "It's a draw! Try again. ¯\_(ツ)_/¯";
  playerPoints.textContent = `${playerScore}`;
  computerPoints.textContent = `${computerScore}`;
} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
  roundResult.textContent = `You win, ${playerSelection} beats ${computerSelection}! ᕕ( ᐛ )ᕗ`;
  playerScore++;
  playerPoints.textContent = `${playerScore}`;
  computerPoints.textContent = `${computerScore}`;
} else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
  roundResult.textContent = `You lose, ${computerSelection} beats ${playerSelection}! (┛✧Д✧))┛彡┻━┻`;
  computerScore++;
  playerPoints.textContent = `${playerScore}`;
  computerPoints.textContent = `${computerScore}`;
} 

if (playerScore == 5) {
  winnerAnnouncement.textContent = "You're the Rock, Paper, Scissors champion! o(〃＾▽＾〃)o";
  tryAgain.textContent = "Click a button to reset and try again!"
  playerScore = 0;
  computerScore = 0;
}

if (computerScore == 5) {
  winnerAnnouncement.textContent = "You lost to the computer! How embarassing. ((´д｀))";
  tryAgain.textContent = "Click a button to reset and try again!"
  playerScore = 0;
  computerScore = 0;
}
}