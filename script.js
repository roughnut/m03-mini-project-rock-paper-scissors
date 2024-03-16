// Create object to store user choices, computer choices, results and # of games

const gameStats = {
  playerChoices: {
    rock: 0,
    paper: 0,
    scissors: 0,
  },
  computerChoices: {
    rock: 0,
    paper: 0,
    scissors: 0,
  },
  playerResults: {
    wins: 0,
    losses: 0,
    ties: 0,
  },
  gamesPlayed: 0,
};

// Function to get player name
function getPlayerName() {
  return prompt("Awesome! What's your name?");
}

// Function to end the game
function endGame(name) {
  if (gameStats.gamesPlayed === 0) {
    alert("Sorry to see you go!");
  } else {
    alert(`Here are your final results, ${name}:\r
  Wins: ${gameStats.playerResults.wins}\r
  Losses: ${gameStats.playerResults.losses}\r
  Ties: ${gameStats.playerResults.ties}\r
  Your selections were:\r
  Rock: ${gameStats.playerChoices.rock}\r
  Paper: ${gameStats.playerChoices.paper}\r
  Scissors: ${gameStats.playerChoices.scissors}\r
  Come back soon!`);
    console.log(gameStats);
  }
}

// Function to get player choice
function getPlayerChoice(name) {
  let choice = prompt(
    `Okay ${name}, choose Rock, Paper, or Scissors? Please type "R", "P" or "S"`
  );
  choice = choice.toUpperCase();
  if (choice === "R" || choice === "P" || choice === "S") {
    if (choice === "R") {
      gameStats.playerChoices.rock++;
      return "Rock";
    } else if (choice === "P") {
      gameStats.playerChoices.paper++;
      return "Paper";
    } else {
      gameStats.playerChoices.scissors++;
      return "Scissors";
    }
  } else {
    alert("Invalid choice. Please try again.");
    return getPlayerChoice(name);
  }
}

// Function to get computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    gameStats.computerChoices.rock++;
    return "Rock";
  } else if (randomNumber === 1) {
    gameStats.computerChoices.paper++;
    return "Paper";
  } else {
    gameStats.computerChoices.scissors++;
    return "Scissors";
  }
}

// Function to determine winner
function determineWinner(player, computer) {
  if (player === computer) {
    gameStats.playerResults.ties++;
    alert(`It's a tie! \u{1F926}`);
    return;
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    gameStats.playerResults.wins++;
    alert(`${player} beats ${computer} - You win! \u{1F64C}`);
    return;
  } else {
    gameStats.playerResults.losses++;
    alert(`${computer} beats ${player} - You lose! \u{1F92C}`);
    return;
  }
}

// Function to ask to play again
function playAgain(name) {
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    playGame(name);
  } else {
    endGame(name);
  }
}

// Function play the game
function playGame(name) {
  // get player  choice
  const playerChoice = getPlayerChoice(name);
  console.log(`Player choice: ${playerChoice}`);
  alert(`You chose ${playerChoice}.
  Lets' see what the computer chose!`);

  // get computer's choice
  const computerChoice = getComputerChoice();
  console.log(`Computer choice: ${computerChoice}`);
  alert(`The computer chose ${computerChoice}..., which means...`);

  // determine winner
  determineWinner(playerChoice, computerChoice);
  gameStats.gamesPlayed++;

  // ask to play again
  playAgain(name);
}

// Confirm user wants to play RPS

const gameOn = confirm("Hey there! Do you want to play Rock, Paper, Scissors?");
console.log(gameOn);
if (!gameOn) {
  endGame();
} else {
  // ask player for their name
  const playerName = getPlayerName();
  console.log(playerName);
  playGame(playerName);
}
