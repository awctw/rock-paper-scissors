//Randomly returns either Rock, Paper, Scissors
function computerPlay() {
  let arr = ["Rock", "Paper", "Scissors"];

  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

//calculates the winner between the player and computer
function playRound(playerSelection, computerSelection) {
  let temp = playerSelection.toUpperCase();

  switch (temp) {
    case "ROCK":
      if (computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
      } else if (computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
      } else if (computerSelection === "Rock") {
        return "It's a Tie!";
      }

    case "PAPER":
      if (computerSelection === "Paper") {
        return "It's a Tie!";
      } else if (computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
      } else if (computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
      }

    case "SCISSORS":
      if (computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
      } else if (computerSelection === "Scissors") {
        return "It's a Tie!";
      } else if (computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
      }

    default:
      return "Your input is invalid!";
  }
}

//plays the game 5 times, records the current score
function game() {
  let computerScore = 0;
  let userScore = 0;

  for (let i = 1; i <= 5; i++) {
    let input = prompt("Rock, Paper, Scissors?", "");

    let result = playRound(input, computerPlay());

    if (result.includes("Win")) {
      userScore += 1;
    } else if (result.includes("Lose")) {
      computerScore += 1;
    } else if (result.includes("Tie")) {
      userScore += 1;
      computerScore += 1;
    }

    alert(
      result +
        "\r\n" +
        "The Current Score is: You = " +
        userScore +
        " Computer = " +
        computerScore
    );
  }

  if (computerScore > userScore) {
    alert(
      "The Final Score is: You = " +
        userScore +
        " Computer = " +
        computerScore +
        "\r\n" +
        "You Lost!"
    );
  } else if (computerScore < userScore) {
    alert(
      "The Final Score is: You = " +
        userScore +
        " Computer = " +
        computerScore +
        "\r\n" +
        "You Won!"
    );
  } else if (computerScore === userScore) {
    alert(
      "The Final Score is: You = " +
        userScore +
        " Computer = " +
        computerScore +
        "\r\n" +
        "It's a Tie!"
    );
  }
}
