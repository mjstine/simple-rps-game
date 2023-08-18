const startBtn = document.querySelector("#startBtn");
const quitBtn = document.querySelector("#quitBtn");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const gameChoices = document.querySelector(".game-choices");

let playerPoint = document.querySelector("#playerPoint");
let computerPoint = document.querySelector("#computerPoint");
let gameResult = document.querySelector("#gameResult");

let playerScore = 0;
let computerScore = 0;

/**
 * Initializes the game by resetting scores, enabling game buttons, and preparing for a new game session.
 * This function is called when the player clicks the "Start" button to begin a new game.
 */
const startGame = () => {
  playerPoint.textContent = "0";
  computerPoint.textContent = "0";
  gameResult.textContent = "";

  quitBtn.disabled = false;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  startBtn.disabled = true;
  return;
};

/**
 * Ends the ongoing game session, displays a message indicating the game has ended, and disables game buttons.
 * This function is triggered when the player decides to quit the game.
 */
const quitGame = () => {
  gameResult.textContent = "GAME ENDED";

  quitBtn.disabled = true;
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
  startBtn.disabled = false;
  playerScore = 0;
  computerScore = 0;
  return;
};

/**
 * Determines the result of a single round in the game based on the player's and computer's choices.
 *
 * @param {string} player - The player's choice ("rock", "paper", or "scissors").
 * @param {string} computer - The computer's choice ("rock", "paper", or "scissors").
 * @returns {boolean|undefined} - True if the player wins, false if the computer wins, and undefined if it's a tie.
 * This function calculates the outcome of a game round to determine the winner or if it's a tie.
 */
const getRoundResult = (player, computer) => {
  if (player === computer) {
    return undefined;
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * Updates the scores and corresponding UI elements based on the result of a game round.
 *
 * @param {boolean} result - The result of the round (true for player win, false for computer win).
 * This function ensures that the player's and computer's scores are correctly updated on the UI.
 */
const updateScore = (result) => {
  if (result) {
    playerScore++;
    playerPoint.textContent = playerScore.toString();
    return;
  } else {
    computerScore++;
    computerPoint.textContent = computerScore.toString();
    return;
  }
};

/**
 * Simulates a single round of the game, calculates the result, and updates the UI to display the outcome.
 *
 * @param {string} playerChoice - The player's choice ("rock", "paper", or "scissors").
 * This function triggers a round of the game, calculates the result, and displays the winner or tie on the UI.
 */
const playRound = (playerChoice) => {
  const computerChoices = ["rock", "paper", "scissors"];
  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  const roundResult = getRoundResult(playerChoice, computerChoice);
  console.log(roundResult);

  if (roundResult === undefined) {
    gameResult.textContent = `IT'S A TIE! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    return;
  }

  if (getRoundResult(playerChoice, computerChoice)) {
    gameResult.textContent = `YOU WIN! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    updateScore(roundResult);
    return;
  } else {
    gameResult.textContent = `COMPUTER WIN! | Player: ${playerChoice.toUpperCase()} | Computer: ${computerChoice.toUpperCase()}`;
    updateScore(roundResult);
    return;
  }
};

/**
 * Ends the game session if either the player or the computer reaches a score of 5 points.
 * This function checks if a player has won the game by reaching a score of 5, and resets the game if necessary.
 */
const endGame = () => {
  if (playerScore === 5 || computerScore === 5) {
    quitBtn.disabled = true;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    startBtn.disabled = false;
    playerScore = 0;
    computerScore = 0;
  }
};

startBtn.addEventListener("click", startGame);
quitBtn.addEventListener("click", quitGame);
gameChoices.addEventListener("click", (event) => {
  if (event.target.classList.contains("game-choices__btn")) {
    playRound(event.target.textContent.trim().toLowerCase());
  }
  endGame();
});
