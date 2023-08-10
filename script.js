/**
 * Represents the options rock, paper, and scissors in the game.
 * @constant {string}
 */
const OPT_ROCK = "rock";
const OPT_PAPER = "paper";
const OPT_SCISSORS = "scissors";

/**
 * Generates a random integer between the given minimum and maximum values (inclusive).
 * @returns {number} A random integer between the specified range.
 */
function getRandomInt() {
  const MIN = 1;
  const MAX = 3;

  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

/**
 * Gets the computer's choice in the game randomly.
 * @returns {string} The computer's choice - either 'rock', 'paper', or 'scissors'.
 */
function getComputerChoice() {
  const computerChoice = getRandomInt();

  switch (computerChoice) {
    case 1:
      return OPT_ROCK;
    case 2:
      return OPT_PAPER;
    case 3:
      return OPT_SCISSORS;
  }
}

/**
 * Retrieves and validates the player's choice for the game.
 * @returns {string | null} The player's valid choice (Rock, Paper, or Scissors), or null if canceled.
 */
function getPlayerChoice() {
  let playerChoice;

  while (playerChoice !== null) {
    playerChoice = prompt("CHOOSE: Rock, Paper, or Scissors");

    if (playerChoice === null) {
      return null;
    }

    if (playerChoice === "") {
      alert(
        "INFO: You have to choose from rock, paper, or scissors to start playing."
      );
      continue;
    } else {
      if (validatePlayerChoice(playerChoice)) {
        return playerChoice;
      } else {
        alert("WARNING!: Invalid input! Please try again.");
        continue;
      }
    }
  }
}

/**
 * Validates the player's choice for the game.
 * @param {string} playerChoice - The player's choice to be validated.
 * @returns {boolean} True if the choice is valid (Rock, Paper, or Scissors), false otherwise.
 */
function validatePlayerChoice(playerChoice) {
  playerChoice = playerChoice.trim().toLowerCase();
  const regex = /[^a-zA-Z]/;

  if (
    !regex.test(playerChoice) &&
    (playerChoice === OPT_ROCK ||
      playerChoice === OPT_PAPER ||
      playerChoice === OPT_SCISSORS)
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Simulates a single round of the game (rock, paper, scissors) between the player and the computer.
 * Determines the winner of the round based on the choices made by both the player and the computer.
 *
 * @param {string} playerSelection - The player's choice for the round. Must be one of: "rock", "paper", or "scissors".
 * @param {string} computerSelection - The computer's choice for the round. Must be one of: "rock", "paper", or "scissors".
 * @returns {Object} - An object containing the result of the round.
 *   - isWinner: A boolean indicating if the player won the round (true), lost the round (false), or it was a draw (null).
 *   - player: The player's choice for the round (one of: "rock", "paper", or "scissors").
 *   - computer: The computer's choice for the round (one of: "rock", "paper", or "scissors").
 *   - msg: A message describing the outcome of the round, e.g., "PLAYER WINS!", "COMPUTER WINS!", or "DRAW".
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      isWinner: null,
      player: playerSelection,
      computer: computerSelection,
      msg: "DRAW",
    };
  }

  if (
    (playerSelection === OPT_ROCK && computerSelection === OPT_SCISSORS) ||
    (playerSelection === OPT_PAPER && computerSelection === OPT_ROCK) ||
    (playerSelection === OPT_SCISSORS && computerSelection === OPT_PAPER)
  ) {
    return {
      isWinner: true,
      player: playerSelection,
      computer: computerSelection,
      msg: "PLAYER WINS!",
    };
  }

  return {
    isWinner: false,
    player: playerSelection,
    computer: computerSelection,
    msg: "COMPUTER WINS!",
  };
}

/**
 * Starts and manages a game of rock, paper, scissors between the player and the computer.
 * The game is played in rounds until either the player or the computer reaches a score of 5.
 * The player and computer make their choices for each round, and the outcome is displayed in the console.
 * The game continues until one of the players reaches a score of 5.
 *
 * @returns {void} - The function does not return a value directly but logs the result of each round and the final winner to
 * the console.
 */
function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore !== 5 && computerScore !== 5) {
    let gamePlay = playRound(getPlayerChoice(), getComputerChoice());
    switch (gamePlay.isWinner) {
      case null:
        console.log(
          `${gamePlay.msg} | Player: ${gamePlay.player}; Computer: ${gamePlay.computer} | Score: P-${playerScore}/C-${computerScore}`
        );
        continue;
      case true:
        playerScore++;
        console.log(
          `${gamePlay.msg} | Player: ${gamePlay.player}; Computer: ${gamePlay.computer} | Score: P-${playerScore}/C-${computerScore}`
        );
        continue;
      case false:
        computerScore++;
        console.log(
          `${gamePlay.msg} | Player: ${gamePlay.player}; Computer: ${gamePlay.computer} | Score: P-${playerScore}/C-${computerScore}`
        );
        continue;
    }
  }

  if (playerScore > computerScore) {
    return console.log(`YOU ARE THE WINNER!`);
  } else {
    return console.log(`COMPUTER IS THE WINNER!`);
  }
}

// game();
console.log(getPlayerChoice());
