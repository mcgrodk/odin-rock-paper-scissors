function computerPlay() {
    let number = Math.floor(Math.random()*3) + 1;
    if (number == 1) {
        return "rock";
    }
    else if (number == 2) {
        return "paper";
    }
    else (number == 3) 
        return "scissors";
    }


    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
          return "It's a draw! Try again. ¯\_(ツ)_/¯";
          console.log("You: " + playerScore + "Computer: " + computerScore);
        } else if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
              return "You win! Rock beats Scissors. ᕕ( ᐛ )ᕗ";
              } else return "You lose! Paper beats Rock. (┛✧Д✧))┛彡┻━┻";
        } else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
              return "You win! Paper beats Rock. ᕕ( ᐛ )ᕗ";
            } else return "You lose! Scissors beats Paper. (┛✧Д✧))┛彡┻━┻"
        } else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
              return "You win! Scissors beats Paper. ᕕ( ᐛ )ᕗ"
            } else return "You lose! Rock beats Scissors. (┛✧Д✧))┛彡┻━┻"
        } else return "That is not a valid input, stop cheating! (; ･`д･´)​"
      }
      
      // Function incomplete
      function game() {
          for (let i = 0; i < 5; i++) {
              playRound(playerSelection, computerSelection) 
        if (playerSelection == computerSelection) {
          return "It's a draw! Try again. ¯\_(ツ)_/¯";
        } else if (playerSelection == "rock") {
            if (computerSelection == "scissors") {
              return "You win! Rock beats Scissors. ᕕ( ᐛ )ᕗ";
              } else return "You lose! Paper beats Rock. (┛✧Д✧))┛彡┻━┻";
        } else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
              return "You win! Paper beats Rock. ᕕ( ᐛ )ᕗ";
            } else return "You lose! Scissors beats Paper. (┛✧Д✧))┛彡┻━┻"
        } else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
              return "You win! Scissors beats Paper. ᕕ( ᐛ )ᕗ"
            } else return "You lose! Rock beats Scissors. (┛✧Д✧))┛彡┻━┻"
        } else return "That is not a valid input, stop cheating! (; ･`д･´)​"
      }
          }
      
      
      const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
      const computerSelection = computerPlay();
      console.log(game());
      
      
      /* Use "game" function to play five rounds
      If player wins, print a win message; if player loses, print lose message; if a draw, print draw message
      Start from base count Wins: 0 and Losses: 0
      If player wins, add 1 to Wins; if player loses, add 1 to losses
      A draw does not add to win or loss count, and does not count toward 5 rounds
      After 5 rounds played, display final win/loss count with final message
      */