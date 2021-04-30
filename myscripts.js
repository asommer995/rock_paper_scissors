function computerPlay() {
    randomNumber = Math.random();
    if (randomNumber <= (1/3)) {
        return "rock";
    } else if (randomNumber <= (2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}
function playRound() {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            alert("It's a tie!");
            return "It's a tie!";
        } else if (computerSelection == "paper") {
            computerScore += 1;
            alert("Computer wins!");
            return "Computer wins!";
        } else {
            playerScore += 1;
            alert("You win!");
            return "You win!";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            alert("It's a tie!");
            return "It's a tie!";
        } else if (computerSelection == "scissors") {
            computerScore += 1;
            alert("Computer wins!");
            return "Computer wins!";
        } else {
            playerScore += 1;
            alert("You win!");
            return "You win!";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            alert("It's a tie!");
            return "It's a tie!";
        } else if (computerSelection == "rock") {
            computerScore += 1;
            alert("Computer wins!");
            return "Computer wins!";
        } else {
            playerScore += 1;
            alert("You win!");
            return "You win!";
        }
    }
}

function game() {
    console.log("Game " + gameNumber + ":");
    playerSelection = prompt("Choose rock, paper, or scissors.");
    playerSelection = playerSelection.toLowerCase();
    console.log("You chose " + playerSelection + ".");
    computerSelection = computerPlay(randomNumber);
    console.log("Computer chose " + computerSelection + ".");
    console.log(playRound());
    alert("Your score: " + playerScore + "\nComputer score: " + computerScore);
    console.log(" ")
    gameNumber++;
}

let playerSelection;
let computerSelection;
let randomNumber;
let playerScore = 0;
let computerScore = 0;
let gameNumber = 1;

alert("Rock, paper, scissors - first to 5 wins.");
console.log("Rock, paper, scissors - first to 5 wins.");
console.log(" ");

while (playerScore < 5 && computerScore < 5) {
    game();
}

if (playerScore > computerScore) {
    console.log("You win!");
} else {
    console.log("Computer wins!")
}

console.log("Your score: " + playerScore);
console.log("Computer score: " + computerScore);
