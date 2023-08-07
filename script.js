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
  let computerChoice = getRandomInt();
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
 * Prompts the player to enter their choice for the game (rock, paper, or scissors).
 * The function handles various scenarios, including canceling the game, empty input, and validation of the choice.
 * 
 * @returns {string|undefined} - The player's valid choice (one of "rock", "paper", or "scissors") in lowercase,
 * or undefined if the player cancels the prompt or enters an empty choice.
 */
function getPlayerChoice() {
  let playerChoice = prompt("Please enter either rock, paper, or scissors:");
  if (playerChoice === null) {
    return;
  }

  if (playerChoice === "") {
    alert("To start playing, please enter either rock, paper, or scissors.");
    return getPlayerChoice();
  }

  playerChoice.trim().toLowerCase();
  if (validatePlayerChoice(playerChoice)) {
    return playerChoice;
  }
}

/**
 * Validates the player's choice for a game. The function checks if the entry contains a number or special character.
 * If so, it prompts the player to enter a valid entry. Otherwise, it returns true confirming that the entry is valid.
 * 
 * @param {string} playerChoice - The player's input to be validated.
 * @returns {boolean} - Returns true if the player's input is valid, otherwise recursively prompts for a valid input.
 */
function validatePlayerChoice(playerChoice) {
  let regex = /[^a-zA-Z]/;

  if (!isNaN(playerChoice) || regex.test(playerChoice)) {
    alert(
      "Please enter letters only. Numbers and special characters are not allowed."
    );
    return getPlayerChoice();
  }

  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    alert("Please enter either rock, paper, or scissors only.");
    return getPlayerChoice();
  }

  return true;
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
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
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

game();