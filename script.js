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
 * Simulates a round of a rock-paper-scissors game between a player and the computer.
 * @param {string} playerSelection - The player's choice (should be 'rock', 'paper', or 'scissors').
 * @param {string} computerSelection - The computer's randomly generated choice.
 * @returns {?boolean} The result of the game round:
 *   - `true` if the player wins.
 *   - `false` if the computer wins.
 *   - `undefined` if the round is a draw.
 *   - `null` if `playerSelection` is `null`.
 */
function playRound(playerSelection, computerSelection) {
  if (playerSelection === null) {
    return null;
  }

  if (playerSelection === computerSelection) {
    return undefined;
  } else if (
    (playerSelection === OPT_ROCK && computerSelection === OPT_SCISSORS) ||
    (playerSelection === OPT_PAPER && computerSelection === OPT_ROCK) ||
    (playerSelection === OPT_SCISSORS && computerSelection === OPT_PAPER)
  ) {
    return true;
  } else {
    return false;
  }
}

/**
 * Simulates a rock-paper-scissors game between a player and a computer until one of them reaches
 * a score of 5.
 */
function game() {
  let playerScore = 0;
  let computerScore = 0;

  while (playerScore !== 5 && computerScore !== 5) {
    const player = getPlayerChoice();
    const computer = getComputerChoice();

    if (player === null) {
      return console.log(`GAME CANCELLED!`);
    }

    switch (playRound(player, computer)) {
      case undefined:
        console.log(
          `DRAW! | Player: ${player} - ${playerScore} | Computer: ${computer} - ${computerScore}`
        );
        continue;
      case true:
        playerScore++;
        console.log(
          `PLAYER WIN! | Player: ${player} - ${playerScore} | Computer: ${computer} - ${computerScore}`
        );
        continue;
      case false:
        computerScore++;
        console.log(
          `COMPUTER WIN! | Player: ${player} - ${playerScore} | Computer: ${computer} - ${computerScore}`
        );
        continue;
    }
  }

  if (playerScore > computerScore && player) {
    return console.log(`YOU ARE THE WINNER!`);
  } else {
    return console.log(`COMPUTER IS THE WINNER!`);
  }
}

game();
