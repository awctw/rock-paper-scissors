//Randomly returns either Rock, Paper, Scissors
function computerPlay() {
  let arr = ["Rock", "Paper", "Scissors"];

  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

let div = document.querySelector("#results");

//results for player selection of rock
function rock(computerSelection) {
  if (computerSelection === "Paper") {
    div.innerHTML = "You Lose! Paper beats Rock";
    currentScore("Lose");
  } else if (computerSelection === "Scissors") {
    div.innerHTML = "You Win! Rock beats Scissors";
    currentScore("Win");
  } else if (computerSelection === "Rock") {
    div.innerHTML = "It's a Tie!";
    currentScore("Tie");
  }
}

//results for player selection of paper
function paper(computerSelection) {
  if (computerSelection === "Paper") {
    div.innerHTML = "It's a Tie!";
    currentScore("Tie");
  } else if (computerSelection === "Scissors") {
    div.innerHTML = "You Lose! Scissors beats Paper";
    currentScore("Lose");
  } else if (computerSelection === "Rock") {
    div.innerHTML = "You Win! Paper beats Rock";
    currentScore("Win");
  }
}

//results for player selection of scissors
function scissors(computerSelection) {
  if (computerSelection === "Paper") {
    div.innerHTML = "You Win! Scissors beats Paper";
    currentScore("Win");
  } else if (computerSelection === "Scissors") {
    div.innerHTML = "It's a Tie!";
    currentScore("Tie");
  } else if (computerSelection === "Rock") {
    div.innerHTML = "You Lose! Rock beats Scissors";
    currentScore("Lose");
  }
}

//calculates the winner between the player and computer
function playRound(playerSelection, computerSelection) {
  let temp = playerSelection.toUpperCase();
  if (temp === "ROCK") {
    rock(computerSelection);
  } else if (temp === "PAPER") {
    paper(computerSelection);
  } else if (temp === "SCISSORS") {
    scissors(computerSelection);
  }
}

let computerScore = 0;
let userScore = 0;
let score = document.querySelector("#score");
let final = document.querySelector("#finalScore");

//displays the current score and the final winner
function currentScore(result) {
  if (result === "Win") {
    userScore += 1;
  } else if (result === "Lose") {
    computerScore += 1;
  } else if (result === "Tie") {
    userScore += 1;
    computerScore += 1;
  }

  score.innerHTML =
    "The Current Score is: You = " + userScore + " Computer = " + computerScore;

  if (computerScore === 5 && userScore === 5) {
    "The Final Score is: You = " +
      userScore +
      " Computer = " +
      computerScore +
      "\r\n" +
      "It's a Tie!";
  } else if (computerScore === 5) {
    final.innerHTML =
      "The Final Score is: You = " +
      userScore +
      " Computer = " +
      computerScore +
      "\r\n" +
      "You Lost!";
  } else if (userScore === 5) {
    final.innerHTML =
      "The Final Score is: You = " +
      userScore +
      " Computer = " +
      computerScore +
      "\r\n" +
      "You Won!";
  }
}

const buttons = document.querySelectorAll("button");

//makes each button the player selection and begin the game
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    playRound(button.id, computerPlay());
  });
});
