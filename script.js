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

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
playRound('rock');
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
  playRound('paper');
});

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => {
  playRound('scissors');
});

function playRound(playerSelection, computerSelection) {

computerSelection = computerPlay();
const roundResult = document.querySelector('#round-result');
const playerPoints = document.querySelector('#player-points');
const computerPoints = document.querySelector('#computer-points');
const winnerAnnouncement = document.querySelector('#winner-announcement');
winnerAnnouncement.style.color = "red";

if (playerSelection == computerSelection) {
  roundResult.textContent = "It's a draw! Try again. ¯\_(ツ)_/¯";
  playerPoints.textContent = `${playerScore}`;
  computerPoints.textContent = `${computerScore}`;
} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
  playerScore++;
  playerPoints.textContent = `${playerScore}`;
  computerPoints.textContent = `${computerScore}`;
  roundResult.textContent = `You win, ${playerSelection} beats ${computerSelection}! ᕕ( ᐛ )ᕗ`;
} else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
  computerScore++;
  roundResult.textContent = `You lose, ${computerSelection} beats ${playerSelection}! (┛✧Д✧))┛彡┻━┻`;
  playerPoints.textContent = `${playerScore}`;
  computerPoints.textContent = `${computerScore}`;
} 

if (playerScore == 5) {
  winnerAnnouncement.textContent = "You're the Rock, Paper, Scissors champion! o(〃＾▽＾〃)o";
} else if (computerScore == 5) {
  winnerAnnouncement.textContent = "You lost to the computer! How embarassing. ((´д｀))";
}
}

