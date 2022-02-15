function computerPlay() {
    let number = Math.floor(Math.random()*10);
    if (number <= 3) {
        return "Rock";
    }
    else if (number > 3 && number <= 6) {
        return "Paper";
    }
    else (number > 6) 
        return "Scissors";
    }
console.log(computerPlay());